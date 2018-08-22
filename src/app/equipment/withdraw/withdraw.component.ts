import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../shared/services/equipment.service';
import { FormControl } from '@angular/forms';
import { Equipment } from '../../shared/models/equipment.model';
import { States } from '../../shared/models/states.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  equipmentSearch = new FormControl('');
  equipmentsToWithdraw = new Array();

  constructor(private equipmentService: EquipmentService,
              private router: Router) {}

  ngOnInit() {}

  public searchEquip(): void {
    this.equipmentService
      .getEquipmentByCodigo(this.equipmentSearch.value)
      .subscribe((response: Equipment) => {
        if (response.estado === States.Disponível) {
          this.equipmentsToWithdraw.push(response);
        }
      });
    this.equipmentSearch.setValue('');
  }

  public withdrawEquip(): void {
    this.equipmentsToWithdraw.forEach((element: Equipment) => {
      element.estado = States.Utilização;
      this.equipmentService.updateEquipment(element).subscribe((data: any) => data);
    });
    this.backToHome();
   }

  public removeEquip(codigo: String): void {
    this.equipmentsToWithdraw = this.equipmentsToWithdraw.filter(item => item.codigo !== codigo);
  }

  public backToHome(): void {
    this.router.navigate(['/dashboard']);
  }

}
