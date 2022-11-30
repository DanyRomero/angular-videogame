import { Component, Input } from '@angular/core';
import { Developer, TopDeveloper } from '../../../../../core/interfaces/developer.interface';

@Component({
  selector: 'app-top-developers',
  templateUrl: './top-developers.component.html',
  styleUrls: ['./top-developers.component.css']
})
export class TopDevelopersComponent {
 @Input() topDevelopers: TopDeveloper[] = []

 
}
