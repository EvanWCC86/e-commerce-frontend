import React from 'react'
import {Link} from 'react-router-dom'

const GoodsCard = ({item}) => {
    
    const text = item.title.substring(0,30)

    

    
    return (
        
            <Link className="goodsCard" to={`/product/${item._id}`} >
                
                <div className="image_container">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="goods_content">
                    <h3>{text}</h3>
                    <p>${item.price}</p>
                    {/* <Link to={`/product/${item._id}`}>
                        <button>Detail</button>
                    </Link> */}
                </div>
              
                
            </Link>
      
    )
}

export default GoodsCard
