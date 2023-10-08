import React from 'react';

const VillageSingle = ({village}) => {
    return (
        <span className="flex flex-row justify-between">
            {village.name} <span>${village.price}</span>
          </span>
    );
};

export default VillageSingle;