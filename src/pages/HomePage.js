import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import {useDispatch, useSelector} from "react-redux";
import Allgoods from '../components/Allgoods';
import Subscribe from '../components/Subscribe';

// actions
import {getProducts as listProducts} from '../redux/actions/productActions';
const HomePage = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts)
    const {products,loading, error} = getProducts;

    const computers = products.filter((item) => item.category === "computers");
    const clothes = products.filter((item) => item.category === "clothes");
    const shoes = products.filter((item) => item.category === "shoes");
    const watches = products.filter((item) => item.category === "watches");
    
    useEffect(() => {
        dispatch(listProducts());
       
    },[dispatch])
    
    
    
    
    
    
    
    

    
    
    return (
        <div className="homePage">
            <Hero />
            <div className="homePage_products container">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) :(
                    <div className="home_products">
                       
                        <div className="home_category_container">
                            <h1>clothes</h1>
                            <div className="home_category_products">
                                <Allgoods goods={clothes} />
                            </div>
                        </div>
                        <div className="home_category_container">
                            <h1>shoes</h1>
                            <div className="home_category_products">
                                <Allgoods goods={shoes} />
                            </div>
                        </div>
                        <div className="home_category_container">
                            <h1>Watches</h1>
                            <div className="home_category_products">
                                <Allgoods goods={watches} />
                            </div>
                        </div>
                        <div className="home_category_container">
                            <h1>computers</h1>
                            <div className="home_category_products">
                                <Allgoods goods={computers} />
                            </div>
                        </div>
                         <section className="subscribe_section">
                             <Subscribe />
                         </section>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
