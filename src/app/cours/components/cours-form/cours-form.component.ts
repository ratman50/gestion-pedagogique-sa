import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ResponseData } from '../../models/response';
import { ICours } from '../../models/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cours-form',
  templateUrl: './cours-form.component.html',
  styleUrls: ['./cours-form.component.css']
})
export class CoursFormComponent implements OnInit {
  dataForm!:ResponseData<ICours>;
  coursForm!:FormGroup;
  constructor(private _dataServive:DataService,private _fb:FormBuilder){}
  ngOnInit(): void {
    this.coursForm=this._fb.group({
      "semestre":[,[Validators.required]],
      "module":[,[Validators.required]],
      "professeur":[,[Validators.required]],
      "classe":[,[Validators.required]],
      "heure_global":[,[Validators.required]]
    })
      this._dataServive.get("data")?.subscribe({
        next:res=>{
          this.dataForm=res as ResponseData<ICours>
        }
      })
  }
  onSubmit(){
    this._dataServive.set("cours",this.coursForm.getRawValue());
  }
}
