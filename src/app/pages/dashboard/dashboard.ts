import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { AboutWidget } from './components/aboutwidget';
import { BestSellingWidget } from './components/bestsellingwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, AboutWidget, BestSellingWidget, NotificationsWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-about-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
