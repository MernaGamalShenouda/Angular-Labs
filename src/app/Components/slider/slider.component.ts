import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  name="Ahmed";
  ccc = "myClass";
  imgSrc = "assets/Images/1.jpg";
  fName="";
  content = "";
  userAge = 0;
  currentImageNumber = 1;
  intervalId: any = null;

  ChgName(){
    this.name = "Aly";
    this.ccc = "myClass2"
  }

  nextImg(){
    if (this.currentImageNumber < 5) {
      this.currentImageNumber++;
    } 

    this.imgSrc = `assets/Images/${this.currentImageNumber}.jpg`;
  }

  prevImg(){
    if (this.currentImageNumber > 1) {
      this.currentImageNumber--;
    } 

    this.imgSrc = `assets/Images/${this.currentImageNumber}.jpg`;  
  }

  slide(){
    this.intervalId = setInterval(() => {
      this.nextImg();
      if (this.currentImageNumber == 5) {
          this.currentImageNumber = 1;
      }
  }, 1000);
  }

  stopSlide() {
    clearInterval(this.intervalId); 
  }

  reset(){
    this.content = "";
  }
}
