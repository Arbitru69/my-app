import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email:string='';
  password:string='';

  constructor(private auth:AuthService){}
  
  ngOnInit(): void {}
  
    Login(){
      
      if(this.email==' '){
      alert('Please, vezi ca n-ai bagat mailu');
      return;
      }

      if(this.password==' '){
      alert('Please, vezi ca n-ai bagat parola');
      return;
      }
      this.auth.login(this.email,this.password);
      this.email='';
      this.password='';

    }
    }

