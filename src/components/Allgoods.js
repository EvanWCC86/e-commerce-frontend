import React from 'react'
import GoodsCard from './GoodsCard'
const Allgoods = ({goods}) => {
    return (
        <>
           {goods?.map((item, index) => (
               <GoodsCard item={item} key={index} />
           ))} 
        </>
    )
}

export default Allgoods
