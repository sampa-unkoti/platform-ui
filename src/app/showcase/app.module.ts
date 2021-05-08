import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';

import { IconService } from './service/iconservice';
import { CustomerService } from './service/customerservice';
import { PhotoService } from './service/photoservice';
import { VersionService } from './service/versionservice';
import { AppConfigService } from './service/appconfigservice';
import { ProductService } from './service/productservice';

import { AppNewsComponent } from './app.news.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppConfigComponent } from './app.config.component';
import { AppFooterComponent } from './app.footer.component';
import { AppInputStyleSwitchModule } from './app.inputstyleswitch.component';
import { AppDemoActionsModule } from './app.demoactions.component';

import {InputTextModule} from 'primeng/inputtext';
import { BadgeModule } from "primeng/badge";
import {InputNumberModule} from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from "primeng/divider";
import {CheckboxModule} from 'primeng/checkbox';
import { CardModule, } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from '../components/dynamicdialog/dynamicdialog';
import { DialogService } from '../components/dynamicdialog/dialogservice';
import { MessageService } from '../components/api/messageservice';
import { MenuModule } from '../components/menu/menu';
import { PanelModule } from '../components/panel/panel';
import { ProductListDemo } from './components/dynamicdialog/productlistdemo';
import { ProgressBarModule } from '../components/progressbar/progressbar';
import { BreadcrumbModule } from '../components/breadcrumb/breadcrumb';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppNewsComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppConfigComponent,
        AppFooterComponent,
        ProductListDemo
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        ButtonModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        AppInputStyleSwitchModule,
        AppDemoActionsModule,
        InputTextModule,
        BadgeModule,
        InputNumberModule,
        AccordionModule,
        DividerModule,
        CheckboxModule,
        CardModule,
        OverlayPanelModule,
        DynamicDialogModule,
        MenuModule,
        PanelModule,
        CommonModule,
        ProgressBarModule,
        BreadcrumbModule
        
    ],
    entryComponents: [
        ProductListDemo,
        
        
      ],  
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService,CountryService,EventService,NodeService,IconService,CustomerService,PhotoService,VersionService,AppConfigService, ProductService, DialogService,MessageService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule { }
