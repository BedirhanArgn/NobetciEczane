import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {EczaneapiserviceService} from './eczaneapiservice.service'
import { Eczane } from './eczane';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-turkeymapdetails',
  templateUrl: './turkeymapdetails.component.html',
  styleUrls: ['./turkeymapdetails.component.css']
})
export class TurkeymapdetailsComponent implements OnInit {
  id:string
  loading:boolean
  eczanelist:Eczane[]
  numberofpharmacy:number 
  constructor(private route:ActivatedRoute,private http:HttpClient,public api:EczaneapiserviceService) { }
  testvalue:Object

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.getData(this.id)
    this.loading=true

  }

  getData(id:string) {
    const link="http://localhost:3000/"+id;
    this.api.getDatafromApi(link).subscribe(eczane=>{
      this.loading=false;
      this.eczanelist=eczane
      }      
      );
    }
  
}
