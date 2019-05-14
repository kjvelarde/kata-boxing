import { MemberInsurance, MemberPreference } from './_models/member.model';
import { TestBed } from '@angular/core/testing';

import { MemberService } from './member/member.service';
import { HttpClientModule } from '@angular/common/http';

describe('MemberService', () => {
  let memberInsurancesMock: MemberInsurance[];

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    memberInsurancesMock = [
      {
        id: 13,
        primary_insured_id: 0,
        name: 'Remy LeBeau',
        effective_date: '2018-01-01',
        terminated_at: null,
        shipping_address: '616 Thieves Guild St.',
        shipping_city: 'Columbus',
        shipping_state: 'OH',
        shipping_zip_code: '43215'
      },
      {
        id: 43,
        primary_insured_id: null,
        name: 'Remy LeBeau',
        effective_date: '2010-01-01',
        terminated_at: null,
        shipping_address: '616 Thieves\' Guild St.',
        shipping_city: 'Columbus',
        shipping_state: 'OH',
        shipping_zip_code: '43215'
      }
    ];
  });

  it('should be created', () => {
    const service: MemberService = TestBed.get(MemberService);
    expect(service).toBeTruthy();
  });

  /** KATA:
   *  Does not have a `primary_insured_id`. (He's his own primary insured.)
   *  Does not have a `terminated_at` date. (He still has insurance active.)
   *  Has the most recent `effective_date`. (Older ones might not be attached to the correct data anymore.)
   */

  it('insurance data should not have [primary_insured_id]', () => {
    const res = memberInsurancesMock.find(mi => !mi.primary_insured_id);
    expect(res.primary_insured_id).toBeFalsy();
  });

  it('insurance data should not have [terminated_at]', () => {
    const res = memberInsurancesMock.find(mi => !mi.terminated_at);
    expect(res.terminated_at).toBeNull();
  });

  it('insurance data should be the latest [effective_date] using getTheMostRecentActiveInsurance()', () => {
    const service: MemberService = TestBed.get(MemberService);
    const res: MemberInsurance = service.getTheMostRecentActiveInsurance(
      memberInsurancesMock
    );
    const years: number[] = memberInsurancesMock.map(mi =>
      new Date(mi.effective_date).getFullYear()
    );
    expect(new Date(res.effective_date).getFullYear()).toEqual(
      Math.max(...years)
    );
  });
});
