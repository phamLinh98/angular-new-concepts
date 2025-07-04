import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [ // Export the routes constant
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'deck', component: ProductDetail },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }