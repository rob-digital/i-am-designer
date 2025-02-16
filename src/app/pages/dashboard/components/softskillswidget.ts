import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
    standalone: true,
    selector: 'app-softskills-widget',
    imports: [CarouselModule],
    template: `
    <div
     class="softSkills relative py-20">
        <div class="mb-4 text-6xl text-white text-center italic">I am</div>
        <p-carousel [value]="skills" [numVisible]="3" [numScroll]="3" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
            <ng-template let-skill #item>
                <div class=" dark:border-surface-700 rounded m-2 p-4">
                    <div class="mb-4 text-4xl text-center text-white italic">{{ skill }}</div>
                </div>
            </ng-template>
        </p-carousel>
    </div>
`,
    providers: []
})
export class SoftskillsWidget {

    responsiveOptions: any[] | undefined;

    skills: string[] = [ 'creative', 'efficient','friendly', 'enthusiastic', 'effective', 'ambitious', 'hardworking', 'communicative', 'a team player']

    constructor() {}


    ngOnInit() {
        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }


}
