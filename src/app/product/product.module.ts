import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent } from './components/product-container';
import { GroupItemComponent } from './components';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent
  ],
  imports: [SharedModule, ProductRoutingModule]
})
export class ProductModule {}
