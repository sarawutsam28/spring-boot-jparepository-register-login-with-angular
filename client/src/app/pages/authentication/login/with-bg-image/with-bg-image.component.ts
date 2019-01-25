import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../_models/User';
import { AuthService } from '../../../../../../_service/auth.service';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {
   _User = new User();
  constructor(private _AuthService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this._AuthService.login(this._User).subscribe(res => {
      console.log(res);
    }, error =>
    {
      console.log(error)
    });;
    console.log(this._User);
  }
}
