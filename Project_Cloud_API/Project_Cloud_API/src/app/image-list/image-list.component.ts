import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute, Routes } from "@angular/router";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {  
  title = 'Pixabay Image Search';
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;

  list: number[] = [5,10,15,20,50,100];

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

handleError(error){
  console.log(error);
}

  constructor(private _imageService : ImageService, public route: ActivatedRoute) {
    this.route.url.subscribe(params => {
      console.log(params[0].path);
    })
   }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    );

    // add routing
    
  }

  searchImagesByID(id: string){
    this.searching = true;
    return this._imageService.getImageByID(id).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    );
  }
  ngOnInit() {
  }

}
