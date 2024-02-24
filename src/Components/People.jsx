import React, { useEffect, useState } from 'react'

  function People() {
    const [people,setPeople] = useState([]);

    useEffect(()=>{
      async function fetchPeople() {
        let res = await fetch('https://swapi.dev/api/people/?format=json');
        let data = await res.json();
        setPeople(data.results);

      }

      fetchPeople();
    }, [])



    return (

      <>
        <div className="flex justify-center mt-8">
          <h1 className=' font-bold text-4xl italic'>Notable Residents of Each Planets</h1>
        </div>
        <div className=' min-h-min w-[75%]  mt-7 mx-auto grid grid-cols-2 place-content-evenly'>
        {people.map((people,index)=>{
          return(
          <div
          key={index}
          className=" min-h-min w-64  p-2 m-auto border-solid border-2 border-black rounded-md mt-8 shadow-2xl hover:bg-slate-100">
            <h1><span className=' font-bold'>Name : </span>{people.name}</h1>
            <p><span className=' font-bold'>Gender : </span>{people.gender} </p>
            <p><span className=' font-bold'>Birth Year : </span>{people.birth_year} </p>
            <p><span className=' font-bold'>Height : </span>{people.height} </p>
            <p><span className=' font-bold'>Mass : </span>{people.mass} </p>
            <p><span className=' font-bold'>Hair Color : </span>{people.hair_color} </p>
            <p><span className=' font-bold'>Skin Color : </span>{people.skin_color} </p>
            <p><span className=' font-bold'>Eye Color : </span>{people.eye_color} </p>
          </div>


          )
      })}
      </div>
      </>

    )
}

export default People