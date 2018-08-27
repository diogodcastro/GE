import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../shared/services/equipment.service';
import { FormControl } from '@angular/forms';
import { Equipment } from '../../shared/models/equipment.model';
import { States } from '../../shared/models/states.model';
import { Router } from '@angular/router';
import { MovementService } from '../../shared/services/movement.service';
import { Movement } from '../../shared/models/movement.model';
import { OtherUser } from '../../shared/models/otherUser.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  equipmentSearch = new FormControl('');
  equipment: Equipment;

  equipmentsToDeposit = new Array();

  movement: Movement;
  equipmentsToMove = new Array();

  otherUser = new OtherUser();
  workToDo: string;
  date = new Date();

  constructor(
    private equipmentService: EquipmentService,
    private movementService: MovementService,
    private router: Router
  ) {}

  ngOnInit() {}

  public searchEquip(): void {
    this.equipmentService
      .getEquipmentByCodigo(this.equipmentSearch.value)
      .subscribe((response: Equipment) => {
        if (response.estado === States.Utilização) {
          this.equipmentsToDeposit.push(response);

          this.movement = new Movement(
            'username',
            this.otherUser.name,
            this.otherUser.company,
            response.codigo,
            response.equipamento,
            'Levantamento',
            this.workToDo,
            '',
            '',
            this.date
          );
          this.equipmentsToMove.push(this.movement);
        }
      });
    this.equipmentSearch.setValue('');
  }

  public depositEquip(): void {
    this.equipmentsToDeposit.forEach((element: Equipment) => {
      element.estado = States.Disponível;
      this.equipmentService.updateEquipment(element).subscribe((data: any) => data);
    });

    this.equipmentsToMove.forEach((equip: Movement) => {
      this.movementService.saveMovement(equip).subscribe((data: any) => data);
    });

    this.backToHome();
  }

  public removeEquip(codigo: String): void {
    this.equipmentsToDeposit = this.equipmentsToDeposit.filter(item => item.codigo !== codigo);
    this.equipmentsToMove = this.equipmentsToMove.filter(equip => equip.codigo !== codigo);
  }

  public backToHome(): void {
    this.router.navigate(['/dashboard']);
  }
}
