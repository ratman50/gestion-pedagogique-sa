import { Data, ICours, IPersonn } from "./data"

export interface Response <T>{
    data:T,
    message:string
  

}
export interface ResponsePaginate<T>{
    data:T[],
    links:Ilink[],
    current_page:number,
    last_page_url:string

}
export interface Ilink{
    url: string
	label: string,
	active: boolean
}

export interface ResponseData<T>{
    professeur?:IPersonn[],
    module?:Data[],
    classe?:Data[],
    semestre?:Data[],
    cours:ICours[]

}
export interface IImage{
    name:string,
    codage:ArrayBuffer|string|null
  }