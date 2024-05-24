import { useEffect, useState } from "react";
import Card from "./card/Card";




const CardData = () => {

    const [services ,setServices]= useState([]);
         useEffect(()=>{
          fetch(`data.json`)
          .then(res=>res.json())
          .then(data=> setServices(data))
    
         } ,[])
        //  console.log(services)

    return (
       <div className="">
        
         <h1 className="font-bold text-7xl bg-slate-200 text-black text-center mb-5 p-4">
                Here we offer
            </h1>
        <div className="grid  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-3 bg-slate-100 md:pl-2 lg:pl-8   ">
            {
                services.map(service =><Card service={service}></Card> )
            }
        </div>
        
       </div>
    );
};
export default CardData;

