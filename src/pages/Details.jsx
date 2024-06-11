import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Details = () => {
  const { id } = useParams();
  const product = useLoaderData();
  console.log(product);
  
  console.log("product", product);
  console.log(id);
  const {name , photo  , description , type , price , rating , brand } = product

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
              
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
