import { Component, Input } from '@angular/core';
import { CartProduct } from '../cartproduct.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() dettaglio! : CartProduct[]
}
