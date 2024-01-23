import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeBookComponent } from '../recipe-book/recipe-book.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RecipeBookComponent,
    ShoppingListComponent,
  ],
})
export class HeaderComponent {}
