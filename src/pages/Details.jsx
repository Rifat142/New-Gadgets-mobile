import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
const Details = () => {
  const { id } = useParams();
  const product = useLoaderData();

  
  
  console.log("product", product);
  console.log(id);
  const {name , photo  , description , type , price , rating , brand } = product

    // sending to cart 
    const handleAddCart = (event)=>{
      event.preventDefault();
      const cartData = {
        name : product.name,
        photo : product.photo,
        description : product.description,
        price : product.price,
        
        
      }
      console.log(cartData);

      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
         if(data.insertedId){
          Swal.fire({
              title: "Good job!",
              text: "Product added sucessfully",
              icon: "success"
            });
         }
        });
    }



  return (
    <div>
      <Navbar></Navbar>
     
      <p className="text-6xl text-center mb-12">Details are here</p>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-1/2">
            <img
            className=""
              src={photo}
              
            />
          </figure>
          <div className="card-body gap-12">
            <h2 className="card-title text-4xl font-bold">{name}</h2>
            
            <div className="text-2xl  ">
            
            <p className="mb-4">Rating :{rating}</p>
            
            <p className="mb-4">Brand:{brand}</p>
            <p className="mb-4">Price:{price}</p>
            <p className="mb-4">Type:{type}</p>
            <p>description:{description}</p>
            </div>
            <div className="card-actions justify-end">
              
              <button onClick={handleAddCart} className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
