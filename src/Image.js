import {products} from './Product.js'
import React from 'react'

const Image = () => {
  console.log(products.imgPath)
  return (
    <div>
    <img style={{height: '250px'}} alt='light' src={products.imgPath}/>
    </div>
  )
}

export default Image