import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from '../../node_modules/rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  charFind : string;
  genders = ['male','female'];
  signUpForm : FormGroup;
  isPwdMatched = true;

  
  //Reactive Forms
  forbiddenUserNames = ['Asma','Ayesha'];
  
  ngOnInit(){


    this.signUpForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        //async validators
        'email' : new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'userPwd' : new FormGroup({
        'password' : new FormControl(null),
        'confirmPassword' : new FormControl(null)
      }),
      'gender' : new FormControl('female'),
      'hobbies' : new FormArray([])
    });

    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // this.signUpForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    // pre populate form with some values

    // this.signUpForm.setValue({
    //   'userData' :{
    //     'username ' : 'Usman'
    //   }
    // });

    // this.signUpForm.patchValue({

    // });
  }

  // Debouncing

  timer;
  eventFired=0;
  debounced=0;
  debounce(){
    this.eventFired++;
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      const inputControlValue = this.signUpForm.get('userData.username').value;
      console.log(inputControlValue);
    this.debounced++;
    },3000);
      console.log(this.eventFired + " : " + this.debounced);
    }

    // Throatling

    t_timerId;
    t_eventFired=0;
    throttled=0;
   
    throttle(){
      this.t_eventFired++;
      if(this.t_timerId){
        return;
      }
      this.t_timerId = setTimeout(()=>{
        const inputControlValue = this.signUpForm.get('userData.username').value;
        console.log(inputControlValue);
        this.t_timerId = undefined;
        this.throttled++;
      },5000);
      console.log(this.t_eventFired+ " : " + this.throttled);
    }









  forbiddenNames(control : FormControl) : {[s: string] : boolean}{
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {"nameIsForbidden" : true};
    }
    return null;
  }
  forbiddenEmails(control : FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if(control.value === 'test@gmail.com'){
          resolve({'emailIsForbidden' : true});
        }
        else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  matchPassword(){
    let password = this.signUpForm.get('userPwd.password').value;
    let confirmPassword = this.signUpForm.get('userPwd.confirmPassword').value;
    if(password !== confirmPassword){
      this.isPwdMatched = false;
    }
    else{
      this.isPwdMatched = true;
    }
  }
  onSubmit(){
   console.log(this.signUpForm);   
   this.signUpForm.reset();
  }



















  // template driven forms

  // @ViewChild('form', {static : false}) signUpForm : NgForm;
  // defaultQuestion = "Best friend";
  // secretAnswer = '';
  // genders = ['Male','Female'];

//   isSubmitted = false;

//   user ={
//     username : '',
//     email : '',
//     gender : '',
//     secretAnswer : ''
//   };

//   saveForm(){
//     this.isSubmitted = true;
//     this.user.username = this.signUpForm.value.userData.username;
//     this.user.email = this.signUpForm.value.userData.email;
//     this.user.gender = this.signUpForm.value.gender;
//     this.user.secretAnswer = this.signUpForm.value.secretAnswer;

//     this.signUpForm.reset();
//     // console.log(this.signUpForm);
//   }



  // saveForm(form : ElementRef){
  //   console.log(form);
  // }
}
