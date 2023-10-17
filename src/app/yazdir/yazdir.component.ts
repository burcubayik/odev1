import { Component } from '@angular/core';

@Component({
  selector: 'app-yazdir',
  templateUrl:'./yazdir.component.html' ,
  styleUrls: ['./yazdir.component.scss']
})
export class YazdirComponent {
  sayi = 0;
  sayilar: any[]=[]
  yazdir(){
    for (let index = 1; index < this.sayi; index++) {
      this.sayilar.push(index)
      console.log(index)
    }
    
  }

}
