import { Country } from "@/types";
import { Document,Schema,model,models } from "mongoose";

export interface ICoffee extends Document { 
    _id: string,
    name: string,
    description: string,
    country: Country,
    price: string,
    best?: boolean,
    imgUrl: string,
    miniImgUrl?: string,
}

const CoffeeSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  country: {type: String, required: true},
  price: {type: String, required: true},
  best: {type: Boolean, default: false},
  imgUrl:{type: String, required: true},
  miniImgUrl:{type:String},

});

const Coffee = models.Coffee || model("Coffee", CoffeeSchema);

export default Coffee;