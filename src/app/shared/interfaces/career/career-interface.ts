export interface ICareerRequest {
    date:number;
    name: string;
    title:string;
    description:string;
    imagePath: string;
}

export interface ICareerResponse extends ICareerRequest {
    id: number 
  
}