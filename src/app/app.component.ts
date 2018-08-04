import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import {ROUTES} from "./app-routing.module";
import {NavigationItem} from './shared/layouts/main-layout';
import {Subscription} from "rxjs/Subscription";
import { filter } from 'rxjs/operators';
//import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuItems: NavigationItem[];
  private routerSub: Subscription;
  constructor(public electronService: ElectronService,
    private translate: TranslateService,private router: Router) {
      this.menuItems = ROUTES.map((route) => {
        return {
            name: route.component && route.data.title,
            route: route.path
        };
    }).slice(0, ROUTES.length - 1);
    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  
  ngOnInit() {
    // this will always scroll to the top when routing to another page
    // this.routerSub = this.router.events.pipe(
    //     filter(event => event instanceof NavigationEnd)
    //     .subscribe((event) => {
    //         window.scrollTo(0, 0);
    //     }))
        this.routerSub = this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
      ).subscribe((event) => {
        window.scrollTo(0, 0);
      });
}

ngOnDestroy() {
    this.routerSub.unsubscribe();
}
}
