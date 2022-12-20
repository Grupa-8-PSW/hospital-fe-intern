import Examination from "./examination"
import Symptom from "./symptom"

export default interface ExaminationDone {
    id?: number,
    examinationId: number,
    examination?: Examination,
    record: string,
    symptoms: Symptom[] | null,
    prescriptions?: any
  }
  