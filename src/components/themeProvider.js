"use client"

import { useState,useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import 'flowbite';
import 'animate.css';

export default function Provider({children}){

  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}