import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingolacategoriaComponent } from './singolacategoria/singolacategoria.component';
import { LoginComponent } from './login/login.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CreacategoriaComponent } from './adminComponents/creacategoria/creacategoria.component';
import { MostracategoriaComponent } from './adminComponents/mostracategoria/mostracategoria.component';
import { CreaprodottoComponent } from './adminComponents/creaprodotto/creaprodotto.component';
import { MostraprodottoComponent } from './adminComponents/mostraprodotto/mostraprodotto.component';
import { MostrautentiComponent } from './adminComponents/mostrautenti/mostrautenti.component';
import { CategorieService } from './services/categorie.service';
import { SingoloprodottoComponent } from './singoloprodotto/singoloprodotto.component';
import { ProdottiService } from './services/prodotti.service';
import { CartComponent } from './cart/cart.component';
import { CartproductComponent } from './cartproduct/cartproduct.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProdottiComponent,
    CategoriesComponent,
    ContactsComponent,
    AboutComponent,
    RegistrazioneComponent,
    SingolacategoriaComponent,
    LoginComponent,
    ControlpanelComponent,
    CreacategoriaComponent,
    MostracategoriaComponent,
    CreaprodottoComponent,
    MostraprodottoComponent,
    MostrautentiComponent,
    SingoloprodottoComponent,
    CartComponent,
    CartproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CategorieService, ProdottiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
