import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, CommonModule],
    template: ` <div class="layout-sidebar mySidebar" [ngStyle]="{'background-color': myBackgroundColour}">
        <app-menu></app-menu>
    </div>`
})
export class AppSidebar {
    config: any;
    myBackgroundColour: string = '#1e293b';

    constructor(public el: ElementRef, private layoutService: LayoutService) {
          effect(() => {
                                    this.config = this.layoutService.layoutConfig();
                                    this.stateChanged(this.config.darkTheme);
                                })
    }

    stateChanged(bgDark: boolean) {
        this.myBackgroundColour = bgDark ? '#0f0f10' : '#f3f3f3'
    }
}
