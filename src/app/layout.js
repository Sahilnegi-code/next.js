'use client'
import './globals.css' 
import { useEffect } from 'react'; 
import "bootstrap/dist/js/bootstrap";

export default function RootLayout({ children }) {


  return (
    <html lang="en">
        
      <body >{children}</body>
      </html>
  )
}
