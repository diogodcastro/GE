import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../shared/services/equipment.service';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent implements OnInit {

  newEquipment = new FormGroup({
    codigo: new FormControl(''),
    localizacao: new FormControl(''),
    familia: new FormControl(''),
    equipmento: new FormControl(''),
    caracteristicas: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    nrSerie: new FormControl(''),
    estado: new FormControl(''),
    dataFabrico: new FormControl(''),
    dataServico: new FormControl(''),
    dataValidade: new FormControl(''),
    nrPo: new FormControl(''),
    fornecedor: new FormControl('')
  });
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
  }

}
