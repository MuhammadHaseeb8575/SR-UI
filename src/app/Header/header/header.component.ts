import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   navLinks:boolean = true;

    showMenu(){
      if(this.navLinks == false){
        this.navLinks = true;
      }
      else{
        this.navLinks = true
      }
    }
    hideMenu(){
      if(this.navLinks == true){
        this.navLinks = false;
      }
      else{
        this.navLinks = false
      }
    }
    

}
