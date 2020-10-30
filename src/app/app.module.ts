import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

// ngx toaster
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ProfileComponent } from './profile/profile.component';
import { StartingPageComponent } from './profile/starting-page/starting-page.component';
import { BasicInfoComponent } from './profile/basic-info/basic-info.component';
import { UserProjectsComponent } from './profile/user-projects/user-projects.component';

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
    ProfileComponent,
    StartingPageComponent,
    BasicInfoComponent,
    UserProjectsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      maxOpened: 4,
      autoDismiss: true,
      newestOnTop: true,
      timeOut: 3000,
    }), // ToastrModule added
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
