import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    { 
      id: 1,
      name : 'Bhaang',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/40Fvj1Y5AN8CGgu2RObA4v/02f8d1b9b936bc8a6163eb8d970d5e37/a04-straw-constructed-pdp-web.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 100,
      discount: 0
    },
    {
      id: 2,
      name : 'Ginger',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/426bCGcaju9Z6IMxv1Kwmi/35a684c7386b2cf07b02b0d21bcfd126/a01-acai-constructed-pdp-web.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 150,
      discount: 20
    },
    {
      id: 3,
      name : 'Garlic',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/7KfgPc7CZE64uXOoWwewAO/1066224abf714a14874d7cb65e366a7b/F13-RITO_Sweet_Potato___Wild_Rice_Hash_unconstructed.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 190,
      discount: 20
    },
    {
      id: 4,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 50,
      discount: 20
    },
    {
      id: 5,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 115,
      discount: 20
    },
    {
      id: 6,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/6rTVBfRqzdFEU9NyQJS0a5/99e01fc41e6c329740c2627d1c2efcbd/F10-CHEEZE_Broccoli___Cheeze_unconstructed.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 12,
      discount: 20
    },
    {
      id: 7,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/2SWXyPNRVly47oEs66mI7x/40c7a5c41dd5cb33947b9a8c38874dd7/B11-BNUT-Product-Shot.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 45,
      discount: 20
    },
    {
      id: 8,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/1OUmuYnBQGli5Mu6muI9fB/8a42a8da6c26dc540dbe7b53964e320d/A33-DATE-and-Almond-Constructed-pdp-web.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 48,
      discount: 20
    },
    {
      id: 9,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/3Gj5BY1HnZbKxHkYxz1McN/f513e25bc2fd002738abb3072523c13a/A32-GREEN-Avocado-Greens-Constructed-pdp-web.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 77,
      discount: 20
    },
    {
      id: 10,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/LM7x42vquig0iSUB81RKL/434d85c03b27e507d24ed286d827d2ed/A25_Razz_Tart_Cherry_blended-Product-Shot.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 100,
      discount: 20
    },
    {
      id: 11,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/2SWXyPNRVly47oEs66mI7x/40c7a5c41dd5cb33947b9a8c38874dd7/B11-BNUT-Product-Shot.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 100,
      discount: 20
    },
    {
      id: 12,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/4IGzj2NgCOCe374lgjD6yd/4886a34f24011b0f19f006e714eedf07/B14-BROCC-broccoli-white-bean-deconstructed-web.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 100,
      discount: 20
    },
    {
      id: 13,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/1nZW4UGKM0fZmBF3245w4M/694bf8e9a7b80e7afc7bcb7390f3267b/F28-RISO-herbed-squash-asparagus-risotto-deconstructed-web.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 100,
      discount: 20
    },
    {
      id: 14,
      name : 'abc',
      imgUrl: 'https://images.ctfassets.net/iw4cawak30d4/1Ydr3CJnbQFUDkN9XMiMAb/77170577acd5138304d70726bc5185c5/F05-MESQ_Quinoa___Chipotle_unconstructed.png?fm=avif&q=60&w=900',
      category: 'smoothie',
      cost: 100,
      discount: 20
    }
  ]
}
