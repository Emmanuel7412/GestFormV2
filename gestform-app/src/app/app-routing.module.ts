import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNumberComponent } from './components/check-number/check-number.component';
import { HomeComponent } from './components/home/home.component';
import { MyCVComponent } from './components/my-cv/my-cv.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'checkNumber', component: CheckNumberComponent },
  { path: 'cv', component: MyCVComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
