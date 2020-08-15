import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SearchComponent } from './search/search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const appRoutes: Routes = [
{ path: '' , component:PropertyListComponent },
{ path: 'buy' , component:PropertyListComponent },
{ path: 'rent' , component:PropertyListComponent },
{ path: 'login' , component:UserLoginComponent },
{ path: 'register' , component:UserRegistrationComponent },
{ path: 'app-property' , component:AddPropertyComponent }
] ;

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddPropertyComponent,
    PropertyCardComponent,
    PropertyListComponent,
    SearchComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
