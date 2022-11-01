import * as moment from "moment";
import { Moment } from "moment";

const format = "DD/MM/YYYY HH:mm";

export const workingDaysFilter = (d: Date | null): boolean => {
  const day = (d || new Date()).getDay();
  // Prevent Saturday and Sunday from being selected.
  return day !== 0 && day !== 6;
};

export const parseToMoment = (str: string): Moment => {
  return moment(str, format);
};

// time format: HH:mm
export const parseAndSetTime = (date: Moment, time: string) : Moment | null => {
  const parts = time.split(":");
  if (parts.length != 2) return null;

  const hour = Number(parts[0].trim());
  const minute = Number(parts[1].trim());

  date.hour(hour);
  date.minute(minute);

  return date;
}
