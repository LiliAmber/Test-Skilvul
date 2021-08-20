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
        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-3 p-6 gap-6">
            {ironMan.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.images.fixed_height.url}
                  className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36"
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
