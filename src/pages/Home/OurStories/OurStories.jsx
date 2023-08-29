import React from "react";
import "./../Home.scss";
import OurStoriesForBigDevice from "./OurStoriesForBigDevice";
import OurStoriesForSmall from "./OurStoriesForSmall";

const OurStories = () => {
  return (
    <div className="px-2 md:px-16">
      <div className="flex flex-row items-center justify-between my-10">
        <span className="text-[2.125rem] text-white md:text-[45px]">
          Our stories
        </span>
        <button className="customStoryButton ">View All</button>
      </div>
      <div className="flex overflow-auto customScroll">
        <OurStoriesForBigDevice></OurStoriesForBigDevice>
        <OurStoriesForSmall></OurStoriesForSmall>
      </div>
    </div>
  );
};

export default OurStories;
