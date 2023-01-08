import Image from "next/image";
import React from "react";
import axios from 'axios'

const Singlecard = ({data}) => {
   
    
    
  return <div>
    <h1>{data.Title}</h1>
    <Image src={data.Images[0]} alt="dfg" width={100} height={100} />
    <button onClick={()=>senddata(data)}>add to wishlist</button>
  </div>;
};
export async function getStaticPaths() {
  let data = await fetch(`https://movies-database-gold.vercel.app/movies`);
  let response = await data.json();
  return {
    paths: response.map((blog) => ({ params: { id: String(blog.id) } })),
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context){
    // console.log(context)
    const {id}=context.params
    const res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`);
    const d = await res.json();
    return{
        props:{
            data : d
        }
    }
}
export default Singlecard;