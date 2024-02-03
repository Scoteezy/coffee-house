"use server";

import { CreateCoffeeParams, GetAllCoffeeParams } from "@/types";

import { connectToDatabase } from "../database";
import Coffee from "../database/models/coffee.model";
import { handleError } from "../utils";

//Create Coffee

export async function createCoffee ({ coffee }: CreateCoffeeParams ) {
  try {
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
// GET BEST COFFEE
export async function getBestCoffee ( ) { 
  try {
    await connectToDatabase();
    const coffee = await Coffee.find({best:true});

    return JSON.parse(JSON.stringify(coffee));
  } catch (error) {
    handleError(error);
  }
}
// GET ALL COFFEE

export async function getAllCoffee ({
  query,
  limit =6,
  page,
  country
}: GetAllCoffeeParams) {
  try{ 
    await connectToDatabase();
    const titleCondition = query
      ? { name: { $regex: query, $options: "i" } }
      : {};
    const countryCondition = country
      ? {country: { $regex: new RegExp(country.split(" ").join("|"), "i") }}
      : {};
    const conditions = {
      $and: [
        titleCondition,
        countryCondition
      ],
    };
    const skipAmount = (Number(page) - 1) * limit;
    const coffee = await Coffee.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    ;
    const coffeeCount = await Coffee.countDocuments(conditions);

    if(!coffee){
      throw new Error("Coffee not found");
    }
    return {
      data: JSON.parse(JSON.stringify(coffee)),
      totalPages: Math.ceil(coffeeCount/limit),
    };
  } catch(e){
    handleError(e);
  }
}

