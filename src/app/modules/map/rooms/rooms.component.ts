import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
import { Router, RouterLinkActive } from '@angular/router';
import { Room } from '../model/rooms.model';
import { EquipmentTransferDTO } from '../model/equipmentTransferDTO.model';
import { FreeSpaceForTransfer } from '../model/freeSpaceForTransfer.model';
import { RoomsService } from './roomsService/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from './roomsService/forms.service';
import { Form } from '../model/form.model';
import { Equipment } from '../model/equipment.model';
import { EquipmentsService } from './roomsService/equipments.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RoomForSeparateDTO } from '../model/roomForSeparateDTO.model';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class SignatureComponent implements OnInit {

  roomNum = null;
  canvas: any;
  state = false;
  mergeState = false;
  separateState = false;
  id = null;
  roomId: number;
  stateAprooved = true;
  canMoveForm = false;
  canRenoveteForm = false;
  percent = 0;
  renovatePercent = 0;
  percentIsHun = false;
  percentIsZero = true;
  percentIsTwenty = false;
  percentIsFourty = false;
  percentIsSixty = false;
  percentIsEighty = false;
  value = 0;
  startDate: Date | null;
  endDate: Date | null;
  roomType: string;
  praviNiz: string;
  minDate = new Date()
  days: number;
  hours: number;
  eqAmouont: number;
  startDateRenovate: Date;
  endDateRenovate: Date;
  daysRenovate: number;
  hoursRenovate: number;
  selectedRoom?: Room;
  selectedTermin?: FreeSpaceForTransfer;
  room1 = false;
  room2 = false;

  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private _Activatedroute: ActivatedRoute,
    private formsService: FormsService,
    private equipmentsService: EquipmentsService,
    public dialog: MatDialog
  ) { }

  public rooms: Room[] = [];
  public allRooms: Room[] = [];
  public roomsByFloorId: Room[] = [];
  public forms: Form[] = [];
  public equipments: Equipment[] = [];
  public datas = [];
  public niz = [];
  public equipmentTransferDTO: EquipmentTransferDTO;
  public roomForSeparateDTO: RoomForSeparateDTO;
  public AllTermins: FreeSpaceForTransfer[] = [];

  ngOnInit(): void {

    this.id = this._Activatedroute.snapshot.paramMap.get("floorId");
    this.roomId = parseInt(this._Activatedroute.snapshot.paramMap.get("roomId"));

    this.equipmentTransferDTO = {
      amount: null,
      fromRoomId: null,
      toRoomId: null,
      startDate: null,
      endDate: null,
      duration: null,
      equipmentName: null,
    }

    this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: false
    });
    this.roomsService.getRooms().subscribe(res => {
      this.allRooms = res;
    });

    this.roomsService.getRoomByFloorId(this.id).subscribe(res => {
      this.rooms = res;
      this.roomsByFloorId = res;

      for (let i = 0; i < this.rooms.length; i++) {

        let id = this.rooms[i].id;
        let x = this.rooms[i].x;
        let y = this.rooms[i].y;
        let w = this.rooms[i].width;
        let h = this.rooms[i].height;
        let rc: string;
        let name = this.rooms[i].name;


        if (this.rooms[i].type === 0) {
          this.roomType = "OTHER"
        } else if (this.rooms[i].type === 1) {
          this.roomType = "RECOVERY"
        } else if (this.rooms[i].type === 2) {
          this.roomType = "CAFETERIA"
        } else if (this.rooms[i].type === 3) {
          this.roomType = "OPERATIONS"
        } else if (this.rooms[i].type === 4) {
          this.roomType = "STORAGE ROOM"
        }

        this.niz[i] = this.roomType;
        this.praviNiz

        if (this.rooms[i].id === this.roomId) {
          rc = "#ff1a1a"
        }
        else if (this.rooms[i].type === 0) {
          rc = "#9999ff";
        } else if (this.rooms[i].type === 1) {
          rc = "#ccffee";
        } else if (this.rooms[i].type === 2) {
          rc = "#eaaeae";
        } else if (this.rooms[i].type === 3) {
          rc = " #ff944d";
        } else {
          rc = "#fff4b3";
        }

        let rectangle = new fabric.Rect({
          width: w,
          height: h,
          fill: '',
          stroke: rc,
          strokeWidth: 3,
          top: x,
          left: y,
          selectable: false,
          hoverCursor: "pointer",

        });
        this.canvas.add(rectangle);

        rectangle.on('mousedown', () => {
          this.equipmentTransferDTO.fromRoomId = id;
          this.praviNiz = this.niz[i];
          this.state = false;
          if (this.state === false) {
            this.state = true;
            this.roomNum = id;

            this.formsService.getForms().subscribe(res => {
              this.forms = res;

              for (let i = 0; i < this.forms.length; i++) {

                let roomId = this.forms[i].roomId;
                let name = this.forms[i].name;
                let desc = this.forms[i].description;
                let sWD = this.forms[i].startHourWorkDay;
                let eWD = this.forms[i].endHourWorkDay;
                let sSat = this.forms[i].startHourSaturday;
                let eSat = this.forms[i].endHourSaturday;
                let sSun = this.forms[i].startHourSunday;
                let eSun = this.forms[i].endHourSunday;


                if (this.roomNum === roomId) {
                  this.datas[0] = roomId;
                  this.datas[1] = name;
                  this.datas[2] = desc;
                  this.datas[3] = sWD;
                  this.datas[4] = eWD;
                  this.datas[5] = sSat;
                  this.datas[6] = eSat;
                  this.datas[7] = sSun;
                  this.datas[8] = eSun;
                }

              }
            })

            this.equipmentsService.getEquipmentsByRoomId(id).subscribe(res => {
              this.equipments = res;


              for (let j = 0; j < this.equipments.length; j++) {

                let equipmentId = this.equipments[j].equipmentId;
                let name = this.equipments[j].name;
                let amount = this.equipments[j].amount;
                let roomId = this.equipments[j].roomId;


                if (roomId === id) {
                  this.equipments[j].equipmentId = equipmentId;
                  this.equipments[j].name = name;
                  this.equipments[j].amount = amount;
                }
              }
            })
          }
        });

        var text = new fabric.Text(name, {
          fill: "black",
          fontSize: 20,
          top: x + h / 2.3,
          left: y + w / 2.5
        });

        this.canvas.add(text);
      }
    })
  }

  moveEquipmentForm(event, selectedEquipment) {  //FORMA KOJA SE OTVARA KADA KLIKNEMO DUGME MOVE
    event.preventDefault();
    this.canMoveForm = true;
    this.equipmentTransferDTO.equipmentName = selectedEquipment;
    console.log(this.equipmentTransferDTO.equipmentName);
  }

  startRenovateForm(event) {    //FORMA KOJA SE OTVARA KADA KLIKNEMO DUGME RENOVATE ZA RENOVIRANJE SOBA
    event.preventDefault();
    this.canRenoveteForm = true;
  }

  onChange(quantity) {
    this.value = quantity.value; //KOLICINA KOJU UNESEMO
  }

  onChange1(days) {   //DANI POTREBNI ZA MOVE EQUIPMENT
    this.days = days.value;
  }

  onChange2(hours) {  //SATI POTREBNI ZA MOVE EQUIPMENT
    this.hours = hours.value;
    this.equipmentTransferDTO.duration = this.hours;
  }

  getStartDate(startDate) {
    this.equipmentTransferDTO.startDate = startDate;
  }

  getEndDate(endDate) {
    this.equipmentTransferDTO.endDate = endDate;
  }

  //LUDOST
  addPercent(event) {
    event.preventDefault();

    if (this.percent < 100) {
      this.percent = this.percent + 25;
    }

    if (this.percent > 0) {
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
    }

    if (this.percent === 25) {
      this.percentIsTwenty = true;
      this.percentIsZero = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
    }
    if (this.percent === 50) {
      this.percentIsFourty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsSixty = false;
    }

    if (this.percent === 75) {
      this.percentIsSixty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
    }
    if (this.percent === 100) {
      this.percentIsHun = true;
    }
  }

  removePercent(event) {
    event.preventDefault();
    this.percentIsHun = false;
    if (this.percent > 0) {
      this.percent = this.percent - 25;
    }
    if (this.percent === 25) {
      this.percentIsTwenty = true;
      this.percentIsZero = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
    }
    if (this.percent === 50) {
      this.percentIsFourty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsSixty = false;
    }
    if (this.percent === 75) {
      this.percentIsSixty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
    }
    if (this.percent === 0) {
      this.percentIsZero = true;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
    }
  }

  addPercentRenovate(event) {
    event.preventDefault();

    if (this.renovatePercent < 100) {
      this.renovatePercent = this.renovatePercent + 20;
    }

    if (this.renovatePercent > 0) {
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
      this.percentIsEighty = false;
    }

    if (this.renovatePercent === 20) {
      this.percentIsTwenty = true;
      this.percentIsZero = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
      this.percentIsEighty = false;
    }
    if (this.renovatePercent === 40) {
      this.percentIsFourty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsSixty = false;
      this.percentIsEighty = false;
    }

    if (this.renovatePercent === 60) {
      this.percentIsSixty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsEighty = false;
    }
    if (this.renovatePercent === 80) {
      this.percentIsEighty = true;
      this.percentIsSixty = false;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
    }
    if (this.renovatePercent === 100) {
      this.percentIsHun = true;
    }
  }

  removePercentRenovate(event) {
    event.preventDefault();
    this.percentIsHun = false;
    if (this.renovatePercent > 0) {
      this.renovatePercent = this.renovatePercent - 20;
    }
    if (this.renovatePercent === 20) {
      this.percentIsTwenty = true;
      this.percentIsZero = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
      this.percentIsEighty = false;
    }
    if (this.renovatePercent === 40) {
      this.percentIsFourty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsSixty = false;
      this.percentIsEighty = false;
    }
    if (this.renovatePercent === 60) {
      this.percentIsSixty = true;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsEighty = false;
    }
    if (this.renovatePercent === 80) {
      this.percentIsSixty = false;
      this.percentIsZero = false;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsEighty = true;
    }
    if (this.renovatePercent === 0) {
      this.percentIsZero = true;
      this.percentIsTwenty = false;
      this.percentIsFourty = false;
      this.percentIsSixty = false;
      this.percentIsEighty = false;
    }
  }

  scheduleMoving(event) {
    event.preventDefault();
    this.equipmentsService.addEquipmentTrasfer(this.equipmentTransferDTO).subscribe(res => {
      console.log(res);
    })
  }

  getTermins() {
    this.roomsService.getFreeSpaceList(this.equipmentTransferDTO).subscribe(res => {
      this.AllTermins = res;
    })
  }

  getAmount(amount: number) {
    this.equipmentTransferDTO.amount = amount;
    this.eqAmouont = amount;
  }

  selectRoom(selectedRoomId: number, room: Room) {
    this.equipmentTransferDTO.toRoomId = selectedRoomId;
    this.selectedRoom = room;
  }

  selectTermin(selectedTerminStartTime, selectedTerminEndTime, termins: FreeSpaceForTransfer) {
    this.equipmentTransferDTO.startDate = selectedTerminStartTime;
    this.equipmentTransferDTO.endDate = selectedTerminEndTime;
    this.selectedTermin = termins;
  }

  // ZA RENOVIRANJE
  selectedRoomsForSeparating(selectedRoomId: number, room: Room) {
    console.log(selectedRoomId);
    console.log(room);
    this.roomForSeparateDTO.oldRoom = room;
  }
  // TREBA DODATI ROOMID2 U NOVI DTO I TREBA SKONTATI KAKO MULTI SELECT DA ODRADIM DA UZMEM I ROOMID2 i ROOM2
  selectedRoomForMerge(selectedRoomId: number, room: Room, selectedRoomId2: number, room2: Room) {
    console.log(selectedRoomId);
    console.log(room);
  }
  getStartDateForRenovate(startDate) {
    this.roomForSeparateDTO.startDate = startDate.value;
  }

  getEndDateForRenovate(endDate) {
    this.roomForSeparateDTO.endDate = endDate.value;
  }

  DurationInDaysRenovate(days) {
    this.daysRenovate = days.value;
  }

  DurationInHoursRenovate(hours) {
    this.roomForSeparateDTO.hours = hours.value;
  }

  getTerminsRenovate() {
    //TREBA DODATI U DTO-OVE SELEKTOVAN TERMIN
  }

  newSeparatedRoom(newMergedRoom) {
    this.roomForSeparateDTO.newRoomName = newMergedRoom.value;
  }

  newSeparatedRoomType(newMergedRoomType) {
    this.roomForSeparateDTO.newRoomType = newMergedRoomType.value;
  }

  ScheduleForMerginRooms() {
    if (this.mergeState == true) {
      //stavim sveu MergeRoomDTO i servis 
    } else if (this.separateState == true) {
      //stavim sve u SeparateRoomDTO i servis
    }
  }

  MergingRooms() {
    this.mergeState = true;
    this.separateState = false;
  }

  SeparatingRooms() {
    this.separateState = true;
    this.mergeState = false;
  }

  validationsForAmount = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.max(2), Validators.pattern("^[0-9]*$")]),   // TREBA IZMENITI 2 SA eq.Amount al mi ne ide od ruke nesto
    days: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    hours: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.max(24)])
  })

  room1Selected() {
    this.room1 = true;
    this.room2 = false;
  }

  room2Selected() {
    this.room1 = false;
    this.room2 = true;
  }

}
