import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchSearch } from "../store/action/actionCreator";

export default function SearchPage() {
  const dispatch = useDispatch();

  const {
    search: searchValue,
    loading,
    error,
  } = useSelector((state) => state.searchReducer);

  const { register, handleSubmit } = useForm();

  const onSubmit = (keywords) => {
    dispatch(fetchSearch(keywords));
  };

  if (loading) {
    return (
      <h1 className="text-gray-500 text-center py-24 font-extrabold -mt-3 text-4xl md:text-5xl">
        LOADING ...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-center py-24 font-extrabold -mt-3 text-4xl md:text-5xl ">
        ERROR ...
      </h1>
    );
  }

  return (
    <div>
      <div className="container py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <h1 className=" text-gray-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
          SEARCH YOUR GIPHY
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full lg:mx-auto lg:justify-center lg:w-1/2 mt-5"
        >
          <input
            className="flex mx-4 w-full h-10 pl-3 pr-8 m-2 text-base placeholder-gray-600 border rounded-md focus:outline-none focus:ring"
            type="text"
            name="keywords"
            placeholder="Search Giphy"
            {...register("keywords", { required: true })}
          />
          <button
            className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-600 rounded-d hover:bg-gray-800"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-3 p-6 gap-6">
            {searchValue.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.images.fixed_height.url}
                  className="object-fit rounded object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36 border-4"
                  alt="gif"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
