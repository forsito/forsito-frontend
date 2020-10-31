import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CrewComponent } from './crew/crew.component';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { StartingPageComponent } from './profile/starting-page/starting-page.component';
import { BasicInfoComponent } from './profile/basic-info/basic-info.component';
import { UserProjectsComponent } from './profile/user-projects/user-projects.component';

const routes: Routes = [
  // home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // crew
  { path: 'crew', component: CrewComponent },
  // user profile
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
      { path: '', component: StartingPageComponent },
      { path: 'basic-info', component: BasicInfoComponent },
      { path: 'user-projects', component: UserProjectsComponent },
    ],
  },
  // projects
  { path: 'projects', component: ProjectsComponent },
  // contact us
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
