import { MemberInsurance } from './../../_models/member.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddressComponent } from './member-address.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MemberAddressComponent', () => {
  let component: MemberAddressComponent;
  let fixture: ComponentFixture<MemberAddressComponent>;
  const mockData: MemberInsurance = {
    effective_date: '2018-01-01',
    id: 13,
    name: 'Remy LeBeau',
    preference: {
      auto_off: true,
      brush_color: 'chartreuse',
      id: 9,
      member_id: 13,
      motor_speed: 1
    },
    primary_insured_id: 0,
    shipping_address: '616 Thieves\' Guild St.',
    shipping_city: 'Columbus',
    shipping_state: 'OH',
    shipping_zip_code: '43215',
    terminated_at: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAddressComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddressComponent);
    component = fixture.componentInstance;

    component.memberInsurance = mockData;
    fixture.detectChanges();
  });

  it('should create address sub component', () => {
    expect(component).toBeTruthy();
  });
});
