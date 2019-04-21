import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";

import { HomePage } from "./home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "live"
          },
          {
            path: "live",
            loadChildren: "../tabs/live/live.module#LivePageModule"
          },
          {
            path: "program",
            loadChildren: "../tabs/program/program.module#ProgramPageModule"
          },
          {
            path: "podcast",
            loadChildren: "../tabs/podcast/podcast.module#PodcastPageModule"
          },
          {
            path: "comment",
            loadChildren: "../tabs/comment/comment.module#CommentPageModule"
          }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
