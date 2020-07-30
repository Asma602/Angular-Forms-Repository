import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  Users = [];
  newArray;
  id =100;
  constructor(private _dataService : DataService){}

  ngOnInit() {
    this.getAllUsers();
  }

   addNewUser(){
    this._dataService.addNewUser({
      "id": this.id++,
      "name": "rabiya",
      "gender": "Female",
      "contactPreference": "Email",
      "email": "adnan@gmail.com",
      "dateOfBirth": "3/2/1996",
      "department": "3",
      "isActive": true,
      "photoPath": "assets/images/dm-img_1.png"
    })
    .subscribe();
    this.getAllUsers();
  }

  getAllUsers(){
    this._dataService.users()
    .subscribe(usersData => this.Users = usersData);
  }
  deleteUser(id : number){
    this._dataService.deleteUser(id)
    .subscribe();
    this.getAllUsers();
  }
  updateUser(user : any){
    this._dataService.updateUser(user).subscribe();
    // this.getAllUsers();
  }


}
