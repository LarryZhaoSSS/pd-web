import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent } from './components/product-container';
import { GroupItemComponent } from './components';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';
import { ProductVariantDialogComponent } from './components/product-variant-dialog/product-variant-dialog.component';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent
  ],
  imports: [SharedModule, ProductRoutingModule],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule {}
