import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable()
export class ImageService{
    private noPhotos : number = 15;

    private query: string;
    private API_KEY: string = environment.PIXABAY_API_KEY;
    private API_URL: string = environment.PIXABAY_API_URL;
    private URLquery: string = this.API_URL + this.API_KEY + '&q=';
    private URLid: string = this.API_URL + this.API_KEY + '&id=';
    private perPage: string = '&per_page=';

    constructor(private _http: Http){

    }

    getImage(query){
        return this._http.get(this.URLquery + query + this.perPage + this.noPhotos).pipe(map(res => res.json()));
    }

    getImageByID(id){
        return this._http.get(this.URLid + id + this.perPage + this.noPhotos).pipe(map(res => res.json()));
    }
}