export default interface ExaminationDocument {
  report: string;
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
