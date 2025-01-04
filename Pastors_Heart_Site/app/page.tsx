import Hero from './components/Hero'
import Stats from './components/Stats'
import Therapists from './components/Therapists'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import GiftMembership from './components/GiftMembership'
import SectionDivider from './components/SectionDivider'
import Head from 'next/head'

export const metadata = {
  title: "Pastor's Heart Counseling - Christian Online Therapy",
  description: "Find hope and healing with Pastor's Heart Counseling. Our licensed Christian therapists offer online counseling for individuals, couples, and teens.",
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Christian counseling, online therapy, pastoral care, mental health, faith-based therapy" />
      </Head>
      <Hero />
      <SectionDivider />
      <Stats />
      <Therapists />
      <HowItWorks />
      <Comparison />
      <Testimonial />
      <FAQ />
      <GiftMembership />
    </>
  )
}
