import React, { useEffect, useState } from 'react'

function Planets() {

  const [planet,setPlanet] = useState([]);

  useEffect(()=>{

    async function fetchPlanet() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanet(data.results);
    }

    fetchPlanet();

  },[])

  return (

    <div className=' min-h-min w-[75%]  mt-7 mx-auto grid grid-cols-2 place-content-evenly'>
              {planet.map((planet,index)=>{
                return(

                  <div 
                  key={index}
                  className=" min-h-min w-64  p-2 m-auto border-solid border-2 border-black rounded-md mt-8 shadow-2xl hover:bg-slate-100"
                  >
                                <h1><span className=' font-bold'>Planet Name  : </span>{planet.name}</h1>
                                <p><span className=' font-bold'>Rotation Period : </span>{planet.rotation_period} </p>
                                <p><span className=' font-bold'>Orbital Period : </span>{planet.orbital_period} </p>
                                <p><span className=' font-bold'>Diameter : </span>{planet.diameter} </p>
                                <p><span className=' font-bold'>Climate : </span>{planet.climate} </p>
                                <p><span className=' font-bold'>Gravity : </span>{planet.gravity} </p>
                                <p><span className=' font-bold'>Terrain : </span>{planet.terrain} </p>
                                <p><span className=' font-bold'>Surface Water : </span>{planet.surface_water} </p>
                                <p><span className=' font-bold'>Population : </span>{planet.population} </p>

                  </div>

                )


              })}


    </div>
    )
}

export default Planets