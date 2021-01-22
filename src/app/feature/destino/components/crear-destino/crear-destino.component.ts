import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinoService } from '@destino/shared/service/destino.service';

@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit {
  destinoForm: FormGroup;
  constructor(private destinoService: DestinoService,
    private route: Router) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  private construirFormulario() {
    this.destinoForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      ciudadOrigen: new FormControl('', [Validators.required]),
      ciudadDestino: new FormControl('', [Validators.required]),
      valorBase: new FormControl(0, [Validators.required])
    });
  }

  crear() {
    this.destinoService.guardar(this.destinoForm.value).subscribe(
      response => {
        console.log(response);
        this.route.navigate(["destino","listar"]);
      }
    )
  }

}
