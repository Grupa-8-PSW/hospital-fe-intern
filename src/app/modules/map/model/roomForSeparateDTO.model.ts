import { FreeSpaceForTransfer } from "./freeSpaceForTransfer.model";
import { Room } from "./rooms.model";

export interface RoomForSeparateDTO {
    oldRoomId: number;
    //termins: FreeSpaceForTransfer;
    newRoom1Name: string;
    newRoom1Type: any;
    newRoom2Name: string;
    newRoom2Type: any;
}