import React from 'react'
import { Footer } from '../cmps/Footer'
import { Hero } from '../cmps/Hero'
import { Navbar } from '../cmps/Navbar'


export function Home() {
  const style = {
    h1: { color: '#f7e8f6' },
    a: { color: '#f7e8f6' },
    p: { color: '#f7e8f6' }
  }
  return (
    <section className="home relative">
      <div className="bg absolute"></div>
      <Navbar style={style} />
      <Hero />
      <Footer style={style} />
    </section>
  )
}