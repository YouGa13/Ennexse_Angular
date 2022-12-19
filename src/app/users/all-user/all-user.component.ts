import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { EnexseService } from 'src/app/services/enexse.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  
  users: User[] | undefined;

  constructor(private enexseService: EnexseService) { }

  ngOnInit() {
    this.enexseService.getUsers().subscribe(
      listesUsers => this.users = listesUsers
    );
  }
}
