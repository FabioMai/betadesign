import Head from 'next/head'

import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ThreeColumn } from '@/components/ThreeColumn'
import { CTA1 } from '@/components/CTA1'
import { Team } from '@/components/Team'

import { Logos } from '@/components/Logos'
import { Introduction } from '@/components/Introduction'
import { Features } from '@/components/Features'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { Content } from '@/components/Content'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/CTA'
import { FAQ } from '@/components/FAQ'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'

import { NavBar } from '@/components/NavBar'

import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <SecondaryFeatures />
      <ThreeColumn />
      <CTA1 />

      {/* <Introduction /> */}
      <Features />
      <Gallery />
      <Testimonials />
      <Logos />
      {/* <Content />
      <Pricing /> */}
      <Team />
      <CTA1 />
      <FAQ />

      {/* <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />*/}
      <Footer />
    </>
  )
}
