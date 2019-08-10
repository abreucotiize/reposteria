import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 ruta="https://randomuser.me/api/"
  constructor( public http:HttpClient) { }

  getUsers(cant){
    console.log(cant);
    return this.http.get(this.ruta+`?results=${cant}`)
  }
}
