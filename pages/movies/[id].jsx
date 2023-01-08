import Image from "next/image";
import React from "react";
import axios from 'axios'
import { useRouter } from 'next/router';
const Singlecard = ({data}) => {
    const router= useRouter()
    const senddata = async(obj)=>{
        axios.post(`https://movies-database-gold.vercel.app/movies`,obj)
        .then(res=>{
            alert("success")
            

    })
        .catch(err=>alert(err))
      }
    
  return <div>
    <h1>{data.Title}</h1>
    
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