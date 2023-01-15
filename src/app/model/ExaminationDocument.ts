import * as moment from "moment";

export default interface ExaminationDocument {
  report: string;
  doctor: string;
  patient: string;
  from: moment.Moment;
  to: moment.Moment;
  prescriptions: ExaminationDocumentPrescription[];
}

interface ExaminationDocumentPrescription {
  items: ExaminationDocumentPrescriptionItem[];
}

interface ExaminationDocumentPrescriptionItem {
  code: string;
  name: string;
  quantity: number;
}
