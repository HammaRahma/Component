import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const ProductCard = () => {
  return (
    <div className='ProdCards'>
    <Name />  
    <Image/>
      
      <Description/>
      <Price/>
    </div>
  )
}

export default ProductCard