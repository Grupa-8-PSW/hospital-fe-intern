import PrescriptionItem from "./prescription-item";

export default interface Prescription {
    id?: number,
    items: PrescriptionItem[] | null,
  }
  