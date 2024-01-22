import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipe-shop' },
  { path: 'recipe-shop', component: ShopComponent },
  // {path: 'shopping-list', component: ShoppingListComponent},
  // {path: 'shopping-list-edit', component: ShoppingListEditComponent},
  // { path: 'recipe-book', component: RecipeBookComponent },
  // { path: 'recipe-list', component: RecipeListComponent },
  // { path: 'recipe-item', component: RecipeItemComponent },
  // { path: 'recipe-detail', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
