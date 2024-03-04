import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule} from '@angular/forms';



const MATIRIAL =[
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatBadgeModule,
  FormsModule,
 


]
@NgModule({
  declarations:[],
    imports:[
        ...MATIRIAL
    ],
    exports:[
        ...MATIRIAL
    ]
})
export class SharedModule { }
