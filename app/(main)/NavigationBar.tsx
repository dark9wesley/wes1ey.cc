'use client'

import { clsxm } from '@zolplay/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { navigationItems } from '~/config/nav'

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsxm(
          'relative block whitespace-nowrap px-3 py-2 transition',
          isActive
            ? 'text-lime-600 dark:text-lime-400'
            : 'hover:text-lime-600 dark:hover:text-lime-400'
        )}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-lime-700/0 via-lime-700/70 to-lime-700/0 dark:from-lime-400/0 dark:via-lime-400/40 dark:to-lime-400/0"
            layoutId="active-nav-item"
          />
        )}
      </Link>
    </li>
  )
}

export default function NavigationBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <nav className={clsxm('group relative', className)} {...props}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <ul className="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 ">
        {navigationItems.map(({ href, text }) => (
          <NavItem key={href} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
