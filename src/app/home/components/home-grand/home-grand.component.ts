import { Component, OnInit, Injectable, Injector } from '@angular/core'

@Injectable()
class Product {
  constructor(private name: string) {}
}
@Injectable()
class PurchaseOrder {
  private amount: number
  constructor(private product: Product) {}
}
@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  constructor() {}
  object = {
    productId: 2,
    productName: 'xx手机',
    model: 's',
    type: 'trash'
  }
  date: Date
  price: number
  ngOnInit() {
    this.date = new Date()
    this.price = 123.32
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          useFactory: () => {
            return new Product('iphone')
          },
          deps: []
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product]
        }
      ]
    })
    console.log('hhhhh')
    console.log(injector.get(Product))
    console.log(injector.get(PurchaseOrder))
  }
}
