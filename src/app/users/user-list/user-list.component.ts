import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public T: any;
  public userList: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.userList = response;
    });
  }
}
