import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private product = new BehaviorSubject<any>([])
  castProduct = this.product.asObservable();

  updateProduct(prod:any){
   this.product.next(prod)
  }
}
