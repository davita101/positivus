const { amazon, hubspot, notion, netflix, zoom, company } = require("@/public/assets/icons/company")
const { linkedin, facebook, twitter } = require("@/public/assets/icons/social")
const { seo, ppc, smm, em, cc, aat, mainPhoto } = require("@/public/assets/images/services")
const { johnSmith, janeDoe, michaelBrown, emilyJohnson, brianWilliams, sarahKim } = require("@/public/assets/images/team")

export const header = [
    {
        link: "aboutUs",
        li: "About us",
    },
    {
        link: "services",
        li: "Services",
    },
    {
        link: "useCases",
        li: "Use Cases",
    },
    {
        link: "pricing",
        li: "Pricing",
    },
    {
        link: "blog",
        li: "Blog",
    }
];

export const hero = [{
    largeHeading: "Navigating the digital landscape for success",
    paragraph: "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
    button: "Book a consultation",
}];
export const logos = [
    {
        src: amazon,
        alt: "Amazon logo"
    },
    {
        src: company,
        alt: "Company logo",
    },
    {
        src: hubspot,
        alt: "HubSpot logo",
    },
    {
        src: notion,
        alt: "Notion logo"
    },
    {
        src: netflix,
        alt: "Netflix logo"
    },
    {
        src: zoom,
        alt: "Zoom logo"
    }
];
export const servicesHeading = [
    {
        headingMedium: "Services",
        paragraph: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
    },
];
export const servicesInfo = [
    {
        headingSmall1: "Search engine",
        headingSmall2: "optimization",
        src: seo,
        alt: "Search engine optimization logo",
        link: "#"
    },
    {
        headingSmall1: "Pay-per-click",
        headingSmall2: "advertising",
        src: ppc,
        alt: "Pay per click advertising logo",
        link: "#"
    },
    {
        headingSmall1: "Social Media",
        headingSmall2: "Marketing",
        src: smm,
        alt: "Social Media Marketing logo",
        link: "#"
    },
    {
        headingSmall1: "Email",
        headingSmall2: "Marketing",
        src: em,
        alt: "Email Marketing logo",
        link: "#"
    },
    {
        headingSmall1: "Content",
        headingSmall2: "Creation",
        src: cc,
        alt: "Email Marketing logo",
        link: "#"
    },
    {
        headingSmall1: "Analytics and",
        headingSmall2: "Tracking",
        src: aat,
        alt: "Analytics and Tracking logo",
        link: "#"
    },
];

export const servicesFooter = [
    {
        headingSmall: "Let’s make things happen",
        paragraph: "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
        src: mainPhoto,
        alt: "Proposal logo"
    },
];

export const caseStudiesHeading = [
    {
        headingLarge: "Case Studies",
        paragraph: "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    }
];
export const caseStudies = [
    {
        paragraph: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        link: "#"
    },
    {
        paragraph: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        link: "#"
    },
    {
        paragraph: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        link: "#"
    }
];
export const ourWorkingProcessHeading = [
    {
        headingLarge: "Our Working Process",
        paragraph: "Step-by-Step Guide to Achieving Your Business Goals"
    }
];

export const ourWorkingProcess = [
    {
        id: "01",
        headingMedium: "Consultation",
        paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id: "02",
        headingMedium: "Research and Strategy Development",
        paragraph: "In the research and strategy development phase, we conduct a thorough analysis of your market, competitors, and customer behavior. This helps us develop a strategic plan that aligns with your business goals and sets the foundation for successful implementation."
    },
    {
        id: "03",
        headingMedium: "Implementation",
        paragraph: "During the implementation stage, we put the strategy into action by executing the planned marketing tactics. This includes creating and deploying campaigns across various channels, ensuring that each step is in line with the overall strategy."
    },
    {
        id: "04",
        headingMedium: "Monitoring and Optimization",
        paragraph: "We continuously monitor the performance of the implemented strategies, analyzing key metrics and making data-driven adjustments to optimize results. This ongoing process ensures that we stay on track to meet your business objectives."
    },
    {
        id: "05",
        headingMedium: "Reporting and Communication",
        paragraph: "Regular reporting and communication are crucial to keeping you informed about the progress of our efforts. We provide detailed reports on performance, highlighting successes and areas for improvement, while maintaining open lines of communication."
    },
    {
        id: "06",
        headingMedium: "Continual Improvement",
        paragraph: "The final step is the continual improvement process. We use the insights gained from monitoring and reporting to refine and enhance our strategies, ensuring that we consistently deliver better results over time."
    }
];

export const teamHeading = [
    {
        headingLarge: 'Team',
        paragraph: "Meet the skilled and experienced team behind our successful digital marketing strategies"
    }
];
export const team = [
    {
        src: johnSmith,
        headingXSmall1: "John Smith",
        headingXSmall2: "CEO and Founder",
        paragraph: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        link: "#"
    },
    {
        src: janeDoe,
        headingXSmall1: "Jane Doe",
        headingXSmall2: "Director of Operations",
        paragraph: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        link: "#"
    },
    {
        src: michaelBrown,
        headingXSmall1: "Michael Brown",
        headingXSmall2: "Senior SEO Specialist",
        paragraph: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        link: "#"
    },
    {
        src: emilyJohnson,
        headingXSmall1: "Emily Johnson",
        headingXSmall2: "PPC Manager",
        paragraph: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        link: "#"
    },
    {
        src: brianWilliams,
        headingXSmall1: "Brian Williams",
        headingXSmall2: "Social Media Specialist",
        paragraph: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        link: "#"
    },
    {
        src: sarahKim,
        headingXSmall1: "Sarah Kim",
        headingXSmall2: "Content Creator",
        paragraph: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        link: "#"
    }
];

export const testimonialsHeading = [
    {
        headingLarge: "Testimonials",
        span: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    }
];
export const testimonials = [
    {
        name: "John Smith",
        span: "Marketing Director at XYZ Corp",
        paragraph: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        name: "Jane Doe",
        span: "CEO at ABC Enterprises",
        paragraph: "Positivus helped us overhaul our entire digital marketing strategy, and the results have been outstanding. Their expertise in SEO and PPC has dramatically improved our online visibility and sales. They are a trusted partner, and we couldn't be happier with their services."
    },
    {
        name: "Michael Brown",
        span: "Operations Manager at Tech Solutions Inc.",
        paragraph: "Our collaboration with Positivus has been nothing short of transformative. Their innovative social media strategies and content creation have greatly increased our engagement rates. The team is not only creative but also data-driven, ensuring our campaigns are always optimized for the best results."
    },
    {
        name: "Emily Johnson",
        span: "Founder of Johnson & Co.",
        paragraph: "Positivus has played a pivotal role in the success of our digital marketing efforts. Their team is incredibly knowledgeable and proactive, helping us stay ahead of the competition. Their attention to detail and commitment to excellence is unmatched. We highly recommend them to anyone looking to take their marketing to the next level."
    },
    {
        name: "Brian Williams",
        span: "Head of Sales at Global Retailers",
        paragraph: "Working with Positivus has been a game-changer for our online sales. Their expertise in PPC management and conversion optimization has helped us reach new heights in our business. The team is always available to provide insights and recommendations, making them an invaluable extension of our in-house team."
    },
    {
        name: "Sarah Kim",
        span: "Content Manager at Creative Works",
        paragraph: "Positivus has been instrumental in elevating our content marketing strategy. Their team excels at creating engaging, SEO-friendly content that resonates with our audience. We've seen a significant boost in organic traffic and customer engagement since partnering with them. Their creativity and dedication set them apart in the industry."
    }
];
export const contactUsHeading = [
    {
        headingLarge: "Contact Us",
        span: "Connect with Us: Let's Discuss Your Digital Marketing Needs"
    }
];
export const contactUs = [
    {
        label: "Name",
        placeholder: 'Name'
    },
    {
        label: "Email*",
        placeholder: 'Email'
    },
    {
        label: "Message*",
        placeholder: "Message"
    }
];

export const footerSocial = [
    {
        src: linkedin,
        alt: "Linkedin logo",
        link: "https://www.linkedin.com"
    },
    {
        src: facebook,
        alt: "Facebook logo",
        link: "https://www.facebook.com"
    },
    {
        src: twitter,
        alt: "Twitter logo",
        link: "https://www.wtitter.com"
    }
];
export const contact = [
    {
        email: "info@positivus.com",
        phone: "Phone: 555-567-8901",
        address: "1234 Main St Moonstone City, Stardust State 12345"
    }
];
export const copyright = [
    {
        paragraph: "© 2023 Positivus. All Rights Reserved."
    }
];