import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, ScrollTopModule],
    template: `
        <p-scrolltop class="absolute z-50" target="window" [threshold]="1000" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }" />
        <div  *ngFor="let item of data; let i = index" class="col-span-12 xs:col-span-6 md:col-span-3">
            <div class="card mb-0 shadow-lg rounded-xl">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ item.label }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">24 new </span>
                <span class="text-muted-color">since last visit</span>
            </div>
        </div>

    `
})
export class StatsWidget {

    data: any[] = [];

    ngOnInit() {
        this.data = [

            { label: '312+', text: 'personal projects', icon: 'pi pi-palette' },
            { label: '17', text: 'commercial projects', icon: 'pi pi-money-bill' },
            { label: '1538', text: 'most likes', icon: 'pi pi-thumbs-up' },
            { label: '6597', text: 'most views', icon: 'pi pi-eye' },

        ]
    }
}
