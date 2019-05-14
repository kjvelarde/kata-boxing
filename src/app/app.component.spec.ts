import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoute } from './app.route';
import { MemberModule } from './member/member.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [
        RouterModule.forRoot(AppRoute, {
          preloadingStrategy: PreloadAllModules
        }),
        MemberModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
