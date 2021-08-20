import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchSearch, setLoading } from "../store/action/actionCreator";

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

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   dispatch(fetchSearch());
  // }, [dispatch]);

  // const ironMan = useSelector((state) => state.searchReducer.search);
  // console.log(ironMan, "<<<fetch di ironman");
  // const loading = useSelector((state) => state.searchReducer.loading);
  // const error = useSelector((state) => state.searchReducer.error);

  // if (loading) {
  //   return <h1>LOADING ...</h1>;
  // }

  // if (error) {
  //   return <h1>ERROR ...</h1>;
  // }

  return (
    <div>
      <div className="container py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <h1 className=" text-gray-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
          SEARCH YOUR GIPHY
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="keywords"
            placeholder="batman"
            className="px-3 py-3 placeholder-blueGray-300 tracking-wide text-blueGray-600 relative bg-white text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring pr-10 mb-6 rounded-xl"
            {...register("keywords", { required: true })}
          />
          {errors.productName && (
            <span className="text-red-600">This field is required</span>
          )}
          <button
            className="bg-gray-600 text-gray-100 p-4 rounded-xl tracking-wide
        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-800
        shadow-lg"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-3 p-6 gap-6">
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
            <img
              src="https://picsum.photos/id/244/900/900"
              alt="example"
              className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
