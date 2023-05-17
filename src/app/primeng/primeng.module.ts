import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    ScrollPanelModule,
    PaginatorModule,
    DropdownModule,
    SliderModule,
    PanelModule,
    ImageModule,
    DataViewModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class PrimengModule { }



