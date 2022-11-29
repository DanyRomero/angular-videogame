import { Component, Input } from '@angular/core';
import { Developer } from 'src/app/core/interfaces/developer.interface';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent {
 @Input() developers: Developer[]= []
}
