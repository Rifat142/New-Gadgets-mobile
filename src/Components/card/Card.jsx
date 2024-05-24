import { NavLink } from "react-router-dom";

const Card = ({brand}) => {
            // console.log(service)
        const {name,image , id} = brand;
    return (
        <div>
     <div className="card card-compact  sm:w-auto md:w-auto  lg:w-96 h-5/6 bg-slate-100 shadow-xl">
  <figure><img className="h-56 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body text-black ">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
   
    <div className="card-actions justify-end">
    {/* <NavLink to = {`/details/${id}`}><button className="btn btn-primary text-white">Show more</button></NavLink> */}
    <div className="btn">Show more</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;