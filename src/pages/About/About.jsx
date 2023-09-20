import React from 'react';
import AboutBanner from './AboutBannar/AboutBanner';
import AboutInfo from './AboutInfo/AboutInfo';
import Sustainability from './Sustainability/Sustainability';
import Leadership from './Leadership/Leadership';
import FluxMotorsFactory from './FluxMotorsFactory/FluxMotorsFactory';
import AboutForm from './AboutForm/AboutForm';

const About = () => {
    return (
      <div className="bg-white">
        <AboutBanner></AboutBanner>
        <AboutInfo></AboutInfo>
        <Sustainability></Sustainability>
        <Leadership></Leadership>
        <FluxMotorsFactory></FluxMotorsFactory>
      </div>
    );
};

export default About;
