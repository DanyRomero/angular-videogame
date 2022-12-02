import { Component, OnInit } from '@angular/core';
import { VideogameServiceService } from '../../services/videogame.service.service';
import { Videogame } from '../../../../../core/interfaces/videogame.interface';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeveloperService } from 'src/app/modules/developers/service/developer.service';
import { ConsoleeService } from 'src/app/modules/consolas/service/consolee.service';
import { Consolee } from '../../../../../core/interfaces/console.interface';
import { Developer } from '../../../../../core/interfaces/developer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videogame-edit-form',
  templateUrl: './videogame-edit-form.component.html',
  styleUrls: ['./videogame-edit-form.component.css'],
})
export class VideogameEditFormComponent implements OnInit {
  videogame: Videogame = {} as Videogame;
  consoles: Consolee[] = [];
  developers: Developer[] = [];

  constructor(
    private videogameService: VideogameServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private developerService: DeveloperService,
    private consoleService: ConsoleeService,
    private router: Router
  ) {}

  editForm = this.fb.group({
    nombre: [this.videogame.nombre, Validators.required],
    descripcion: [this.videogame.descripcion, Validators.required],
    desarrollador: [this.videogame.desarrollador, Validators.required],
    año: [this.videogame.año, Validators.required],
    activo: [this.videogame.activo, Validators.required],
    consolas: [this.videogame.consolas, Validators.required],
    imagen: [this.videogame.imagen, Validators.required],
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      let id = data.get('id');
      if (id) {
        this.videogameService.fetchOneVideogame(id).subscribe((data) => {
          this.videogame = data;
        });
      }
    });

    this.developerService.fetchDevelopers().subscribe((data) => {
      this.developers = data;
    });

    this.consoleService.fetchConsoles().subscribe((data) => {
      this.consoles = data;
    });
  }

  onSubmit(id: string) {
    const data = this.editForm?.value;
    if (data) {
      this.videogameService.editVideogame(id, data).subscribe((data) => {
        this.router.navigate(['/']);
      });
    }
  }
}
