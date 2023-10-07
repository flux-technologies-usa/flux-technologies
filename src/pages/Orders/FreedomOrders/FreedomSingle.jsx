import React from 'react';

const FreedomSingle = ({freedom}) => {
    return (
        <span className="flex flex-row justify-between">
            {freedom.name} <span>${freedom.price}</span>
          </span>
    );
};

export default FreedomSingle;