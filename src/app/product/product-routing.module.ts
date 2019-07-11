import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent } from './components';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: ':productId',
        component: ProductContainerComponent
      }
    ]
  },
  {
    path:'orders/confirm',
    component: ConfirmOrderComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
