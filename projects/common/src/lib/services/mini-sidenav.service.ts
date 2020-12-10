import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MiniSideNavService {

  public SideNavToggleChanged: Subject<boolean>;
  public SideNavToggleVal: boolean;

  constructor() {
    this.SideNavToggleChanged = new Subject();
    // this.SideNavToggleVal = false;
  }

  public SideNavToggle(): void {
    const toggle: boolean = this.SideNavToggleVal = !this.SideNavToggleVal;
    this.SideNavToggleChanged.next(toggle);
  }
}
