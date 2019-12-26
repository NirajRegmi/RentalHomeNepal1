import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../home/home.module' ).then( m => m.homePageModule )
          }
        ]
      },
      {
        path: 'bookmark',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../bookmark/bookmark.module' ).then( m => m.bookmarkPageModule )
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../message/message.module' ).then( m => m.messagePageModule )
          }
        ]
      },
      {
        path: 'addrent',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../addrent/addrent.module' ).then( m => m.AddrentPageModule )
          }
        ]
      },
      {
        path: 'you',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../you/you.module' ).then( m => m.YouPageModule )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class TabsPageRoutingModule { }
