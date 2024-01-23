import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface IShoppingList {
  id: number;
  value: string;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  shoppingLists: IShoppingList[] = [
    { id: 1, value: 'Fresh Products' },
    { id: 2, value: 'Frozen Products' },
    { id: 3, value: 'Vegeterian Products' },
    { id: 4, value: 'Japanese Products' },
  ];
}
