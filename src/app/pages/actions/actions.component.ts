import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActionResponse } from 'src/app/shared/interfaces/action/action-interface';
import { ActionService } from 'src/app/shared/services/action/action.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
userAction: Array<IActionResponse>=[];
constructor(
  private actionService:ActionService,
  private activatedRoute: ActivatedRoute,
 
){}
ngOnInit(): void {

  this.getAction()
}
getAction():void{
  this.actionService.getAll().subscribe(data=>{
    this.userAction=data;
  })
}
}
