import { Component, Input } from '@angular/core';
import { Consolee } from 'src/app/core/interfaces/console.interface';

@Component({
  selector: 'app-top-consoles',
  templateUrl: './top-consoles.component.html',
  styleUrls: ['./top-consoles.component.css']
})
export class TopConsolesComponent {
  @Input() topConsoles: Consolee[]=[]
}
