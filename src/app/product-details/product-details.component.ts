import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  image!: string;
  name!: string;
  description!: string;
  id!: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   

    this.route.queryParams.subscribe(params => {
      
      this.image = params['image'];
      this.name = params['name'];
      this.description = params['description'];
    });
  }
}









