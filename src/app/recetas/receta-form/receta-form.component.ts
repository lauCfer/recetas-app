import { RecetasService } from './../../service/recetas.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-receta-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './receta-form.component.html',
  styleUrl: './receta-form.component.css'
})
export class RecetaFormComponent {



}



















/*addRecipe(){
  if(this.form.invalid) return
  const recipe = this.form.getRawValue()

  this.service.postRecipe(recipe).subscribe({
    next: ()=>{
      alert ('receta agregada con exito!')
    },
    error:(e : Error)=>{
      console.log(e.message)

    }
  })
} */
