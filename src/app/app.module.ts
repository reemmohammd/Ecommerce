import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    ProductsModule,
    CartModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
