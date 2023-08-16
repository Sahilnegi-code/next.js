"use client"
// import MovieCard from "@/app/component/MovieCard";

import { useEffect, useState } from "react";
// import loading from '../Loading';

const movie =async () => {
// const [arr , setArr] = useState([]);
//  const val  = await new Promise( (resolve , reject  ) =>{
//   console.log("first")
//   setTimeout(() => {
//     resolve('sahil')
//   }, 4000);
//  } );

//  useEffect(async()=>{
//   const url = 'https://spotify23.p.rapidapi.com/search/?q=honeysingh  &type=multi&offset=0&limit=10&numberOfTopResults=5';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cd5a7d3c9dmsha86097bc3bd586fp1a4103jsnf8211210a33a',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };
// // let arr ;
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	 setArr(result.albums.items);
// } catch (error) {
// 	console.error(error);
// }
// console.log("sahil");
//  },[]);
//  console.log('second');

  
  return (
    <div>
      <h1>Movie</h1>
      {/* {
        arr.map(curr=>{
          return < MovieCard data = {curr.data}  />
        })
      } */}
    
    </div>
  )
}


export default movie;
