import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'member/:id',
    loadChildren: () => import('./member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'checkup/:id',
    loadChildren: () => import('./checkup/checkup.module').then( m => m.CheckupPageModule)
  },
  {
    path: 'admission',
    loadChildren: () => import('./admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'checkup-summary/:id',
    loadChildren: () => import('./checkup-summary/checkup-summary.module').then( m => m.CheckupSummaryPageModule)
  },
  {
    path: 'medicine',
    loadChildren: () => import('./medicine/medicine.module').then( m => m.MedicinePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
