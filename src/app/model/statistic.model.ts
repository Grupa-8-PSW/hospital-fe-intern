import PatientAgeStatistic from "./patient-age-statistic.model";
import PatientBloodTypeStatistic from "./patient-blood-type-statistic.model";
import PatientGenderStatistic from "./patient-gender-statistic.model";

export default interface Statistic {
    ageStatistic: PatientAgeStatistic;
    genderStatistic: PatientGenderStatistic;
    bloodTypeStatistic: PatientBloodTypeStatistic;
}
