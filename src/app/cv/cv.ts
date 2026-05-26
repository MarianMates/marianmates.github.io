import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class CvComponent {
  print(): void {
    window.print();
  }
}
