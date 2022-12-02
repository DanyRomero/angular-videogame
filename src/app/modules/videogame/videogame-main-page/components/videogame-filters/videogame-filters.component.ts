import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-videogame-filters',
  templateUrl: './videogame-filters.component.html',
  styleUrls: ['./videogame-filters.component.css']
})
export class VideogameFiltersComponent {
  constructor( private fb: FormBuilder){}
  
  @Output() filters = new EventEmitter()

  findByForm = this.fb.group({
    nombre:[""],
    desarrollador:[""]
  })

 

  handleFilters(){
    
    this.filters.emit(this.findByForm.value)
    
  }
  handleDeveloper(){}
}
