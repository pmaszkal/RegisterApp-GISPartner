import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {})
        } as unknown as User;
      })
    });
  }

}
