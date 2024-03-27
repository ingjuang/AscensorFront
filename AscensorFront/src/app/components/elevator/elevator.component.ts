import { Component, inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ElevatorService } from '../../services/elevator.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../../services/request.service';


@Component({
  selector: 'app-elevator',
  standalone: true,
  imports: [MatGridListModule, CommonModule, FormsModule],
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.css'
})

export default class ElevatorComponent {
  private readonly elevatorService = inject(ElevatorService);
  private readonly requestService = inject(RequestService);

  elevator: any;
  floorToRequest: any;
  currentFloor: number = 1;
  floors = [1,2,3,4,5,6,7,8,9,]
  binding: any;
  requests: any[] = [];
  stopMess: any = "";
  openDoorsRes: any = "";

  constructor() {
    setInterval(()=>{
      this.getElevator();
      this.getRequests();
    }, 3000)
  }

  async getElevator(){
     await this.elevatorService.getElevator().then((res: any)=>{
      console.log(res);
      this.elevator = res.result;
     }).catch((error)=>{
      console.log(error);
     })
  }

  async setRequest(object: any){
    await this.elevatorService.setRequest(object).then((res:any)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    });
  }

  async getRequests(){
    await this.requestService.getRequests().then((res:any)=>{
      console.log(res);
      this.requests = res.result;
    }).catch((error)=>{
      console.log(error);
    })
  }

  async openDoors(){
    await this.elevatorService.OpenDoors().then((res:any)=>{
      console.log(res);
      this.openDoorsRes = res.message;
      setTimeout(() => {
        this.openDoorsRes = "";
      }, 5000);
    }).catch((error)=>{
      console.log(error);
    })
  }

  async stopElevator(){
    await this.requestService.stopElevator().then((res:any)=>{
      console.log(res);
      this.stopMess = res.message
      setTimeout(() => {
        this.stopMess = "";
      }, 5000);
    }).catch((error)=>{
      console.log(error);
    });
  }

  requestElevator(){
    console.log(this.currentFloor);
    this.setRequest(this.currentFloor);
  }

  
  requestElevatorToGo(floorToGo:number){
    this.setRequest(floorToGo);
  }
}
