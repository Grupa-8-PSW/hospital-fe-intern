export class Building {
    id: number = 0;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    color: string = "";
    name: string = "";
    
    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.x = obj.x;
            this.y = obj.y;
            this.width = obj.width;
            this.height = obj.height;
            this.color = obj.color;
            this.name = obj.name;
        }
    }
}