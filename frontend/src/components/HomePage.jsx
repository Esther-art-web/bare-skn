import { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Account from "./Account";
import Appointment from "./Appointment";
import AuthSection from "./AuthSection";
import Blog from "./Blog";
import BlogPosts from "./BlogPosts";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Images from "./Images";
import Login from "./Login";
import PageSection from "./PageSection";
import Payment from "./Payment";
import Product from "./Product";
import SignUp from "./SignUp";



class HomePage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                
               {/* <Images/>
               <PageSection/>
               <AuthSection/>
               <Appointment/>
               <Product/>
               <BlogPosts/>
               <Blog/>
               <Cart/>
               <Payment/>
               <Checkout/> */}
               {/* <Account/> */}
               <Routes>
                   <Route path="/" element ={<PageSection/>} ></Route>
                   <Route path="/cart" element ={<Cart/>} ></Route>
                   <Route path="/payment" element = {<Payment/>}></Route>
                   <Route path="/checkout" element={<Checkout/>}></Route>
                   <Route path="/account" element ={<Account/>} ></Route>
                   <Route path="/products" element = {<Product/>}></Route>
                   <Route path="/appointment" element = {<Appointment/>}></Route>
                   <Route path="/blog" element = {<BlogPosts/>}></Route>
                   <Route path="/signup" element = {<SignUp/>}></Route>
                   <Route path="/login" element={<Login/>}></Route>
               </Routes>
              
            </>
        )
    }
}

export default HomePage;