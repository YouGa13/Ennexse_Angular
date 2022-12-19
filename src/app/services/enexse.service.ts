import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EnexseService {
  
  allCardsURL = 'http://[::1]:3000/users';

  private httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json'
    })
  };

  // le log de la reponse renvoyée
  log(response: any){
    console.log(response)
  }; 

  // recuperation de l'erreur
  recupCatchError(error: Error, arg1: any) {
   console.error(error);
   return of(arg1)
  };
  constructor(private http: HttpClient ) { }
  
  // Récuperation de tous les utilisateurs
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://[::1]:3000/users').pipe(
      tap((response: any) => this.log(response)),
      catchError( (error: Error) => this.recupCatchError(error, []))
    )
  };

  // Ajout d'un nouveau utilisateur
  postUser(user: User): Observable<User>{ // observable est un flux de donné qui contiendra le card
    return this.http.post<User>(
      'http://127.0.0.1:3000/users', user, this.httOptions
    ).pipe(tap((response: any) => this.log(response)),  
        catchError( (error: Error) => this.recupCatchError(error, [])) 
    )
  }

  // Mis à jour d'un utilisateur
  updateUser(user: User): Observable<User>{
    return this.http.patch(`http://[::1]:3000/users/${user.userId}`, user, this.httOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError( (error: Error) => this.recupCatchError(error, []))
    )
  }


  // Suppression d'un utilisateur
  DeleteUser(userId: string): Observable<User>{
    return this.http.delete(`http://[::1]:3000/users/${userId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError( (error: Error) => this.recupCatchError(error, []))
    )
  }


  // Récuperation d'un utilisateur par son identifiant
  recupUserByUserId(userId: string): Observable<User>{
    return this.http.get<User>(`http://[::1]:3000/users/${userId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError( (error: Error) => this.recupCatchError(error, []))
    )
  };

}
