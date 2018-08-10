import { Component, OnInit } from '@angular/core';
import { Equipment } from '../../shared/models/equipment.model';
import { EquipmentService } from '../../shared/services/equipment.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  public moreInfo: boolean = false;
  public equipmentList: Equipment[];

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.getEquipments();
  }

  public getEquipments(): void {
    this.equipmentService.getEquipments().subscribe((response: Equipment[]) => {
      this.equipmentList = response;
    });
  }

}
