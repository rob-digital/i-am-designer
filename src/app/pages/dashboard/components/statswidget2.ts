import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget2',
    imports: [CommonModule],
    template: `

        <div *ngFor="let item of data; let i = index"  class="w-full myStats2 col-span-12 xs:col-span-6 md:col-span-3">
            <div class="mx-3 my-3 px-8 flex max-w-sm items-start py-28 justify-center gap-x-4 gap-y-4 rounded-2xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <i [class]="item.icon" style="font-size: 2rem"></i>
                <div>
                    <div class="text-5xl font-medium text-black dark:text-white">{{ item.label }}</div>
                    <p class="text-gray-500 dark:text-gray-400">{{ item.text }}</p>
                </div>
            </div>
        </div>


        `
})
export class StatsWidget2 {

    data: any[] = [];

    ngOnInit() {
        this.data = [

            { label: '312+', text: 'personal projects', icon: 'pi pi-palette' },
            { label: '18', text: 'commercial projects', icon: 'pi pi-money-bill' },
            { label: '1538', text: 'most likes', icon: 'pi pi-thumbs-up' },
            { label: '6597', text: 'most views', icon: 'pi pi-eye' },

        ]
    }
}
