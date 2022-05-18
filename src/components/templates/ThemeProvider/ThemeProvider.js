import React from 'react'
import themeEnum from '../../../enum/themeEnum'
import { useSelector } from 'react-redux'

function ThemeProvider() {
  const theme = useSelector((state) => state.theme.value)
  const getSelectedTheme = () => {
    if(theme === themeEnum.dark) return '#24282F'
    return '#FFFFFF'
  }

  return (
    <style>
        {`:root {
            --main-bg-color: ${getSelectedTheme()};
            --secondary-bg-color: #e8e8e8;
            --font-color: #17cb49;
        }`}
    </style>
  )
}

export default ThemeProvider