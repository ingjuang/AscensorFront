import { Component, inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ElevatorService } from '../../services/elevator.service';


@Component({
  selector: 'app-elevator',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.css'
})

export default class ElevatorComponent {
  private elevatorService = inject(ElevatorService);

  elevator: any;


  async getElevator(){
     await this.elevatorService.getElevator().then((res: any)=>{
      console.log(res);
      this.elevator = res.result
     }).catch((error)=>{
      console.log(error);
     })
  }

  async setRequest(floor: any){
    await this.elevatorService.setRequest(floor).then((res:any)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    });
  }
}
