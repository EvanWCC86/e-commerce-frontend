import React from 'react'
import {Link} from 'react-router-dom'

const GoodsCard = ({item}) => {
    
    const text = item.title.substring(0,30)

    

    
    return (
        
            <div className="goodsCard">
                
                <div className="image_container">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="goods_content">
                    <h3>{text}</h3>
                    <p>${item.price}</p>
                    <Link to={`/product/${item._id}`}>
                        <button>Detail</button>
                    </Link>
                </div>
              
                
            </div>
      
    )
}

export default GoodsCard
