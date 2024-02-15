import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  count: any = 0;
  totalCost: any = 0;
  allCost: any;
  allProductsCost: any = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  cartProduct: any;
  allProducts: any = [];

  constructor(private service: CommonService, public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar, private router: Router) {
    console.log(data)
  }

  ngOnInit(): void {
  }

  //dialog close
  close() {
    this.dialogRef.close()
  }

  addItem(data: any) {
    let type = 'add'
    this.cartProduct = data;
    this.showAddedInfo()
    this.count += 1
    this.getCost(this.count, data, type)
  }

  removeCount(data: any) {
    let type = 'remove'
    this.cartProduct = data;
    this.showRemovedInfo()
    this.count -= 1
    this.getCost(this.count, data, type)
  }


  getCost(count: any, data: any, type: string) {

    this.totalCost = count * data?.cost
    this.allCost = type == 'add' ? Number(sessionStorage.getItem("userPerItemTotalCost")) + data?.cost
      : Number(sessionStorage.getItem("userPerItemTotalCost")) - data?.cost

    let combinedData: any = []
    let getProduct: any = sessionStorage.getItem("userItems")
    getProduct = JSON.parse(getProduct)

    if (type == 'add') {
      combinedData.push([data].concat(getProduct))
      combinedData[0] = combinedData[0]?.filter((n: any) => n)
    } else {
      getProduct.pop()
      combinedData.push(getProduct)
    }
    this.allProducts = combinedData[0]
    this.service.updateProduct(this.allProducts)
    console.log(this.allProducts)
    sessionStorage.setItem("userPerItemTotalCost", this.allCost);
    sessionStorage.setItem("userItems", JSON.stringify(combinedData[0]));

    return this.totalCost
  }

  showAddedInfo() {
    let sb = this.snackBar.open(`Item added !`, 'Close', {
      duration: 1000,
      panelClass: ["custom-style"],
      verticalPosition: "top",
      horizontalPosition: "center"
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

  showRemovedInfo() {
    let sb = this.snackBar.open(`Item removed !`, 'Close', {
      duration: 1000,
      panelClass: ["custom-style"],
      verticalPosition: "top",
      horizontalPosition: "center"
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

  buyInfo() {
    let sb = this.snackBar.open(`Successfully purchased items!`, 'Close', {
      duration: 3000,
      panelClass: ["custom-style"],
      verticalPosition: "top",
      horizontalPosition: "center"
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

  buyItems() {
    this.service.updateProduct([])
    this.count = 0;
    this.totalCost = 0;
    this.buyInfo()
    sessionStorage.clear();
    this.close();
    this.router.navigate(['/dashboard'])
  }

  goToCart() {
    this.close();
    this.router.navigate(['/cart'])
  }
}
