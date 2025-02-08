import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
 import Logo from '../../public/pla_logo.png'
import Image from 'next/image'
import { LightToggle } from './Light_Toggle';
import { Book } from 'lucide-react';
import { SignedIn } from '@clerk/nextjs'
function Header() {
  return (
          <header className='sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
                  

                  <div className="container mx-auto px-4 ">
                          <div className="flex h- 16 items-center justify-between gap-4">
                                  


                                  <div className="flex items-center gap -4">
                                          
                                          <Link href={'/'} prefetch={false}>
                                                  <Image src={Logo} alt="logo" className='my-2 h-16 w-32'/>
                                          </Link>
                                  </div>
                                  <div className="flex items-center space-x-2 md:space-x-4">
                                          
                                          
                                          <nav>
                                                  <SignedIn>
                                                  <Link href={'/my-courses'} prefetch={false}
                                                  className='flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2 '
                                                  
                                                  >
                                                  
                                                          <Book />
                                                          
                                                          <span className='hidden md:block'>My Courses</span>
                                                  </Link>    


</SignedIn>
                                          </nav>
                                          <LightToggle/>
                                  </div>
                          </div>
                  </div>
    </header>
  )
}

export default Header