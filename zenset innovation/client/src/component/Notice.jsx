import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const Notice = () => {
  return (
    <div className="flex justify-center p-4 notice text-white">
      <h4 className=" p-2 rounded-lg mr-3 notbtn1">Only 9 coupon left</h4>
      <h4 className="p-2 rounded-lg mr-3">Get Off your first order</h4>
      <button className="mr-12 rounded-md p-2 notbtn2">
        <a href="#">Get it now!!</a>
      </button>
      <div className="p-2 ml-20 ">
        <MdOutlineCancel className="text-2xl" />
      </div>
    </div>
  );
};

export default Notice;
