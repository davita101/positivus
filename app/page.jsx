import CaseStudies from '@/app/layout/CaseStudies'
import ContactUs from '@/app/layout/ContactUs'
import Footers from '@/app/layout/Footers'
import Headers from '@/app/layout/Headers'
import Hero from '@/app/layout/Hero'
import Services from '@/app/layout/Services'
import Team from '@/app/layout/Team'
import WorkProgress from '@/app/layout/WorkProgress'
import React from 'react'
const page = () => {
    return (
        <div className='pt-[3.76rem] scroll-smooth'>
            <div>
                <Headers />
            </div>
            <main className='text-heading4'>
                <section id='aboutUs'>
                    <Hero />
                </section >
                <section id='services'>
                    <Services />        
                </section>
                <section id='useCases'>
                    <CaseStudies />
                </section>
                <section className='pricing'>
                    <WorkProgress />
                </section>
                <section id='blog'>
                    <Team />
                </section>
            </main>
            <footer>
                <Footers />
            </footer>
        </div>
    )
}

export default page
