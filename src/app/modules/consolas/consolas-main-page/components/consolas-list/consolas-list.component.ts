import { Component, Input } from '@angular/core';
import { Consolee } from '../../../../../core/interfaces/console.interface';

@Component({
  selector: 'app-consolas-list',
  templateUrl: './consolas-list.component.html',
  styleUrls: ['./consolas-list.component.css']
})
export class ConsolasListComponent {
  @Input() consolesList: Consolee[] = []
}
