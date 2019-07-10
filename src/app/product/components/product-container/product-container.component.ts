import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { OrderService } from '../../services/order.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { ProductVariant } from '../../domain'
import { filter, map, switchMap } from 'rxjs/operators'
import { DialogService } from '../../../dialog/services/dialog.service';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>
  selectedIndex = 0
  constructor(
    private service: OrderService,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    )
    this.variants$ = productId$.pipe(
      switchMap(productId =>
        this.service.getProductVariantsByProductId(productId)
      )
    )
  }
  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40

    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {},
      outputs: {},
      position: {
        top: `${top}%`,
        left: '0',
        width: '100%',
        height: `${100 - top}%`
      }
    })
  }
}
