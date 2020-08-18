import { Injectable, ɵConsole } from '@angular/core';
import {Eczane} from './eczane';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EczaneapiserviceService {

  constructor(private http:HttpClient) { }

eczaneList:Observable<Eczane[]>
getDatafromApi(link:string):Observable<Eczane[]> {
  const httpOptionsPlain = {
    headers: new HttpHeaders({ 'Accept': 'application/json',
                               'Content-Type': 'application/json'                            
                               })
  };
  //return this.eczaneList=this.http.get<Eczane>(link,httpOptionsPlain)

  return this.http.get<Eczane[]>(link,httpOptionsPlain)

}



}
