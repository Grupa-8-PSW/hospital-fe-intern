import { FreeSpaceForTransfer } from "./freeSpaceForTransfer.model";
import { Room } from "./rooms.model";

export interface RoomsForMergeDTO {
    oldRoom1Id: number;
    oldRoom2Id: number;
    //termins: FreeSpaceForTransfer;
    newRoomName: string;
    newRoomType: string;
}