import CaseStudies from '@/app/layout/CaseStudies'
import ContactUs from '@/app/layout/ContactUs'
import Footers from '@/app/layout/Footers'
import Headers from '@/app/layout/Headers'
import Hero from '@/app/layout/Hero'
import Services from '@/app/layout/Services'
import Team from '@/app/layout/Team'
import Testimonials from '@/app/layout/Testimonials'
import WorkProgress from '@/app/layout/WorkProgress'
import React from 'react'
const page = () => {
    return (
        <div className='py-[3.76rem]'>
            <div>
                <Headers />
            </div>
            <main className='text-heading4'>
                <section>
                    <Hero />
                </section>
                <section>
                    <Services />        
                </section>
                <section>
                    <CaseStudies />
                </section>
                <section>
                    <WorkProgress />
                </section>
                <section>
                    <Team />
                </section>
                <section>
                    <Testimonials />
                </section>
                <section>
                    <ContactUs />
                </section>
            </main>
            <footer>
                <Footers />
            </footer>
        </div>
    )
}

export default page
