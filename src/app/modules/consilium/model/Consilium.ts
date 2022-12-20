import { Moment } from "moment";
import Doctor from "src/app/model/doctor";

export default interface Consilium {
  id: number;
  subject: string;
  from: Moment;
  to: Moment;
  duration: number;
  doctors: Doctor[];
}
