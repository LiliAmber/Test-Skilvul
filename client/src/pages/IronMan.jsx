import React, { useEffect } from "react";
import { fetchIronMan, setLoading } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function IronMan() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchIronMan());
  }, [dispatch]);

  const ironMan = useSelector((state) => state.ironManReducer.ironMan);
  console.log(ironMan, "<<<fetch di ironman");
  const loading = useSelector((state) => state.ironManReducer.loading);
  const error = useSelector((state) => state.ironManReducer.error);

  if (loading) {
    return <h1>LOADING ...</h1>;
  }

  if (error) {
    return <h1>ERROR ...</h1>;
  }
  return (
    <div>
      <div className="container py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <h1 className=" text-gray-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
          IRON MAN GIPHY
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
          {/* <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" />
          <img src="https://picsum.photos/id/244/900/900" alt="example" /> */}
          {ironMan.map((item) => {
            return (
              <img
                src={item.images.fixed_height.url}
                // width="350px"
                // heigth="150px"
                // resizeMode="contain"
                className="border-4"
                alt="gif"
              />
            );
          })}
        </div>
      </div>
      {/* <pre>{JSON.stringify(ironMan)}</pre> */}
    </div>
  );
}
