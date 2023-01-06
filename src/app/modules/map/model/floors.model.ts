export class Floor {
    id: number = 0;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    color: string = "";
    number: string = "";
    buildingId: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.x = obj.x;
            this.y = obj.y;
            this.width = obj.width;
            this.height = obj.height;
            this.color = obj.color;
            this.number = obj.number;
            this.buildingId = obj.buildingId;
        }
    }
}