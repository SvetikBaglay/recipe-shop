import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface IRecipeList {
  id: number;
  value: string;
}

@Component({
  selector: 'app-recipe-book',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
})
export class RecipeBookComponent {
  recipeLists: IRecipeList[] = [
    { id: 1, value: 'Recipe for Ukrainian food' },
    { id: 2, value: 'Recipe for American food' },
    { id: 3, value: 'Recipe for Italian food' },
    { id: 4, value: 'Recipe for Japanese food' },
  ];
}
