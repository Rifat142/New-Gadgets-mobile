import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const UpdateProduct = () => {
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
    console.log(updatedItem);
    // console.log(name , photo, brand,rating,price,type,description )
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
                placeholder="Type here"
                name="name"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Image Url</span>
              <input
                type="text"
                placeholder="Type here"
                name="photo"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Type</span>
              <input
                type="text"
                placeholder="Type here"
                name="type"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Price</span>
              <input
                type="text"
                placeholder="Type here"
                name="price"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Brand Name</span>
              <input
                type="text"
                placeholder="Type here"
                name="brand"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Rating</span>
              <input
                type="text"
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
              name="description"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-full"
            />
          </div>
          <br />
          <button className="btn btn-block">Add item</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProduct;
