import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import Solution from'../Solution/Solution'
import Features from '../Features/Features'
import Work from '../Work/Work'
import Stats from '../Stats/Stats'
import Download from '../Download/Download'
import Support from '../Support/Support'
import Footer from '../Footer/Footer'

export default function LayOut() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Solution/>
      <Features/>
      <Work/>
      <Stats/>
      <Download/>
      <Support/>
      <Footer/>
    </>
  )
}
