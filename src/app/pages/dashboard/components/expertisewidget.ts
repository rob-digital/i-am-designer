import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';

import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../layout/service/layout.service';

@Component({
    standalone: true,
    selector: 'app-expertise-widget',
    imports: [ChartModule, CommonModule],
    template: `
    <div id="skills" class="pt-20">
        <div class="card rounded-xl !bg-transparent">
            <div class="font-semibold text-4xl mb-4">Software expertise</div>
            <div *ngFor="let item of skillsLevel; let i = index">
                <span>{{  item }}</span><br>
            </div>
            <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-80" />
        </div>
    </div>

    `
})
export class ExpertiseWidget {
    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    skillsLevel: string[] = [];

    constructor(public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.skillsLevel = ['1 - Beginner', '2 - Intermediate', '3 - Proficient', '4 - Advanced', '5 - Expert']
    }

    initChart() {
        if (typeof document !== 'undefined') {


        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartData = {
            labels: ['Adobe Photoshop', 'Adobe After Effect', 'Adobe Illustrator ', 'Gimp'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Skill level',
                    backgroundColor: '#B22384',  // apply my own colour
                    data: [2, 3, 5, 4],
                    barThickness: 32,
                    borderRadius: {
                                topLeft: 10,
                                topRight: 10,
                                bottomLeft: 0,
                                bottomRight: 0
                            },
                },
                // {
                //     type: 'bar',
                //     label: 'Advertising',
                //     backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                //     data: [2100, 8400, 2400, 7500],
                //     barThickness: 32
                // },
                // {
                //     type: 'bar',
                //     label: 'Affiliate',
                //     backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                //     data: [4100, 5200, 3400, 7400],
                //     borderRadius: {
                //         topLeft: 8,
                //         topRight: 8,
                //         bottomLeft: 0,
                //         bottomRight: 0
                //     },
                //     borderSkipped: false,
                //     barThickness: 32
                // }
            ]

        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: borderColor,
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };
    }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
