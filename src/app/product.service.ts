import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/add/map/operator';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).pipe(map((response)=>{
      response.json();
    }))
  }
}