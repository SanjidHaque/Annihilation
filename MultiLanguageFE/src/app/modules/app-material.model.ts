import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule
  ],

  entryComponents: [
  ],

  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],

  declarations: []
})
export class AppMaterialModule { }
