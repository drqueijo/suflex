import React from 'react'
import themeEnum from '../../../enum/themeEnum'
import { useSelector } from 'react-redux'

function ThemeProvider() {
  const theme = useSelector((state) => state.theme.value)
  const getSelectedTheme = () => {
    if(theme === themeEnum.dark) return '#000'
    return '#F0F0F0'
  }

  return (
    <style>
        {`:root {
            --main-bg-color: ${getSelectedTheme()};
        }`}
    </style>
  )
}

export default ThemeProvider