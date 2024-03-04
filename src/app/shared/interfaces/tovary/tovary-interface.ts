import{ICategoryResponse}from "../category/category-interface"
export interface ITovaryRequest{
    category: ICategoryResponse;
    name: string;
    path: string;
    description: string;
    weight: string;
    price: number;
    bonus:number;
    imagePath: string;
    imagePathCategory: string;
   categoryTovary: string;
    count:number;

}

export interface ITovaryResponse extends ITovaryRequest{
    id:number ;
    
}