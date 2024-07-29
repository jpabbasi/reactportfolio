import React from 'react'
import { Button } from '@mui/material'

const CategoryButton = ({category, className, onChangeCategory}) => {
  return (
    <Button sx={{ fontFamily: 'SF Pro Display, sans-serif'}} className={className} onClick={() => onChangeCategory(category)}>
        {category}
    </Button>
  )
}

export default CategoryButton
