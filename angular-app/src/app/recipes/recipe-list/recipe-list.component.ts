import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test", "https://cdn.pixabay.com/photo/2018/02/18/19/06/gugelhupf-3163116_960_720.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
