import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { Observable } from 'rxjs';
import { Vegetable } from './vegetable.model';
import { HttpClient } from '@angular/common/http';
import { CartProduct } from './cartproduct.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VegetableListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'corrVerB';
  obs! : Observable<Vegetable[]>;
  vettVegetable : Vegetable[] = [];
  loading : boolean = false;
  

  constructor(public http: HttpClient){}
  
 
  makeRequest(){
    this.loading = true;
    this.obs = this.http.get<Vegetable[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure')
    this.obs.subscribe(this.getData)

  } 
  
  getData = (d : Vegetable[]) => {
    this.vettVegetable = d;
    console.log(this.vettVegetable)
    this.loading = false
     
  }

  ngOnInit(): void {
    this.makeRequest();
  }

}
