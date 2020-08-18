import { Component, OnInit } from '@angular/core';
import {Turkiye} from './turkiye'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-turkeymap',
  templateUrl: './turkeymap.component.html',
  styleUrls: ['./turkeymap.component.css']
})
export class TurkeymapComponent implements OnInit {
  cityname:string
  isShow:boolean
  id:string
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
  }
  changeText() {
    console.log(this.cityname)
  }
}
