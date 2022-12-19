import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { EnexseService } from 'src/app/services/enexse.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  
  users: User[] | undefined;

  constructor(private enexseService: EnexseService, private router: Router) { }

  ngOnInit() {
    this.enexseService.getUsers().subscribe(
      listesUsers => this.users = listesUsers
    );
  }

  editUser(user: User){
    this.router.navigate(['/edit-user', user.userId])
  };
  deleteUser(user: User){
    this.enexseService.DeleteUser(user.userId).subscribe(
      () => this.router.navigate(['/users'])
    )
  }
}
