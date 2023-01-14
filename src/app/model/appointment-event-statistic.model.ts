import AppointmentStepViewCountStatistic from "./appointment-step-view-count-statistic.model";

export default interface AppointmentEventStatistic {
    averageNumberOfStep: number;
    averageSecondsOfScheduling: number;
    stepViewCountStatistic: AppointmentStepViewCountStatistic;
}
