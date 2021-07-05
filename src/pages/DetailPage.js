import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router'
import Allgoods from '../components/Allgoods'
import {getProductDetails,getCategoryProducts as listCategoryProducts} from "../redux/actions/productActions"
import {addToCart} from "../redux/actions/cartActions"






const DetailPage = ({history}) => {
    const [qty, setQty] = useState(1);
    
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.getProductDetails);
    const {product } = productDetails;
    
    
    
    
    const getCategoryProducts = useSelector((state) => state.getCategoryProducts);
    const { categoryProducts} = getCategoryProducts;
    const {id} = useParams()
    
    
    

    useEffect(() => {
        
        dispatch(getProductDetails(id))
    },[dispatch,id]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        // history.push(`/cart`);
      };
    // call Related Producs

   
      const category = product?.category;
  
   

    useEffect(() =>{
        dispatch(listCategoryProducts(category))
    },[dispatch,category])

    
    

    return (
        <div className="detail_page">
            <div className="theItem container">
                <div className="image_container">
                    
                    <img src={product?.image} alt={product?.title} />
                </div>
                <div className="theItem_content">
                    <h3>{product?.title}</h3>
                    <p>Description: <span>{product?.info}</span></p>
                    <p>Price: <span>${product?.price}</span></p>
                    <p>
                        Status:
                        <span>
                        {product?.countInStock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                    </p>
                    <p>
                        Qty
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product?.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                            {x + 1}
                            </option>
                        ))}
                        </select>
                    </p>
                    <div className="add_to_cart">
                        
                        <button type="button" onClick={addToCartHandler}>add to cart</button>
                    </div>
                </div>
            </div>
            <div className="related_product_container container">
                <h1>Related Products</h1>
                <div className="related_product">
                    
                    <Allgoods goods={categoryProducts} />
                </div>
            </div>
        </div>
    )
}

export default DetailPage
