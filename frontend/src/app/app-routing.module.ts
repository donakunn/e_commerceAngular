import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
{
  path : 'c-header',
component: HeaderComponent
},
{
  path : 'footer',
component: FooterComponent
},
{
  path : '',
component: MainComponent
},
{
  path : 'products',
component: ProdottiComponent
},
{
  path : 'contacts',
component: ContactsComponent
},
{
  path : 'about',
component: AboutComponent
},
{
  path : 'categories',
component: CategoriesComponent
},
{
  path : 'register',
component: RegistrazioneComponent
},
{
  path : 'login',
component: LoginComponent
},
{
  path : 'controlPanel',
component: ControlpanelComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
