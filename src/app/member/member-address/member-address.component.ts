import { MemberInsurance } from './../../_models/member.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-member-address',
  templateUrl: './member-address.component.html',
  styleUrls: ['./member-address.component.scss']
})
export class MemberAddressComponent implements OnInit {
  @Input() memberInsurance: MemberInsurance;

  memberInsuranceForm: FormGroup;
  isEdit = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    // initialize reactive form (full dto)
    this.memberInsuranceForm = this.fb.group({
      id: [this.memberInsurance.id],
      primary_insured_id: [this.memberInsurance.primary_insured_id],
      name: [this.memberInsurance.name],
      effective_date: [this.memberInsurance.effective_date],
      terminated_at: [this.memberInsurance.terminated_at],
      shipping_address: [
        this.memberInsurance.shipping_address,
        [Validators.required]
      ],
      shipping_city: [
        this.memberInsurance.shipping_city,
        [Validators.required]
      ],
      shipping_state: [
        this.memberInsurance.shipping_state,
        [Validators.required]
      ],
      shipping_zip_code: [
        this.memberInsurance.shipping_zip_code,
        [Validators.required]
      ],
      preference: this.fb.group({
        id: [this.memberInsurance.preference.id],
        member_id: [this.memberInsurance.preference.member_id],
        brush_color: [this.memberInsurance.preference.brush_color],
        motor_speed: [this.memberInsurance.preference.motor_speed],
        auto_off: [this.memberInsurance.preference.auto_off]
      })
    });
    this.memberInsuranceForm.disable();
  }

  /**
   * Method that changes the state of the form object
   * execute a snackbar message when it's simulated successfully
   */
  update() {
    if (this.memberInsuranceForm.invalid) {
      this.snackBar.open('Invalid Address!', null, {
        panelClass: 'panel-danger'
      });
    }

    if (this.memberInsuranceForm.enabled && this.memberInsuranceForm.valid) {
      this.snackBar.open('Address updated successfully!', null, {
        panelClass: 'panel-success'
      });
      this.memberInsuranceForm.disable();
    } else {
      this.memberInsuranceForm.enable();
    }
  }
}
