// SPDX-License-Identifier: MIT
import "hardhat/console.sol";

pragma solidity ^0.8.17;

/**
 * @title ChainShift
 * @dev ChainShift holds funds in escrow until the business partners meet the supply chain requirements
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */


contract ChainShift {
    address payable public payer;
    address payable public payee;
    address public arbitrator;
    uint256 public amount;
    bool public conditionsMet;
    bool public fundsReleased;

    constructor(address payable _payee, address _arbitrator) payable {
        require(_payee != address(0), "Invalid payee address");
        require(_arbitrator != address(0), "Invalid arbitrator address");
        payer = payable(msg.sender);
        payee = _payee;
        arbitrator = _arbitrator;
        amount = msg.value;
        conditionsMet = false;
        fundsReleased = false;
    }

    modifier onlyPayer() {
        require(msg.sender == payer, "Only payer can call this function.");
        _;
    }

    modifier onlyPayee() {
        require(msg.sender == payee, "Only payee can call this function.");
        _;
    }

    modifier onlyArbitrator() {
        require(msg.sender == arbitrator, "Only arbitrator can call this function.");
        _;
    }

    function meetConditions() external onlyPayee {
        require(!conditionsMet, "Conditions have already been met.");
        conditionsMet = true;
    }

    function releaseFunds() external onlyPayee {
        require(conditionsMet, "Conditions have not been met yet.");
        require(!fundsReleased, "Funds have already been released.");
        fundsReleased = true;
        _safeTransfer(payee, amount);
    }

    function refundFunds() external onlyPayer {
        require(!conditionsMet, "Conditions have been met.");
        require(!fundsReleased, "Funds have already been released.");
        fundsReleased = true;
        _safeTransfer(payer, amount);
    }

    function resolveDispute() external onlyArbitrator {
        require(!fundsReleased, "Funds have already been released.");
        require(conditionsMet, "Conditions have not been met yet.");
        fundsReleased = true;
        _safeTransfer(payee, amount);
    }

    function _safeTransfer(address payable _to, uint256 _amount) private {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Transfer failed.");
    }

    receive() external payable {
        require(msg.sender == payer, "Invalid sender.");
        require(msg.value > 0, "Invalid value.");
        amount += msg.value;
    }
}
