import { Component, Input } from '@angular/core';
import { Serie } from '../Series';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-DetallarSerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './DetallarSerie.component.html',
  styleUrls: ['./DetallarSerie.component.css']
})
export class DetallarSerieComponent {
  @Input() serie!: Serie;
}
