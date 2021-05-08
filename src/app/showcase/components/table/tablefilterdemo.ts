import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { MenuItem } from 'src/app/components/api/menuitem';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';
import { DialogService } from 'src/app/components/dynamicdialog/dialogservice';
import { MessageService } from 'src/app/components/api/messageservice';
import { DynamicDialogRef } from 'src/app/components/dynamicdialog/dynamicdialog-ref';
import { ProductListDemo } from '../dynamicdialog/productlistdemo';
import { Product } from '../../domain/product';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'src/app/components/overlaypanel/overlaypanel';
import { ButtonModule } from 'src/app/components/button/button';
import { TabViewModule } from 'src/app/components/tabview/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { ToastModule } from 'src/app/components/toast/toast';
import { CardModule } from 'src/app/components/card/card';
import { SharedModule } from 'src/app/components/api/shared';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb';

@NgModule({  
    imports: [
		CommonModule,
		SharedModule,
        OverlayPanelModule,
        ButtonModule,
        TableModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule,
		ToastModule,
        CardModule,
        TabViewModule,
        BreadcrumbModule
	],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    })

    

@Component({
    templateUrl: './tablefilterdemo.html',
    styleUrls: ['./tabledemo.scss'],
    animations: [
        trigger('overlayMenuAnimation', [
            transition(':enter', [
                style({opacity: 0, transform: 'scaleY(0.8)'}),
                animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
              ]),
              transition(':leave', [
                animate('.1s linear', style({ opacity: 0 }))
              ])
        ])
    ]
   })
export class TableFilterDemo implements OnInit {

    @ViewChild('searchbarMenu') searchbarMenu: ElementRef;

    customers: Customer[];

    representatives: Representative[];

    statuses: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    items: MenuItem[];

    _selectedColumns: any[];

    cols: any[];

    exportColumns: any[];

    displayMaximizable: boolean;

    value18: number = 1;

    value3 = null;

    navigation = 'search';

    selectedCategories: any[] = ['Technology', 'Sports'];

    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    
    breadCrumitems: MenuItem[];

    home: MenuItem;

    constructor(private customerService: CustomerService,public dialogService: DialogService, public messageService: MessageService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach(customer => customer.date = new Date(customer.date));
        });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "Xuxue Feng", image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ];

        this.items = [
            {label: 'Update', icon: 'pi pi-refresh', command: () => {
                // this.update();
            }},
            {label: 'Delete', icon: 'pi pi-times', command: () => {
                // this.delete();
            }},
            {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
            {separator: true},
            {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
        ];

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));

        this.breadCrumitems = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];

        this.home = {icon: 'pi pi-home'};
    }

    clear(table: Table) {
        table.clear();
    }

    exportPdf() {
        import("jspdf").then(jsPDF => {
            import("jspdf-autotable").then(x => {
                const doc = new jsPDF.default(0,0);
                doc.autoTable(this.exportColumns, this.customers);
                doc.save('products.pdf');
            })
        })
    }

    exportExcel() {
        import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.customers);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "products");
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        import("file-saver").then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data: Blob = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    
    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    activeMenuIndex: number;
    toggleMenu(event: Event, index: number) {
        this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
        event.preventDefault();
    }

    onOverlayMenuEnter(event: AnimationEvent) {
        switch(event.toState) {
            case 'visible':
                this.bindOutsideClickListener();
            break;

            case 'void':
                this.unbindOutsideClickListener();
            break;
        }
    }

    outsideClickListener: any;

    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.isOutsideTopbarMenuClicked(event)) {
                    this.activeMenuIndex =  null;
                }
            };

            document.addEventListener('click', this.outsideClickListener);
        }
    }

    

    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }

    isOutsideTopbarMenuClicked(event): boolean {
        return !(this.searchbarMenu.nativeElement.isSameNode(event.target) || this.searchbarMenu.nativeElement.contains(event.target));
    }
    ref: DynamicDialogRef;
    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Choose a Product',
            width: '70%',
            contentStyle: {"max-height": "500px", "overflow": "auto"},
            baseZIndex: 10000
        });

        this.ref.onClose.subscribe((product: Product) =>{
            if (product) {
                this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
            }
        });
    }

    displayBasic: boolean;
    showBasicDialog() {
        this.displayBasic = true;
    }

}