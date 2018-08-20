import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../shared/services/equipment.service';
import { FormControl } from '@angular/forms';
import { Equipment } from '../../shared/models/equipment.model';
import { States } from '../../shared/models/states.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  equipmentSearch = new FormControl('');
  equipment: Equipment;

  equipmentsToDeposit = new Array();

  constructor(private equipmentService: EquipmentService, private router: Router) {}

  ngOnInit() {}

  public searchEquip(): void {
    this.equipmentService
      .getEquipmentByCodigo(this.equipmentSearch.value)
      .subscribe((response: Equipment) => {
        if (response.estado === States.Utilização) {
          this.equipmentsToDeposit.push(response);
        }
      });
    this.equipmentSearch.setValue('');
  }

  public depositEquip(): void {
    this.equipmentsToDeposit.forEach((element: Equipment) => {
      element.estado = States.Disponível;
      this.equipmentService.updateEquipment(element).subscribe((data: any) => data);
    });
    console.log(this.equipmentsToDeposit);

    this.backToHome();
  }

  public backToHome(): void {
    this.router.navigate(['/dashboard']);
  }
}
