import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'live', loadChildren: './tabs/live/live.module#LivePageModule' },
  { path: 'program', loadChildren: './tabs/program/program.module#ProgramPageModule' },
  { path: 'podcast', loadChildren: './tabs/podcast/podcast.module#PodcastPageModule' },
  { path: 'comment', loadChildren: './tabs/comment/comment.module#CommentPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
