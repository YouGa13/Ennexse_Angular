import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { EnexseService } from 'src/app/services/enexse.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  admin = false;
  utilisateur = false;
  collab =false; 
  

  user: User | undefined;

  constructor(private enexseService: EnexseService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(){
    const userId: string|null =  this.route.snapshot.paramMap.get('userId');
    
    
    if(userId){
      this.enexseService.recupUserByUserId(userId).subscribe(
        user => this.user = user
      )
  }
}

lettre_aleatoire() : string{
  const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let lettre_aleatoire = "";
  for(let i=0; i<2; i++){
   lettre_aleatoire = lettre_aleatoire + alphabet[Math.floor(Math.random() * 51)] 
  }
   return lettre_aleatoire 
 }

 chiffre_aleatoire() {
   const chiffres = "123456789";
   var  chiffre_aleatoire="" ;
   for (let i = 0; i<5; i++){
     chiffre_aleatoire = chiffre_aleatoire + chiffres[Math.floor((Math.random()*8))]; 
   };
   return chiffre_aleatoire;
 }


constructUser(form: any): User {
  return {
    userId: form.value.userId,
    username: form.value.name,
    fullname: form.value.fullname,
    gender: form.value.gender,
    usercontact: form.value.contact,
    userAdress: form.value.adress,
    email: form.value.email,
    roles: form.value.roles,
    dateOfBirth: form.value.dateNais,
    createdAt: form.value.createdAt
  } as User;
}

ifSubmit(f: NgForm){
  if(!this.admin) f.value.roles = ["ROLE_ADMIN"];
  if(!this.utilisateur) f.value.roles = ["ROLE_USER"];
  if(!this.collab) f.value.roles = ["ROLE_COLLABORATEUR"];

  // f.value.userId = btoa(Math.random().toString()).substring(10,15);
  
  f.value.userId = this.lettre_aleatoire() + this.chiffre_aleatoire();

  // f.value.createdAt = Date();
  
  console.log(f.value);
   this.enexseService.updateUser(this.constructUser(f)).subscribe(
    () => this.router.navigate(['/users'])
  );
}
}
