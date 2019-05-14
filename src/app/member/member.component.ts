import { MemberInsurance } from './../_models/member.model';
import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  memberInsurance$: Observable<MemberInsurance>;
  constructor(private memberService: MemberService) {}

  ngOnInit() {
    // retrieve dto
    this.memberInsurance$ = this.memberService.get();
  }
}
