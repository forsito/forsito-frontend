import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CrewComponent } from './crew/crew.component';
import { PersonalCardComponent } from './crew/personal-card/personal-card.component';
import { HomeComponent } from './home/home.component';
import { FeedbacksComponent } from './home/feedbacks/feedbacks.component';
import { OffersComponent } from './home/offers/offers.component';
import { HeaderComponent } from './home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    CrewComponent,
    PersonalCardComponent,
    HomeComponent,
    FeedbacksComponent,
    OffersComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
