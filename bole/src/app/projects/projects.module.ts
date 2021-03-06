import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';
import {ProjectCardComponent} from './project-main/project-card/project-card.component';
import { ProjectPageComponent } from './project-main/project-page/project-page.component';
import { TeamDialogComponent } from './project-main/team-dialog/team-dialog.component';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodeEditorModule } from './code-editor/code-editor.module';
import {KanbanBoardModule} from './kanban-board/kanban-board.module';
import {SocialThreadModule} from '../social-thread/social-thread.module';

@NgModule({
  declarations: [ProjectMainComponent, ProjectCardComponent, ProjectPageComponent, TeamDialogComponent],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        MonacoEditorModule.forRoot(),
        CodeEditorModule,
        KanbanBoardModule,
        SocialThreadModule
    ]
})
export class ProjectsModule { }
