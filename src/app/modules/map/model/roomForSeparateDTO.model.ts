import { FreeSpaceForTransfer } from "./freeSpaceForTransfer.model";
import { Room } from "./rooms.model";

export interface RoomForSeparateDTO {
    oldRoom: Room;
    startDate: Date;
    endDate: Date;
    hours: number;
    termins: FreeSpaceForTransfer;
    newRoomName: string;
    newRoomType: string;
}