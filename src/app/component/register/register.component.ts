import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  email:string='';
  password:string='';

  constructor(private auth: AuthService){}

  ngOnInit(): void {}
  Register(){
      
    if(this.email==' '){
    alert('Please, vezi ca n-ai bagat mailu');
    return;
    }

    if(this.password==' '){
    alert('Please, vezi ca n-ai bagat parola');
    return;
    }
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';
}
}
