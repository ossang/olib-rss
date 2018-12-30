import { Component, OnDestroy } from '@angular/core';
import { delay, withLatestFrom, takeWhile } from 'rxjs/operators';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';
import { StateService } from 'src/app/@core/data/state.service';

@Component({
  selector: 'olib-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

  // layout: any = {};
  // sidebar: any = {};

  private alive = true;

  currentTheme: string;

  constructor(
    protected stateService: StateService,
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService
  ) {

    // this.stateService.onLayoutState()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((layout: string) => this.layout = layout);

    // this.stateService.onSidebarState()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((sidebar: string) => {
    //     this.sidebar = sidebar;
    //   });

    const isBp = this.bpService.getByName('is');
    this.menuService.onItemSelect()
      .pipe(
        takeWhile(() => this.alive),
        withLatestFrom(this.themeService.onMediaQueryChange()),
        delay(20),
      )
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });

    // this.themeService.getJsTheme()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(theme => {
    //     this.currentTheme = theme.name;
    // });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
