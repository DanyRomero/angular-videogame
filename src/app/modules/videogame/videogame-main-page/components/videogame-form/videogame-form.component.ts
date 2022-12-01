import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DeveloperService } from 'src/app/modules/developers/service/developer.service';
import { VideogameServiceService } from '../../services/videogame.service.service';
import { Developer } from '../../../../../core/interfaces/developer.interface';
import { Videogame } from 'src/app/core/interfaces/videogame.interface';
import { Router } from '@angular/router';
import { Consolee } from 'src/app/core/interfaces/console.interface';
import { ConsoleeService } from 'src/app/modules/consolas/service/consolee.service';

@Component({
  selector: 'app-videogame-form',
  templateUrl: './videogame-form.component.html',
})
export class VideogameFormComponent implements OnInit {
  consoles: Consolee[] = [];
  developers: Developer[] = [];
  videogame: Videogame | any;

  constructor(
    private fb: FormBuilder,
    private developerService: DeveloperService,
    private videogameService: VideogameServiceService,
    private consoleService: ConsoleeService,
    private router: Router
  ) {}

  videogameForm = this.fb.group({
    nombre: [''],
    descripcion: [''],
    desarrollador: [''],
    año: 0,
    activo: [''],
    consolas: [],
  });

  ngOnInit(): void {
    this.developerService.fetchDevelopers().subscribe((data) => {
      this.developers = data;
    });
    this.consoleService.fetchConsoles().subscribe((data) => {
      this.consoles = data;
      console.log(this.consoles);
    });

    $('.ui.dropdown').dropdown();
  }

  onSubmit() {
    this.videogame = this.videogameForm.value;
    console.log(this.videogame);
    this.videogameService.postVideogame(this.videogame).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
