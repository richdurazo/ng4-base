import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { paths: '', component: HomeComponent },
    { paths: 'users', loadChildren: './users/users/module#UsersModule' },

]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterMoule]
})
export class AppRoutingModule {

}