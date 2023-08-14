import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  searchText: string = '';
  products = [
    {
      name: 'Rolex',
      image: 'https://media.istockphoto.com/id/458727719/photo/rolex-deepsea-wristwatch.jpg?s=612x612&w=0&k=20&c=9hv7ESwsaurJuqlMU0vnVzIVtq8CXNGe0j_Hs3ldb4Y=',
      price: 10000,
      description: 'Rolex SA  is a British-founded Swiss watch designer and manufacturer based in Geneva, Switzerland. ',
     count:0  
    },
    {
      name: 'Titan',
      image: 'https://staticimg.titan.co.in/Titan/Catalog/1805QM01_1.jpg?impolicy=pqmed&imwidth=640',
      price: 3000,
      description: 'Titan Watches, one of Indias leading watch brands  with the quartz technology ',
      count:0
    },
    {
      name: 'Omega',
      image: 'https://www.invaluable.com/blog/wp-content/uploads/sites/77/2018/09/omega-watches-hero-1.jpg',
      price: 5000,
      description: 'Originally conceived as a dressy, the Omega Seamaster has evolved to a robust sports watch  ',
      count:0
    },
    {
      name: 'chopard',
      image: 'https://c8.alamy.com/comp/FKCAKR/2000s-uk-chopard-magazine-advert-FKCAKR.jpg',
      price: 9000,
      description: 'Chopard & Cie S.A., commonly known as Chopard, is a Swiss manufacturer and retailer of luxury watches',
      count:0
    },
    {
      name: 'sports',
      image: 'https://m.media-amazon.com/images/I/81OTD-gDViL._AC_UY1000_.jpg',
      price: 1000,
      description: 'A rugged, water-resistant wristwatch that includes features such as an alarm, stopwatch, compass,tachymeter',
      count:0
    },
    
  ];
  count: number =0;

  decrement(product:any) {
    if (product.count > 0){
      product.count--;
      this.addToLocalStorage(product);
    }
  }
  increment(product:any) {
    
      product.count++;
      this.addToLocalStorage(product);
  }

  addToLocalStorage(product: any) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = cartItems.findIndex((item: any) => item.name === product.name);
  
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].count = product.count;
    } else {
      cartItems.push({ name: product.name, rate: product.price, count: product.count });
    }
   
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

// addtocart(product: any, quantityInput: HTMLInputElement) {
//   const count = parseInt(quantityInput.value);
//   if (count > 0) {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
//     const existingItemIndex = cartItems.findIndex((item: any) => item.name === product.name);
//     if (existingItemIndex !== -1) {
//       cartItems[existingItemIndex].count += count;
//     } else {
//       cartItems.push({ name: product.name,rate:product.price, count });
//     }
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }
//   // quantityInput.value = '0';
// }


clear(){
  localStorage.clear;
}
constructor(private router: Router) { }




  
// Use the stored token in your code
place() {
  // Redirect to the '/viewcart' route
  // this.router.navigateByUrl('/viewcart');

  // const token = localStorage.getItem('jwt');
  // if (token) {

   this.router.navigate(['/viewcart']);
  // } else {
  
    
  }
  
  logout(){
    this.router.navigate(['']);
  }


}

 

