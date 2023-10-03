import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ICours } from './models/data';
import { Response, ResponsePaginate } from './models/response';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  uri(): string {
    return "cours";
}
constructor(private _http:HttpClient){

}
getData<T>(url?:string):Observable<T>{
  if(url)
    return this._http.get<T>(`${url}`);
  return this._http.get<T>(`${environment.url}${this.uri()}`);
}
all(url?:string){
  return this.getData(url).pipe(tap(
    response=>console.log(response)));
}
store(element:ICours):Observable<ResponsePaginate<ICours>>{
  
  return this._http.post<ResponsePaginate<ICours>>(`${environment.url}${this.uri()}`,{...element},
  {headers:{
    "Accept":"Application/json",
    "Content-type":"Application/json"

  }});
}
 update(element:ICours):Observable<Response<ICours>>{
  
  return this._http.put<Response<ICours>>(`${environment.url}${this.uri()}`,{element},
  {headers:{
    "Accept":"Application/json",
    "Content-type":"Application/json"

  }});
}
delete(id:string){
  return this._http.delete(`${environment.url}/${this.uri()}${id}`,{headers:{
    "Accept":"Application/json",
    "Content-type":"Application/json"

  }});
}

}
