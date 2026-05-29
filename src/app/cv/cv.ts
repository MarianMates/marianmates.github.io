import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class CvComponent {
  print(): void {
    window.print();
  }
}
