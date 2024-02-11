import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  products = [
    { 
      id: 1,
      name : 'Bhaang',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 100,
      discount: 0,
      review: 4,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
      ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 2,
      name : 'Ginger',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 150,
      discount: 20,
      review: 3,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 3,
      name : 'Garlic',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/7KfgPc7CZE64uXOoWwewAO/1066224abf714a14874d7cb65e366a7b/F13-RITO_Sweet_Potato___Wild_Rice_Hash_unconstructed.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/7KfgPc7CZE64uXOoWwewAO/1066224abf714a14874d7cb65e366a7b/F13-RITO_Sweet_Potato___Wild_Rice_Hash_unconstructed.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 190,
      review: 4,
      discount: 20,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 4,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 50,
      review: 4,
      discount: 20,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 5,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 115,
      review: 4,
      discount: 20,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 6,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 12,
      review: 4,
      discount: 20,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 7,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/2SWXyPNRVly47oEs66mI7x/40c7a5c41dd5cb33947b9a8c38874dd7/B11-BNUT-Product-Shot.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 45,
      discount: 20,
      review: 4,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
    },
    {
      id: 8,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/1OUmuYnBQGli5Mu6muI9fB/8a42a8da6c26dc540dbe7b53964e320d/A33-DATE-and-Almond-Constructed-pdp-web.png?fm=avif&q=60&w=900',
      imgSet: ['https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
               'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900'],
      category: 'smoothie',
      cost: 48,
      review: 4,
      discount: 20,
      overview: `Big berry energy comin’ through. Sweet strawberries, tart raspberries, and seductively 
      sour goji berries bring bursts of berry deliciousness to every sip. Juicy peaches round 
      everything out while gentle oats
       and nutty flax seeds add creaminess that’ll satisfy you ‘til your next meal.`,
       ingredients: `organic strawberries, organic bananas, organic peaches (organic peaches, ascorbic acid, citric acid), organic raspberries, organic gluten-free whole grain oats, organic flax seeds, organic goji berries. Please refer to the product label for the most accurate nutrition, ingredient, and allergen information.` 
  }
  ]

  openDialog(product:any){
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: product
    });   
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }
}
