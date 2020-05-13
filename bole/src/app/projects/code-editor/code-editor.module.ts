import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CodeEditorComponent],
  imports: [
    CommonModule,
    MonacoEditorModule,
    FormsModule
  ]
})
export class CodeEditorModule {

}
