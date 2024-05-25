import { Link, NavLink } from "react-router-dom";

const Card = ({ brand }) => {
  // console.log(service)
  const { bname, image, id } = brand;

   const  handleProduct = bname =>{
    console.log(bname)
  }


  return (
    <div>
      <div className="card card-compact  sm:w-auto md:w-auto  lg:w-96 h-5/6 bg-slate-100 shadow-xl">
        <figure>
          <img className="h-56 w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-black ">
          <h2 className="card-title text-2xl font-bold">{bname}</h2>

          <div className="card-actions justify-end">
            {/* <NavLink to = {`/details/${id}`}><button className="btn btn-primary text-white">Show more</button></NavLink> */}
            <Link to={`/product-details/${bname}`}>
            <button onClick={ ()=> handleProduct(bname)} className="btn btn-primary text-white">Show more</button>
            </Link>
            {/* <button onClick={ ()=> handleProduct(name)} className="btn btn-primary text-white">Show more</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
