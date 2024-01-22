import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class HeaderComponent {}
