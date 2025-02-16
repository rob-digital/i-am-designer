import { Component, effect, inject } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../layout/service/layout.service';

@Component({
    standalone: true,
    selector: 'app-about-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `

            <div  class=" aboutStatement w-full sm:w-11/12 md:w-10/12 lg:w-2/3 justify-items-center sm:items-start mx-auto flex-column sm:flex gap-x-4 mb-14 rounded-xl  dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <span style="font-size: 2rem" class=" mb-10 sm:mb-0 pi pi-user rounded-full shadow-lg outline outline-black/5 dark:outline-white/20 p-5"></span>

                <div>
                    <div class="text-4xl font-medium text-black dark:text-white">Hi! My name is Rafal Michalczyk. </div>
                    <p class="text-gray-500 dark:text-gray-400">
                    <span></span><br>
                    <span class="dark:text-white text-lg">{{ statement }}</span>
                    <br>
                    </p>
                </div>
            </div>
            <div class="flex justify-center mb-28">
                <p-button
                    id="seeMyWork"
                    label="See my work"
                    (click)=seeMyWorkButtonClicked(true)
                    class="principalButton text-4xl p-1" size="large"
                    [rounded]="true"
                    [raised]="true"
                    severity="primary" />

            </div>
            `,
    providers: []
})
export class AboutWidget {
    layoutService = inject(LayoutService);
    goTo: string = 'myWork';
    config: any;
    myBackgroundColour: string = '#1e293b';


    statement: string = `As a graphic designer, my passion for creativity and visual storytelling knows no bounds. Each project is a unique opportunity to transform ideas into compelling visuals that captivate and communicate. The thrill of blending colors, typography, and imagery into a harmonious design is what fuels my enthusiasm every day. I thrive on the challenge of creating designs that not only meet the client's needs but also evoke emotion and inspire action. Seeing my work come to life and resonate with audiences is immensely rewarding, and it drives me to continuously push the boundaries of innovation and artistry.`
    constructor() {
            effect(() => {
                            this.config = this.layoutService.layoutConfig();
                            this.stateChanged(this.config.darkTheme);
                        })
    }


    ngOnInit() {

    }

    stateChanged(bgDark: boolean) {
        this.myBackgroundColour = bgDark ? '#18181b' : '#1e293b'
      }

    seeMyWorkButtonClicked(isClicked: boolean) {
        if (isClicked)  {
            this.layoutService.updateGoToSectionSignal('myWork');
        }

    }



}
