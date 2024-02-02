"use server";

import { CreateCoffeeParams } from "@/types";

import { connectToDatabase } from "../database";
import Coffee from "../database/models/coffee.model";
import { handleError } from "../utils";

//Create Coffee

export async function createCoffee ({ coffee }: CreateCoffeeParams ) {
  try {
    console.log(coffee);
    await connectToDatabase();
    if (coffee.country !== "Kenya" && coffee.country !== "Brazil" && coffee.country !== "Columbia") {
      throw new Error("No such country in menu");
    }
    const newCoffee = await Coffee.create({
      ...coffee
    });

    return JSON.parse(JSON.stringify(newCoffee));
  } catch (e) {
    handleError(e);
  }
}


// GET ONE BY ID

export async function getCoffeeById (coffeeId: string) { 
  try{
    await connectToDatabase();

    const coffee = await Coffee.findById(coffeeId);

    if (!coffee) {
      throw new Error("Coffee not found");
    }
    return JSON.parse(JSON.stringify(coffee));
  }catch(e){
    handleError(e);
  }
}

// GET ALL COFFEE

export async function getAllCoffee () {
  try{ 
    await connectToDatabase();

    const coffee = await Coffee.find();

    if(!coffee){
      throw new Error("Coffee not found");
    }
    return JSON.parse(JSON.stringify(coffee));
  } catch(e){
    handleError(e);
  }
}

