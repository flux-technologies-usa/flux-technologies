import React from "react";
import "./../Home.scss";
import OurStoriesForBigDevice from "./OurStoriesForBigDevice";
import OurStoriesForSmall from "./OurStoriesForSmall";
import { useState } from "react";
import { useEffect } from "react";
import OurStorySingleForBig from "./OurStorySingleForBig";

const OurStories = () => {
  const [ourStorys, setOurStorys] = useState([]);
  console.log(ourStorys);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/ourstory/get-story")
      .then((res) => res.json())
      .then((data) => setOurStorys(data.story));
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
        {/* <OurStoriesForBigDevice></OurStoriesForBigDevice>
        <OurStoriesForSmall></OurStoriesForSmall> */}
        <div className="flex">
          {ourStorys.map((single) => (
            <OurStorySingleForBig key={single._id} single={single} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStories;
