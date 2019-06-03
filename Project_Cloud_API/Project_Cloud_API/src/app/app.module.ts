import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule} from '@angular/router'

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from "primeng/toolbar"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/image.service';
import { ProductService } from './product.service';

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({  
  declarations: [
    AppComponent,
    ImageListComponent,
    ToolbarComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,    
    ToolbarModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: "api/v1/search", component: ImageListComponent},
      { path: "api/v1/search/image", component: ImageListComponent},
      { path: "api/v1/products", component: ProductsComponent},
      { path: "api/v1/products/detail/:id", component: ProductDetailComponent},
      { path: "", redirectTo: "/api/v1/search", pathMatch: "full"}
    ])
  ],
  providers: [ImageService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
