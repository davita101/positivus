import CaseStudies from '@/components/CaseStudies'
import ContactUs from '@/components/ContactUs'
import Footers from '@/components/Footers'
import Headers from '@/components/Headers'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import WorkProgress from '@/components/WorkProgress'
import React from 'react'
const page = () => {
    return (
        <div>
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
