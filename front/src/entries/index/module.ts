import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app';
import { HeroListComponent }  from '../../components/heroList/heroList';
import { HeroDetailComponent }  from '../../components/heroDetail/heroDetail';
import { HeroSearchComponent }  from '../../components/heroSearch/heroSearch';
import { DialogService } from '../../service/DialogService';
import { HeroService } from '../../service/HeroService';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, HeroListComponent, HeroDetailComponent, HeroSearchComponent ],
  providers: [DialogService, HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);