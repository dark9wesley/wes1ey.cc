import { type ComponentProps } from '@zolplay/react'
import { clsxm } from '@zolplay/utils'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function AvatarContainer({ className, ...props }: ComponentProps) {
  return <div className={clsxm(className, 'h-10 w-10 p-0.5')} {...props} />
}

type AvatarImageProps = ComponentProps &
  Omit<LinkProps, 'href'> & {
    large?: boolean
    href?: string
    alt?: boolean
  }
function AvatarImage({
  large = false,
  className,
  href,
  alt,
  ...props
}: AvatarImageProps) {
  const { resolvedTheme } = useTheme()
  const [imageHref, setImageHref] = useState('')

  useEffect(() => {
    if (resolvedTheme === 'light') {
      setImageHref('/wes-dark.png')
    } else {
      setImageHref('/wes-white.png')
    }
  }, [resolvedTheme])

  return (
    <Link
      aria-label="主页"
      className={clsxm(className, 'pointer-events-auto')}
      href={href ?? '/'}
      {...props}
    >
      <Image
        src={imageHref}
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        alt=""
        className={clsxm('object-cover')}
        priority
        fetchPriority="high"
        unoptimized
      />
    </Link>
  )
}

export const Avatar = Object.assign(AvatarContainer, { Image: AvatarImage })
