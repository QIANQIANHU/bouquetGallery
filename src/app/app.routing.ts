import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { GallerybouquetComponent }   from './gallerybouquet/gallerybouquet.component';
import { BouquetDetailComponent }   from './bouquet-detail/bouquet-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'gallerybouquet',
    component: GallerybouquetComponent
  },

  {
    path: 'bouquets/:id',
    component: BouquetDetailComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  }


 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
