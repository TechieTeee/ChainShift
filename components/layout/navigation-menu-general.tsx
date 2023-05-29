import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { LinkComponent } from '../shared/link-component'

export function NavigationMenuGeneral() {
  return (
    <NavigationMenu className="self-center">
      <NavigationMenuList className="w-full">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md bg-gradient-to-b from-emerald-500 to-lime-700 p-6 no-underline outline-none focus:shadow-md">
                    <div className="absolute right-0 top-10 z-0 h-48 w-48 bg-[url('https://em-content.zobj.net/thumbs/240/twitter/322/high-voltage_26a1.png')] bg-cover opacity-20" />
                    <div className="z-10">
                      <h3 className="z-10 mb-2 mt-4 text-lg font-medium text-white">
                        <span className="text-4xl">🔗</span>
                        <br />
                        Super Charge Your Supply Chain
                      </h3>
                      <p className="mb-3 text-sm leading-tight text-white/90">Shifting the Paradigm for Supply Chain Payments</p>
                      <p className="text-sm font-bold leading-tight text-white/90">#ChainShift</p>
                    </div>
                  </div>
                </NavigationMenuLink>
              </li>
              <li className="flex flex-col gap-4">
                <LinkComponent href="/dashboard">
                  <div className="card bg-card-with-hover">
                    <h3 className="text-lg font-bold">🎛️ Dashboard</h3>
                    <div className="my-2" />
                    <p className="text-xs">Shifting the Paradigm for Supply Chain Payments</p>
                  </div>
                </LinkComponent>
                <LinkComponent href="/dashboard">
                  <div className="card bg-card-with-hover">
                    <h3 className="text-lg font-bold">🔐 Admin</h3>
                    <div className="my-2" />
                    <p className="text-xs">The ChainShift Admin area is where you can see your app&apos;s users.</p>
                  </div>
                </LinkComponent>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
