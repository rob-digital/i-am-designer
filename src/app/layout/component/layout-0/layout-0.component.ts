import { Component, computed, Input, Renderer2, Signal, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppTopbar } from '../app.topbar';
import { AppSidebar } from '../app.sidebar';
import { AppFooter } from '../app.footer';
import { LayoutService } from '../../service/layout.service';
import { SoftskillsWidget } from '../../../pages/dashboard/components/softskillswidget';
import { AboutWidget } from '../../../pages/dashboard/components/aboutwidget';
import { DesignWidget } from '../../../pages/dashboard/components/designwidget';
import { ExpertiseWidget } from '../../../pages/dashboard/components/expertisewidget';
import { StatsWidget2 } from '../../../pages/dashboard/components/statswidget2';
import { GetInTouchWidget } from '../../../pages/dashboard/components/getInTouchWidget';
import { GalleryWidget } from '../../../pages/dashboard/components/galleryWidget';

@Component({
  selector: 'app-layout-0',
  standalone: true,

  imports: [
    ExpertiseWidget,
    StatsWidget2,
    DesignWidget,
    GetInTouchWidget,
    CommonModule,
    AppTopbar,
    AppSidebar,
    RouterModule,
    SoftskillsWidget,
    AboutWidget,
    GalleryWidget,
    AppFooter],
  templateUrl: './layout-0.component.html',
  styleUrl: './layout-0.component.scss'
})
export class Layout0Component {
overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    @ViewChild(AppSidebar) appSidebar!: AppSidebar;

    @ViewChild(AppTopbar) appTopBar!: AppTopbar;

    goToSection: string = '';

    myBackgroundColour: string = '#fff';

    config: any;

    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router,

    ) {

        effect(() => {
            this.goToSection = this.layoutService.sectionToGoTo();
            this.scrollTo(this.goToSection);

                this.config = this.layoutService.layoutConfig();
                this.stateChanged(this.config.darkTheme);
        })

        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
                    if (this.isOutsideClicked(event)) {
                        this.hideMenu();
                    }
                });
            }

            if (this.layoutService.layoutState().staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.hideMenu();
        });
    }

    stateChanged(bgDark: boolean) {
        this.myBackgroundColour = bgDark ? '#1e293b' : '#fff'
      }

    scrollTo(target: string) {
        if (typeof document !== 'undefined') {
                document.getElementById(target)?.scrollIntoView({
                    behavior: 'smooth'
                  });
        }
        this.layoutService.updateGoToSectionSignal('')
    }

    isOutsideClicked(event: MouseEvent) {
        const sidebarEl = document.querySelector('.layout-sidebar');
        const topbarEl = document.querySelector('.layout-menu-button');
        const eventTarget = event.target as Node;

        return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
    }

    hideMenu() {
        this.layoutService.layoutState.update((prev) => ({ ...prev, overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    blockBodyScroll(): void {
        if (typeof document !== 'undefined') {
            if (document.body.classList) {
                document.body.classList.add('blocked-scroll');
            } else {
                document.body.className += ' blocked-scroll';
            }
        }
    }

    unblockBodyScroll(): void {
        if (typeof document !== 'undefined') {
            if (document.body.classList) {
                document.body.classList.remove('blocked-scroll');
            } else {
                document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }
    }

    get containerClass() {
        return {
            'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
            'layout-static-inactive': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',
            'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
            'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive
        };
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}
