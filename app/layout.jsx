import React from 'react'
import "@/styles/globals.css"

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
