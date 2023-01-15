import AppointmentStepViewCountStatistic from "./appointment-step-view-count-statistic.model";
import PatientAgeStatistic from "./patient-age-statistic.model";

export default interface AppointmentEventStatistic {
    averageNumberOfStep: number;
    averageSecondsOfScheduling: number;
    stepViewCountStatistic: AppointmentStepViewCountStatistic;
    durationViewingEachStep: AppointmentStepViewCountStatistic;
    succesfullPercentage: number;
    ageStatistic: PatientAgeStatistic;
}
