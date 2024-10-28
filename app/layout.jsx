import React from 'react'
import "@/styles/globals.css"

export const metadata = {
    title: "Positivus | Leading Digital Marketing Agency",
    description: "Positivus helps businesses grow online through SEO, PPC, social media marketing, content creation, and analytics.",
    keywords: "Digital Marketing, SEO, PPC, Social Media Marketing, Content Creation, Email Marketing, Analytics",
    author: "Davit Grdzelishvili",
    icons: {
        icon: ["/favicon.svg"], // Ensure you have the favicon in the public directory
    },
    openGraph: {
        title: "Positivus | Leading Digital Marketing Agency",
        description: "Navigating the digital landscape for success. Our agency provides a range of services to help your business thrive online.",
        url: "https://www.positivus.com", // Replace with your actual URL
        site_name: "Positivus",
        images: [
            {
                url: "https://www.positivus.com/og-image.jpg", // Replace with your actual image URL
                width: 800,
                height: 600,
                alt: "Positivus Digital Marketing",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@positivus", // Replace with your Twitter handle if you have one
        title: "Positivus | Leading Digital Marketing Agency",
        description: "Helping businesses succeed in the digital landscape.",
        image: "https://www.positivus.com/twitter-image.jpg", // Replace with your actual Twitter image URL
    },
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <head>

            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;
