import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { PullItOffManagementState } from './pull-it-off-management.state';

@Injectable({
    providedIn: 'root'
})
export class PullItOffManagementStateContext extends StateContext<PullItOffManagementState> {

    // Constructors
    constructor(protected injector: Injector) {
        super(injector);
    }

    
    // API Methods
    public GetPullItOffById(id: number): void {
        this.Execute({
            Arguments: {
                PullItOffId: id
            },
            Type: 'GetPullItOffById'
        });
    }

    //  Helpers
    protected defaultValue() {
        return { Loading: true } as PullItOffManagementState;
    }
    
    protected loadStateKey(): string {
        return 'main';
    }

    protected loadStateName(): string {
        return 'pull-it-off';
    }
}
