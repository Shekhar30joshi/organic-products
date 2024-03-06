import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalProducts : any;
  totalCost : number = 0;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    // this.service.castProduct.subscribe((res:any)=>{
    //   console.log(res)
    //   this.totalProducts = res
    // })
    this.totalProducts = JSON.parse(sessionStorage.getItem('userItems')!)
    this.totalCost = this.totalProducts?.map((el:any)=> el?.cost).reduce((a:any,b:any) => a + b , 0)
  }

  clearCart() {
    this.totalCost = 0;
    sessionStorage.clear();
    this.totalProducts = []
    this.service.updateProduct([])
  }
  
}
