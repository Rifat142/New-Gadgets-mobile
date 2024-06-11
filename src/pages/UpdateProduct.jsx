import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
const UpdateProduct = () => {

  const { id } = useParams();
  const product = useLoaderData();
  console.log(product , id);
 
  const { _id,  name , photo  , description , type , price , rating , brand } = product



  const handleUpdateItem = (event) => {
    event.preventDefault();

    //    const name = form.name.value;
    //    console.log(name)

    const Items = new FormData(event.currentTarget);
    const name = Items.get("name");
    const photo = Items.get("photo");
    const brand = Items.get("brand");
    const rating = Items.get("rating");
    const price = Items.get("price");
    const type = Items.get("type");
    const description = Items.get("description");

    const updatedItem = { name, photo, brand, rating, price, type, description };
    console.log( _id, updatedItem);
    // console.log(name , photo, brand,rating,price,type,description )

       // send to the client server;
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       if(data.modifiedCount >0){
        Swal.fire({
            title: "Good job!",
            text: "Product Updated sucessfully",
            icon: "success"
          });
       }
      });




  };

  return (
    <div>
      <Navbar></Navbar>
      <div className=" px-40 py-16 bg-gradient-to-r from-gray-900 to-gray-700 glass ">
        <h1 className="mx-auto text-5xl font-bold text-center ">
          Update a product
        </h1>
        <br />
        <form onSubmit={handleUpdateItem}>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div>
              <span className="label-text">Name</span>
              <input
                type="text"
                defaultValue={name}
                placeholder="Type here"
                name="name"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Image Url</span>
              <input
                type="text"
                defaultValue={photo}
                placeholder="Type here"
                name="photo"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Type</span>
              <input
                type="text"
                defaultValue={type}
                placeholder="Type here"
                name="type"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Price</span>
              <input
                type="text"
                defaultValue={price}
                placeholder="Type here"
                name="price"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Brand Name</span>
              <input
                type="text"
                defaultValue={brand}
                placeholder="Type here"
                name="brand"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Rating</span>
              <input
                type="text"
                defaultValue={rating}
                placeholder="Type here"
                name="rating"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
          </div>
          <br />
          <div>
            <span className="label-text">Short description</span>
            <input
              type="text"
              defaultValue={description}
              name="description"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-full"
            />
          </div>
          <br />
          <button className="btn btn-block">Update now!</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProduct;
