import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './services/home.service';
import {
  HomeContainerComponent,
  HomeDetailComponent,
 
} from './components';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
  
  ],
 providers:[HomeService],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
