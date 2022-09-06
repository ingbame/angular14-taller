import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'to-do', loadChildren: () => import('../to-do/to-do.module').then(m => m.ToDoModule) },
      { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent]
})
export class HomeModule {

  constructor() {
    console.log('HomeModule');
  }

}
