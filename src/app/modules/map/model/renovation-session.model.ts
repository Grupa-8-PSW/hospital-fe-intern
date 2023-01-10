export default interface RenovationSession {
    id: number;
    type: number;
    room: number;
    interval: number;
    duration: number;
    available: number;
    changes: number;
    schedule: number;
}