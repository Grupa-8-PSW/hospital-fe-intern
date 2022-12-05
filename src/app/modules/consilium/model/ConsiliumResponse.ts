import Doctor from "src/app/model/doctor";

export default interface ConsiliumResponse {
  id: number;
  subject: string;
  from: string;
  to: string;
  duration: number;
  doctors: Doctor[];
}
