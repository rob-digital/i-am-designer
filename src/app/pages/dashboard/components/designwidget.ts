import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-design-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `
            <div class=" designWidget text-white sm:w-10/12 items-start mx-3 md:mb-10 my-0 sm:my-3 flex gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div>
                    <p class="text-lg">
                    <span>{{ statement }}</span>
                    <br>
                    </p>
                </div>
            </div>
            `,
    providers: []
})
export class DesignWidget {

    statement: string = `I am committed to continuously enhancing my skills and competencies in mastering various software tools. I regularly engage in online courses and webinars to stay updated with the latest features and techniques in programs like Adobe Creative Suite, Sketch, and Figma. I also dedicate time to practicing new design trends through personal projects, which allows me to experiment and innovate without constraints. By participating in design communities and forums, I gain insights from peers and industry experts, further refining my craft. Additionally, I prioritize feedback from clients and colleagues, using their perspectives to improve my approach and deliver more compelling and effective designs. This proactive and multifaceted approach ensures I remain versatile and proficient in an ever-evolving digital landscape.`

    ngOnInit() {

    }
}
