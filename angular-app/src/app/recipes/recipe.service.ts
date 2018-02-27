import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Burger King", "Ok Not Great!",
    "https://cdn.pixabay.com/photo/2018/02/18/19/06/gugelhupf-3163116_960_720.jpg",
    [
      new Ingredient("Meat", 1),
      new Ingredient("Fries", 4)
    ]),
    new Recipe("McDonalds", "Great!!",
    "https://cdn.pixabay.com/photo/2018/02/18/19/06/gugelhupf-3163116_960_720.jpg",
    [
      new Ingredient("bread", 3),
      new Ingredient("Chicken", 11)
    ])
  ];

  constructor (private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
