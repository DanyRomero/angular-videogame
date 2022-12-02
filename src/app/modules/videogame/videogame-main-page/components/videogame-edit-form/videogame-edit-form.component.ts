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
  videogame: Videogame = {} as Videogame
  consoles: Consolee[] = [];
  developers: Developer[] = [];
  editForm?: FormGroup;

  constructor(
    private videogameService: VideogameServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private developerService: DeveloperService,
    private consoleService: ConsoleeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      let id = data.get('id');
      if (id) {
        this.videogameService.fetchOneVideogame(id).subscribe((data) => {
          this.videogame = data;
          
          this.editForm = this.fb.group({
            nombre: [data.nombre, Validators.required],
            descripcion: [data.descripcion, Validators.required],
            desarrollador: [data.desarrollador, Validators.required],
            año: [data.año, Validators.required],
            activo: [data.activo, Validators.required],
            consolas: [data.consolas, Validators.required],
            imagen: [data.imagen, Validators.required],
          });
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
    this.videogameService.editVideogame(id, this.editForm?.value).subscribe((data)=>{
      this.router.navigate(["/"])
    })
  }
}
