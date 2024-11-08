import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { RecipeInfo } from '../interfaces/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() { }

  http = inject(HttpClient);
  private key = environment.tokenLaura;


  getRecetasByIngredients (ingredients : string, number:number) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.key
    });

    const ignorePantry : boolean = true;
    const params = {ingredients, number,ignorePantry}
    const url = "https://api.spoonacular.com/recipes/findByIngredients"

    return this.http.get(url, {headers, params})
  }

  getRecipeInformation (id:number) : Observable <RecipeInfo> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.key
    });

    const includeNutrition : boolean = false;
    const addWinePairing : boolean = false;
    const addTasteData : boolean = false;

    const params = {id, includeNutrition, addWinePairing, addTasteData}
    const url = `https://api.spoonacular.com/recipes/${id}/information`;

    return this.http.get<RecipeInfo>(url, {headers, params})
  }



}
