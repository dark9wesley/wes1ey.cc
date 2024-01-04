import React from 'react'

import { Headline } from '~/app/(main)/Headline'
import { Container } from '~/components/ui/Container'

export default function BlogHomePage() {
  return (
    <>
      <Container className="mt-10">
        <Headline />
      </Container>
      <Container className="mt-24 md:mt-28"></Container>
    </>
  )
}

export const revalidate = 60
