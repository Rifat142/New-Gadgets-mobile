import { useEffect, useState } from "react";
import Card from "./card/Card";




const CardData = () => {

    const [brand,setBrand]= useState([]);
         useEffect(()=>{
          fetch(`https://gadgets-mobile-server.vercel.app/bname`)
          .then(res=>res.json())
          .then(data=> setBrand(data))
    
         } ,[])
       

    return (
       <div className="">
        
         <h1 className="font-bold text-7xl bg-slate-200 text-black text-center mb-5 p-4">
                Brands we got!
            </h1>
        <div className="grid  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-3 bg-slate-100 md:pl-2 lg:pl-8   ">
            {
                brand.map(brand =><Card brand={brand}></Card> )
            }
        </div>
        
       </div>
    );
};
export default CardData;

