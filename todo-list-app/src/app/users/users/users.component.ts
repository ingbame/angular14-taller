import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private router: Router, private userService: UserService) {
    console.log('UsersComponent','constructor');
   }

  ngOnInit(): void {
     this.userService.find().subscribe({
      next: (res: any) => {
        this.users = res.data,
        console.log(res)
      },
      error: (err: any) => console.log('Error: ' + err),
      complete: () => console.log('complete')
    });

  }

  edit(user: User): void {
    this.router.navigate([`/home/users/${user.id}`]);
  }

}
