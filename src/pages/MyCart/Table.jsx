import React from "react";
import Swal from "sweetalert2";

const Table = ({ cart , carts , setCart}) => {
  console.log(cart._id);
  const { description, name, photo, price, _id } = cart;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart-data/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              const remining = carts.filter(del => del._id !== _id);
              setCart(remining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                name
                <label></label>
              </th>
              <th>description</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24 ">
                      <img
                        className=""
                        src={photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl ">{name}</div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td className=" w-2/3 text-lg">
                {description}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
              </td>
              <td className="font-bold texl-xl">{price}</td>
              <th>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary  text-lg"
                >
                  delete
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Table;
