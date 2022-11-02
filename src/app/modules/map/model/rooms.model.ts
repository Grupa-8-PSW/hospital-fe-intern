export class Room {
    id: number = 0;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    color: string = "";
    name: string = "";
    floorId: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.x = obj.x;
            this.y = obj.y;
            this.width = obj.width;
            this.height = obj.height;
            this.color = obj.color;
            this.name = obj.name;
            this.floorId = obj.floorId;
        }
    }
}