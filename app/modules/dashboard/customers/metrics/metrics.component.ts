import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {
    KPICards: Array<KPIcards> = [
      {
        id: 1,
        title: 'Orders',
        value: 23
      },
      {
        id: 1,
        title: 'Customers',
        value: 12
      },
      {
        id: 1,
        title: 'Completed Orders',
        value: 5
      },
      {
        id: 1,
        title: 'Revenue',
        value: 825
      }
    ]
    cols! : number;
    gridByBreakpoint = {
      xl: 4,
      lg: 4,
      md: 2,
      sm: 2,
      xs: 1
    }
    constructor( private breakpointObserver: BreakpointObserver) {

      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]).subscribe(result => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
    }
}

export interface KPIcards {
  id?: number;
  title: string;
  value: number;
}