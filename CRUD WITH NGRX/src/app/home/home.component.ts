import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,private authService : AuthService){}

  ngOnInit(): void {
  }

  login(){
    if(this.authService.isLoggedIn)
    this.router.navigate(['/books']);
    else
    this.router.navigate(['/login']);
 
  }

}
