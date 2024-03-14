import React, { useState } from 'react';
import Country from '../country/Country';




const Countries = () => {
    const [countries, setcountries] = useState([])

    useState(()=>{
        
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountries(data))
    },[])

    return (
        <div>
           <h1>na na ta hoobe na:{countries.length}</h1> 
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;