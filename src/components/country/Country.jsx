import React from 'react';

const Country = ({country}) => {
    const {name, flags, landlocked, maps} = country;
    return (
        <div>
            <p>name:{name.common}</p>
            <img src={flags.png} alt="" />
            <p>hal {name.official}</p>
            <p>kire:{landlocked}</p>
            <p>map:{maps.googleMaps}</p>
        </div>
    );
};

export default Country;