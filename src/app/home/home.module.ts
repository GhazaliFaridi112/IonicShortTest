import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RecentSearchesComponent } from '../components/recent-searches/recent-searches.component';
import { PeopleYouMayKnowComponent } from '../components/people-you-may-know/people-you-may-know.component';
import { TopCoursesComponent } from '../components/top-courses/top-courses.component';
import { HeaderComponent } from '../components/header/header.component';
import { ArticlesComponent } from '../components/articles/articles.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  RecentSearchesComponent,
  PeopleYouMayKnowComponent,
  TopCoursesComponent,
  HeaderComponent,
  ArticlesComponent
]
})
export class HomePageModule {}
