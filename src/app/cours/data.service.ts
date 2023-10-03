import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Data, ICours } from './models/data';
import { ResponseData } from './models/response';

interface BaseService<T> {
  name:string,
  observable: Subject<T>;  
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _services : BaseService<ResponseData<ICours>|ICours>[]=[
    {
      name:"data",

      observable : new Subject<ResponseData<ICours>|ICours>(),
    },
    {
      name:"cours",

      observable : new Subject<ResponseData<ICours>|ICours>(),
    }
  ];
  get(key:string):Observable<ResponseData<Data>|ICours>|undefined{
    return this._services.find(item=>item.name==key)?.observable;
  }
  set(key: string, value:  ResponseData<ICours>|ICours) {

    this._services.find(item=>item.name==key)?.observable.next(value);
    
  
  }

  constructor() { }
}