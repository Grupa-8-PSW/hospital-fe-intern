export interface EquipmentTransferDTO {
    amount: number;
    fromRoomId: number;
    toRoomId: number;
    startDate: Date;
    endDate: Date;
    duration: number;
}