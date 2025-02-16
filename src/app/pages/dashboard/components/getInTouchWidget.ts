import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';

@Component({
    standalone: true,
    selector: 'app-getintouch-widget',
    imports: [CommonModule, ButtonModule, Dialog, InputTextModule, TextareaModule],
    template: `
        <div class="flex justify-center my-28">
                <p-button  (click)="showDialog()" [raised]="true" label="Get in touch" class="principalButton text-4xl p-1" size="large" [rounded]="true" severity="primary" />
        </div>

        <p-dialog id="getInTouch" header="Let's get in touch" [modal]="true" [(visible)]="visible" [style]="{ 'max-width': '25rem' }">
            <span class="p-text-secondary block mb-8">What's on your mind?</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-20">Name</label>
                <input pInputText id="name" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex flex-column items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-20">Email</label>
                <input pInputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex flex-column items-center gap-4 mb-8">
              <label for="email" class="font-semibold w-24">Your message</label>
              <textarea class="inTouchText" rows="5"cols="30" pTextarea ></textarea>
            </div>
            <div class="flex flex-column justify-end gap-2">
                <p-button label="Cancel" severity="secondary" (click)="visible = false" />
                <p-button label="Submit" (click)="visible = false" />
            </div>
        </p-dialog>


        `
})
export class GetInTouchWidget {

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    ngOnInit() {

    }
}
