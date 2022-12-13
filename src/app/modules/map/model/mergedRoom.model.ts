import { Room } from "./rooms.model";

export class MergedRoom {
    room: Room;

    public constructor(obj?: any) {
        if (obj) {
            this.room = obj.room;
        }
    }
}