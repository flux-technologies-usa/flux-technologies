import React from 'react';
import Form from '../../../components/Form/Form';

const AboutForm = () => {
    return (
      <div className="pt-[110px] flex pb-[125px] bg-[black]">
        <div className="w-1/2 flex items-center justify-end">
          <h1 className="text-right text-3xl text-white">
            Stay up to speed on the latest at Flux.
          </h1>
        </div>
        <div className="w-1/2 pl-[50px]">
          <Form></Form>
        </div>
      </div>
    );
};

export default AboutForm;