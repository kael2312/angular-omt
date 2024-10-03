import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {UserListComponent} from "./user/user-list/user-list.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,  // Layout chính
        children: [
            { path: 'users', component: UserListComponent },  // Các trang con
            { path: '', redirectTo: '', pathMatch: 'full' },  // Đường dẫn mặc định
        ]
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
