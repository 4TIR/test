import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeDetailsComponent } from './home-details.component';
import { HomeWrapperComponent } from './home-wrapper.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeWrapperComponent,
      children:[
        {
          path:'',component:HomeComponent
      },
      {
        path:':id',component:HomeDetailsComponent
    }
    ] }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
