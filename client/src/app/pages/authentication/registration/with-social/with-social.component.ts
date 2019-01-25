import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../_service/auth.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { User } from '../../../../../../_models/User';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {
User:User;
  constructor(private AuthService:AuthService,private Router:Router) { }

  ngOnInit() {
  }
  seveUser(){
    this.AuthService.register(this.User).subscribe(res =>{
      console.log(res);
    },error =>{
      console.log(error)
      this.Router.navigate['authentication/login'];
    });
    this.Router.navigateByUrl('/authentication/login');
  }
}
