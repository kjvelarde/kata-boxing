import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { MemberInsurance, MemberPreference } from '../_models/member.model';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) {}

  // Get initial data for member
  get(): Observable<MemberInsurance> {
    const url = `https://member-data.beam.dental/searchResults.json`;
    return this.http.get<MemberInsurance[]>(url).pipe(
      this.filterMemberInsuranceData(),
      switchMap((memberInsurance: MemberInsurance) =>
        zip(of(memberInsurance), this.getPreferences(memberInsurance.id))
      ),
      map(([memberInsurance, preference]) => ({
        ...memberInsurance,
        preference
      }))
    );
  }

  getTheMostRecentActiveInsurance(filteredData: MemberInsurance[]) {
    return filteredData.sort(
      (a: MemberInsurance, b: MemberInsurance) =>
        Number(new Date(b.effective_date)) - Number(new Date(a.effective_date))
    )[0];
  }

  private filterMemberInsuranceData() {
    return map((memberInsurances: MemberInsurance[]) => {
      const filteredData = memberInsurances.filter(
        mi => !mi.primary_insured_id && !mi.terminated_at
      );
      return filteredData.length > 0
        ? this.getTheMostRecentActiveInsurance(filteredData)
        : of({});
    });
  }

  /**
   * Get member preference dto
   * @param memberId: member id to match from the data set
   */
  private getPreferences(memberId: number): Observable<MemberPreference> {
    const url = `https://member-data.beam.dental/memberPreferences.json`;
    return this.http
      .get<MemberPreference[]>(url)
      .pipe(
        map((preferences: MemberPreference[]) =>
          preferences.find(p => p.member_id === memberId)
        )
      );
  }
}
