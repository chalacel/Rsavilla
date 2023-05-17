import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],

})
export class ManagementComponent {


  responsiveOptions: any;
  selectedImage: any;

  onImageSelect(event: any) {
    this.selectedImage = event.target.value;
  }


 /* myImages = [
    {source:"../../assets/images/products/cat6.png", alt:'Descripción de la imagen 1'},
    {source:'https://www.example.com/image2.jpg', alt:'Descripción de la imagen 2'},
    {source:'https://www.example.com/image3.jpg', alt:'Descripción de la imagen 3'},
  ];*/


}
