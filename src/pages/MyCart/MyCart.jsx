import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Table from "./Table";

const MyCart = () => {
    const [carts , setCart] = useState([]);

    
         useEffect(()=>{
          fetch(`http://localhost:5000/cart-data`)
          .then(res=>res.json())
          .then(data=> setCart(data))
    
         } ,[])
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <p className="text-6xl text-center mb-3 font-bold">This is my cart </p>
          <div className="bg-slate-900 glass text-white">
            {
              carts.map(cart=> <Table cart={cart}
              carts = {carts}
              setCart = {setCart}
              ></Table>)
            }
          </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
