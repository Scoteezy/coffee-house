export type Country = "Brazil" | "Columbia" | "Kenya"

export type CreateCoffeeParams = { 
   coffee: {
    name: string,
    description: string,
    country: Country,
    price: string,
    best?: boolean,
    imgUrl: string,
    miniImgUrl?: string,
   }
}
export type SearchParamProps = {
   params: { id: string };
   searchParams: { [key: string]: string | string[] | undefined };
 };
 