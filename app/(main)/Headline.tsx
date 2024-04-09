'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.p
        className="text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          Hey, I am Wesley Peng, A Front end developer from Shenzhen, China.
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://twitter.com/dark9wesley"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://github.com/dark9wesley"
          aria-label="我的 GitHub"
          platform="github"
        />
        {/* <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" /> */}
        <SocialLink
          href="mailto:pengyw@gmail.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
