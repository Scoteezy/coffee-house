"use client";
import { useState } from "react";

import { CreateCoffeeParams } from "@/types";

import { createCoffee } from "@/lib/actions/coffee.actions";
const AdminPanel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [best, setBest] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [miniImgUrl, setMiniImgUrl] = useState("");

  const onSubmit = () =>{

    const newCoffee:CreateCoffeeParams= {
      coffee:{
        name: "Solimo Coffee 1 kg",
        description:"Basic coffee. It fits people who love to gain energy from coffee in the morning",
        imgUrl:"/images/coffee/bigImg.png",
        miniImgUrl: "/images/coffee/solimo.png",
        country: "Kenya",
        price: "4.00",
        best: false
      }
    };

    console.log();
    createCoffee(newCoffee);
  };

  return (
    <div className="wrapper h-screen bg-header-1">
      <div className="flex-center flex flex-col h-[500px]">
        <input className="mb-5"
          onChange={(e)=>setName(e.target.value)}
          placeholder="title"
          type="text"
          value={name}
        />
        <input className="mb-5"
          onChange={(e)=>setDescription(e.target.value)}
          placeholder="description"
          type="text"
          value={description} />
        <input className="mb-5"
          onChange={(e)=>setCountry(e.target.value)}
          placeholder="country"
          type="text"
          value={country} />
        <input className="mb-5"
          onChange={(e)=>setPrice(e.target.value)}
          placeholder="price"
          type="text"
          value={price} />
        <label htmlFor="checkbox">
            Best choice
          <input checked={best}
            className="mb-5"
            id="best"
            onChange={()=>setBest(!best)}
            type="checkbox"
          />
        
        </label>

        <input className="mb-5"
          onChange={(e)=>setImgUrl(e.target.value)}
          placeholder="imgUrl"
          type="text"
          value={imgUrl} />
        <input className="mb-5"
          onChange={(e)=>setMiniImgUrl(e.target.value)}
          placeholder="miniImgUrl"
          type="text"
          value={miniImgUrl} />
        <button className="w-[300px] h-[50px] bg-white"
          onClick={onSubmit}> Submit</button>
      </div>
      
    </div>
  );
};

// _id: string,
//     name: string,
//     description: string,
//     country: Country,
//     price: string,
//     best?: boolean,
//     imgUrl: string,
//     miniImgUrl?: string,
export default AdminPanel;