import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  
  cartItems: any[] = []
  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  }
  
  total: number = 0;
  
  
  updateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      if (item.selected) {
        return sum + (item.rate * item.count);
      }
      return sum;
    }, 0);
  }
  selecteditems!:any[];
  constructor(private router: Router) {}


  viewselected() {
    const selectedItems = this.cartItems.filter(item => item.selected);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    this.router.navigate(['/selecteditems']);
    alert("submitted")
  }


    logout() {
      
      this.router.navigate(['']);
    }
    }
    
    
