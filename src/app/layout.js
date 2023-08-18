'use client'
import './globals.css' 


import { Head } from 'next/head'
import "bootstrap/dist/js/bootstrap";
import Script from 'next/script'
export default function RootLayout({ children }) {

  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap');
  // }, []);
  return (
    <html lang="en">
    
    
      <body >{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" />
      </html>
  )
}
