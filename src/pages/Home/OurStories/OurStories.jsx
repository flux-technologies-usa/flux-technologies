import React from "react";
import "./../Home.scss";
import { useState } from "react";
import { useEffect } from "react";
import OurStorySingleForBig from "./OurStorySingleForBig";
import ClipLoader from "react-spinners/ClipLoader";

const OurStories = () => {
  const [ourStorys, setOurStorys] = useState([]);
  const [loading, setloading] = useState(false);
  console.log(ourStorys);

  useEffect(() => {
    setloading(true);
    fetch("https://flux-car.onrender.com/api/v1/ourstory/get-story")
      .then((res) => res.json())
      .then((data) => {
        setOurStorys(data.story);
        setloading(false);
      });
  }, []);
  return (
    <div className="px-2 md:px-16">
      <div className="flex flex-row items-center justify-between my-10">
        <span className="text-[2.125rem] text-white md:text-[45px]">
          Our stories
        </span>
        <button className="customStoryButton ">View All</button>
      </div>
      <div className="flex overflow-auto customScroll">
        <div className="w-full">
          {loading ? (
            <div className="overflow-hidden w-full  flex justify-center">
              <ClipLoader color="#36d7b7" size={60} />
            </div>
          ) : (
            <div className="flex">
              {ourStorys.map((single) => (
                <OurStorySingleForBig key={single._id} single={single} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurStories;
