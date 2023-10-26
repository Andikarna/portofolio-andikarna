"use client";

import { useTheme } from "next-themes"
import { useEffect, useState } from "react";


// icons
import { IoCloudyNightOutline } from "react-icons/io5";
import { IoPartlySunnyOutline  } from "react-icons/io5";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const swicthTheme = () => {
    if (theme === 'light') {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <button type="submit" onClick={swicthTheme} alt="swtch-button" className="text-dark dark:text-teal-500 dark:hover:text-teal-300">
      {theme === 'light' ? (
        <IoPartlySunnyOutline />
      ) : (
        <IoCloudyNightOutline />
      )}
    </button>

  )
}

export default ThemeSwitch