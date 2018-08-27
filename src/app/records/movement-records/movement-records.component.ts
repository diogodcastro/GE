import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../shared/services/movement.service';
import { Movement } from '../../shared/models/movement.model';

@Component({
  selector: 'app-movement-records',
  templateUrl: './movement-records.component.html',
  styleUrls: ['./movement-records.component.css']
})
export class MovementRecordsComponent implements OnInit {
  movements: [Movement];

  constructor(private movementService: MovementService) {}

  ngOnInit() {
    this.getMovements();
  }

  public getMovements(): void {
    this.movementService.getMovements().subscribe((data: [Movement]) => {
      this.movements = data;
    });
  }
}
