import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './layouts/stack.component';
import { BoxComponent } from './layouts/box.component';
import { CenterComponent } from './layouts/center.component';
import { ClusterComponent } from './layouts/cluster.component';
import { SidebarComponent } from './layouts/sidebar.component';
import { SwitcherComponent } from './layouts/switcher.component';
import { CoverComponent } from './layouts/cover.component';
import { GridComponent } from './layouts/grid.component';
import { FrameComponent } from './layouts/frame.component';
import { ReelComponent } from './layouts/reel.component';
import { ImposterComponent } from './layouts/imposter.component';



@NgModule({
  declarations: [
    StackComponent,
    BoxComponent,
    CenterComponent,
    ClusterComponent,
    SidebarComponent,
    SwitcherComponent,
    CoverComponent,
    GridComponent,
    FrameComponent,
    ReelComponent,
    ImposterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StackComponent,
    BoxComponent,
    CenterComponent,
    ClusterComponent,
    SidebarComponent,
    SwitcherComponent,
    CoverComponent,
    GridComponent,
    FrameComponent,
    ReelComponent,
    ImposterComponent
  ]
})
export class LayoutModule { }
