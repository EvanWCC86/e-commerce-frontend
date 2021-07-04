import React, {useEffect} from 'react'
import { useParams } from 'react-router'
// import goodsData from '../data/goodsData'
import Allgoods from '../components/Allgoods'
import {useSelector,useDispatch} from "react-redux"
// actions
import { getCategoryProducts as listCategoryProducts} from '../redux/actions/productActions';
const CategoryPage = () => {
    const {category} = useParams()
    const dispatch = useDispatch();
    const getCategoryProducts = useSelector((state) => state.getCategoryProducts);
    const { categoryProducts, loading, error } = getCategoryProducts;
    // const filterData = products.filter((item) => item.category === category )
    // console.log(goodsData)
    // console.log(filterData)
    
    
    useEffect(() => {
        dispatch( listCategoryProducts(category));
       
    },[dispatch, category])
    
    return (
        <div className="category_page">
            <div className="category_goods container">
                <Allgoods goods={categoryProducts} />
            </div>
        </div>
    )
}

export default CategoryPage
