import { useState, useEffect } from 'react'
import { appConfigs } from 'configs/appConfigs'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const { windowBreakpoint } = appConfigs

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowDimensions.width <= windowBreakpoint

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    isMobile
  }
}
