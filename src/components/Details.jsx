import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Details = () => {
  const details = useSelector((state) => state.Details);
  //   const details = showdetails();
  return (
    <div className="bg-green-500 m-10 min-h-40 rounded-md flex flex-col justify-center items-center">
      {details.map((item) => (
        <li key={item.name}>
          {item.name} : {item.age}
        </li>
      ))}
    </div>
  );
};

export default Details;
