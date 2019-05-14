import { Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';

export const AppRoute: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'member' },
  {
    path: 'member',
    data: { preload: true },
    component: MemberComponent
  }
];
