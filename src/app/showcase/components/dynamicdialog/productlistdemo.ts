import {Component} from '@angular/core';
import {DynamicDialogRef} from '../../../components/dynamicdialog/dynamicdialog-ref';
import {DynamicDialogConfig} from '../../../components/dynamicdialog/dynamicdialog-config';
import {ProductService} from '../../service/productservice';
import {Product} from '../../domain/product';
import { MenuItem } from 'src/app/components/api/menuitem';

@Component({
    template: `
        <!--p-table [value]="products" [paginator]="true" [rows]="5" [responsive]="true">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Name <p-sortIcon field="vin"></p-sortIcon></th>
                    <th pSortableColumn="year">Image</th>
                    <th pSortableColumn="price">Brand <p-sortIcon field="price"></p-sortIcon></th>
                    <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
                    <th style="width:4em"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-product>
                <tr>
                    <td>{{product.name}}</td>
                    <td><img src="assets/showcase/images/demo/product/{{product.image}}" [alt]="product.image" class="product-image" /></td>
                    <td>{{product.price}}</td>
                    <td><span [class]="'product-badge status-'+product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span></td>
                    <td>
                        <button type="button" pButton icon="pi pi-search" (click)="selectProduct(product)"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table-->
        <p-panel header="Header">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>

        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
        <h5>Advanced</h5>
        <p-panel header="Header"  [toggleable]="true">
            <ng-template pTemplate="icons">
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <button pButton class="p-panel-header-icon p-link" icon="pi pi-cog" (click)="menu.toggle($event)">
                </button>
                <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>
            </ng-template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
    `,
    styles: [`
        .product-image {
            width: 50px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    `]
})
export class ProductListDemo {

    products: Product[];
    items: MenuItem[];
    constructor(private productService: ProductService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(products => this.products = products);
        this.items = [
            {
                label: 'Options',
                items: [{
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        // this.update();
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        // this.delete();
                    }
                }
            ]},
            {
                label: 'Navigate',
                items: [{
                    label: 'Angular Website',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                }
            ]}
        ];
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }
}