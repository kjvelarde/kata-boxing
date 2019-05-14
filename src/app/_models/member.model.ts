// NOTE: data signature from api response https://member-data.beam.dental/searchResults.json
export interface MemberInsurance {
  id: number;
  primary_insured_id?: number;
  name: string;
  effective_date: string;
  terminated_at?: string;
  shipping_address: string;
  shipping_city: string;
  shipping_state: string;
  shipping_zip_code: string;

  preference?: MemberPreference;
}

// NOTE: data signature from api response https://member-data.beam.dental/memberPreferences.json
export interface MemberPreference {
  id: number;
  member_id: number;
  brush_color: string;
  motor_speed: number;
  auto_off: boolean;
}
