import { Room } from "./rooms.model";

export class SeparatedRooms {
    firstRoom: Room;
    secondRoom: Room;

    public constructor(obj?: any) {
        if (obj) {
            this.firstRoom = obj.firstRoom;
            this.secondRoom = obj.secondRoom;
        }
    }
}