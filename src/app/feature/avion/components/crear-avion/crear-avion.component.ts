import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvionService } from '@avion/shared/service/avion.service';

@Component({
  selector: 'app-crear-avion',
  templateUrl: './crear-avion.component.html',
  styleUrls: ['./crear-avion.component.css']
})
export class CrearAvionComponent implements OnInit {
  avionForm: FormGroup;
  constructor(private avionService: AvionService,
    private route: Router) { }

  ngOnInit(): void {
    this.construirFormularioAvion();
  }

  private construirFormularioAvion() {
    this.avionForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      matricula: new FormControl('', [Validators.required]),
      pasajeros: new FormControl(1, [Validators.required])
    });
  }

  crear() {
    this.avionService.guardar(this.avionForm.value).subscribe(
      response => {
        console.log(response);
        this.route.navigate(["avion/listar"]);
      }
    )
  }

  

}
