'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: "Individual Counseling", href: "/services/individual-counseling" },
    { name: "Couples Counseling", href: "/services/couples-counseling" },
    { name: "Teen Counseling", href: "/services/teen-counseling" },
    { name: "Family Therapy", href: "/services/family-therapy" },
    { name: "Grief and Loss", href: "/services/grief-and-loss" },
    { name: "Addiction Recovery", href: "/services/addiction-recovery" },
  ]

  return (
    <header className="bg-deep-blue text-soft-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Pastor's Heart Counseling Logo" width={100} height={100} />
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-8">
            <li><Link href="/" className="hover:text-warm-beige font-sans">Home</Link></li>
            <li><Link href="/about" className="hover:text-warm-beige font-sans">About</Link></li>
            <li className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-warm-beige font-sans flex items-center"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-deep-blue rounded-md shadow-lg z-10">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="block px-4 py-2 text-sm hover:bg-warm-beige hover:text-deep-blue">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="/contact" className="hover:text-warm-beige font-sans">Contact</Link></li>
            <li><Link href="/join-team" className="hover:text-warm-beige font-sans">Join Our Team</Link></li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-transparent border border-soft-white text-soft-white px-4 py-2 rounded-full hover:bg-soft-white hover:text-deep-blue transition-colors font-sans">
              Login
            </button>
            <button className="bg-olive-green text-deep-blue px-4 py-2 rounded-full hover:bg-warm-beige transition-colors font-sans font-semibold">
              Get Started
            </button>
          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-soft-white">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/" className="hover:text-warm-beige font-sans">Home</Link></li>
            <li><Link href="/about" className="hover:text-warm-beige font-sans">About</Link></li>
            <li><Link href="/services" className="hover:text-warm-beige font-sans">Services</Link></li>
            <li><Link href="/contact" className="hover:text-warm-beige font-sans">Contact</Link></li>
            <li><Link href="/join-team" className="hover:text-warm-beige font-sans">Join Our Team</Link></li>
          </ul>
          <div className="flex flex-col items-center space-y-4 py-4">
            <button className="bg-transparent border border-soft-white text-soft-white px-4 py-2 rounded-full hover:bg-soft-white hover:text-deep-blue transition-colors font-sans w-32">
              Login
            </button>
            <button className="bg-olive-green text-deep-blue px-4 py-2 rounded-full hover:bg-warm-beige transition-colors font-sans font-semibold w-32">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
