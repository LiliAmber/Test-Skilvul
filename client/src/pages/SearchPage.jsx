import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchSearch } from "../store/action/actionCreator";

export default function SearchPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    dispatch(fetchSearch(data));
  };
  return (
    <div>
      <div className="container py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <h1 className=" text-gray-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
          SEARCH YOUR GIPHY
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="productName"
            placeholder="Sofa 2 dudukan Vienna"
            className="px-3 py-3 placeholder-blueGray-300 tracking-wide text-blueGray-600 relative bg-white text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10 mb-6 rounded-xl"
            {...register("keywords", { required: true })}
          />
          {errors.productName && (
            <span className="text-red-600">This field is required</span>
          )}
          <button
            className="bg-gray-600 text-gray-100 w-full p-4 rounded-xl tracking-wide
        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-800
        shadow-lg"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
        </div>
      </div>
    </div>
  );
}
