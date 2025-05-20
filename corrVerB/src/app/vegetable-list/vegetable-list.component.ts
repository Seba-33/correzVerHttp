import { Component, Input } from '@angular/core';
import { Vegetable } from '../vegetable.model';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() vegetables!: Vegetable[]

aggiungi(verdura : Vegetable ,nProdotti : HTMLInputElement){
  console.log(verdura.nome + " numero di prodotti: " + nProdotti.value)

}         

}
