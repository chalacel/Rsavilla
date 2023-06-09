import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ManagementComponent } from './management/management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    WorkComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    ContactComponent,
    PortfolioComponent,
    ManagementComponent,
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GalleriaModule,
    TabViewModule,
    CardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
