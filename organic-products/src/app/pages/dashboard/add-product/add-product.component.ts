import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar , MatSnackBarModule} from "@angular/material/snack-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  count : any = 0;
  totalCost : any = 0;
  allCost : any;
  allProductsCost : any = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private snackBar: MatSnackBar,private router : Router) {
      console.log(data)
     }

  ngOnInit(): void {
  }
  
  //dialog close
  close(){
    this.dialogRef.close()
  }

  addItem(cost:any){
    let type = 'add'
    this.showAddedInfo()
    this.count += 1
    this.getCost(this.count,cost,type)
  }

  removeCount(cost:any){
    let type = 'remove'
    this.showRemovedInfo()
    this.count -= 1
    this.getCost(this.count,cost,type)
  }


  getCost(count:any,cost:any,type:string){  
    this.totalCost = count*cost
    this.allCost = type == 'add'? Number(sessionStorage.getItem("userPerItemTotalCost")) + cost
                                : Number(sessionStorage.getItem("userPerItemTotalCost")) - cost
    sessionStorage.setItem("userPerItemTotalCost", this.allCost);
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
    this.count = 0;
    this.totalCost = 0;
    this.buyInfo()
    sessionStorage.clear();
    this.close();
    this.router.navigate(['/dashboard'])
    
  }
}
