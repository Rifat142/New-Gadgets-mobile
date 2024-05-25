import React from "react";
import Navbar from "../Components/Navbar";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";

const ProductDetails = () => {
  const { bname } = useParams();
  const { brand, products } = useLoaderData();
  console.log(products);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-5xl">{brand} Products we got </h1>

      <div className="grid sm:grid-cols-1  lg:grid-cols-2 p-32 ml-12 gap-3">
        {products.map((product, index) => (
          <div key={index} className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={product.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p> Rating: {product.rating}</p>
                <p>Brand : {product.brand}</p>
                <p>Type: {product.type}</p>
                <div className="card-actions justify-end">
                  <Link to={`/details/${product._id}`}>
                    <button className="btn btn-primary">show details!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
