import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoute } from './app.route';
import { HeaderComponent } from './base/header/header.component';
import { MemberModule } from './member/member.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoute, { preloadingStrategy: PreloadAllModules }),
    MemberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
