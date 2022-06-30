import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationService } from '../shared/navigation/navigation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeWrapperComponent } from './home-wrapper.component';
import { HomeDetailsComponent } from './home-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeWrapperComponent,
    HomeDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    NavigationService
  ]
})
export class HomeModule { }
