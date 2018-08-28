import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../shared/services/equipment.service';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { NgSwitch } from '@angular/common';
import { Family, Fami } from '../../shared/models/family.model';
import { EquipmentsInfoService } from '../../shared/services/equipmentsInfo.service';
import { EquipmentsInfo } from '../../shared/models/equipmentsInfo.model';
import { Equipment } from '../../shared/models/equipment.model';
import { Router } from '@angular/router';
import { States } from '../../shared/models/states.model';

@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent implements OnInit {
  familyList = Fami.keys();

  estado: States.Disponível;

  withInspection: boolean = false;

  selectedValue: boolean;

  equipmentsInfo = [EquipmentsInfo];

  equipmentToSave: Equipment;

  newEquipment = new FormGroup({
    codigo: new FormControl(''),
    localizacao: new FormControl(''),
    familia: new FormControl(''),
    equipamento: new FormControl(''),
    caracteristicas: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    nrSerie: new FormControl(''),
    estado: new FormControl(''),
    inspecaoValida: new FormControl(''),
    ultimaInspecao: new FormControl(''),
    proximaInspecao: new FormControl(''),
    dataFabrico: new FormControl(''),
    dataServico: new FormControl(''),
    dataValidade: new FormControl(''),
    nrPo: new FormControl(''),
    fornecedor: new FormControl('')
  });
  constructor(
    private router: Router,
    private equipmentService: EquipmentService,
    private equipmentInfoService: EquipmentsInfoService
  ) {}

  ngOnInit() {
    this.getEquipmentsInfo();
  }

  public getEquipmentsInfo(): void {
    this.equipmentInfoService.getEquipmentsInfo().subscribe((data: any) => {
      this.equipmentsInfo = data;
    });
  }

  public backToEquipmentList(): void {
    this.router.navigate(['equipment/equipment-list']);
  }

  public createEquipment(): void {
    this.equipmentToSave = new Equipment(
      this.newEquipment.get('codigo').value,
      this.newEquipment.get('localizacao').value,
      this.newEquipment.get('familia').value,
      this.newEquipment.get('equipamento').value,
      this.newEquipment.get('marca').value,
      this.newEquipment.get('modelo').value,
      this.newEquipment.get('nrSerie').value,
      this.newEquipment.get('caracteristicas').value,
      this.estado,
      null,
      null,
      false,
      this.newEquipment.get('dataFabrico').value,
      this.newEquipment.get('dataServico').value,
      this.newEquipment.get('dataValidade').value,
      this.newEquipment.get('nrPo').value,
      this.newEquipment.get('fornecedor').value,
      true
    );

    if (this.withInspection === true) {
      this.equipmentToSave.ultimaInspecao = new Date();
      this.equipmentToSave.proximaInspecao = new Date();
    }

    console.log(this.equipmentToSave);
  }

  public saveEquipment(): void {
    this.createEquipment();
    this.equipmentService.saveEquipment(this.equipmentToSave).subscribe((data: any) => data);
  }
}
