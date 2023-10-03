import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursService } from './cours.service';
import { DataService } from './data.service';
import { Response, ResponseData } from './models/response';
import { ICours } from './models/data';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private _coursService:CoursService, private _data:DataService){}
  @ViewChild(CoursComponent,{static:false}) coursComponent!:CoursComponent;
  ngOnInit(): void {
      this._coursService.getData<Response<ResponseData<ICours>>>().subscribe({
        next:res=>{
          this._data.set("data",res.data)
        }
      })
      this._data.get("cours")?.subscribe({
        next:res=>{
          this.post(res as ICours)
          
        }
      })
  }
  post(data:ICours){
    this._coursService.store(data).subscribe({
      next:res=>{
        console.log(res);
        
      }
    })
  }

}
