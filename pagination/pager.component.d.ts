import { ElementRef, OnInit, Renderer, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PageChangedEvent } from './pagination.component';
import { PaginationConfig } from './pagination.config';
import * as ɵngcc0 from '@angular/core';
export declare const PAGER_CONTROL_VALUE_ACCESSOR: any;
export declare class PagerComponent implements ControlValueAccessor, OnInit {
    config: any;
    /** if `true` aligns each link to the sides of pager */
    align: boolean;
    /** limit number for page links in pager */
    maxSize: number;
    /** if false first and last buttons will be hidden */
    boundaryLinks: boolean;
    /** if false previous and next buttons will be hidden */
    directionLinks: boolean;
    /** first button text */
    firstText: string;
    /** previous button text */
    previousText: string;
    /** next button text */
    nextText: string;
    /** last button text */
    lastText: string;
    /** if true current page will in the middle of pages list */
    rotate: boolean;
    /** add class to <li> */
    pageBtnClass: string;
    /** if true pagination component will be disabled */
    disabled: boolean;
    /** fired when total pages count changes, $event:number equals to total pages count */
    numPages: EventEmitter<number>;
    /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
    pageChanged: EventEmitter<PageChangedEvent>;
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    itemsPerPage: number;
    /** total number of items in all pages */
    totalItems: number;
    totalPages: number;
    page: number;
    onChange: any;
    onTouched: any;
    renderer: Renderer;
    elementRef: ElementRef;
    classMap: string;
    pages: any[];
    protected _itemsPerPage: number;
    protected _totalItems: number;
    protected _totalPages: number;
    protected inited: boolean;
    protected _page: number;
    constructor(renderer: Renderer, elementRef: ElementRef, paginationConfig: PaginationConfig);
    configureOptions(config: any): void;
    ngOnInit(): void;
    writeValue(value: number): void;
    getText(key: string): string;
    noPrevious(): boolean;
    noNext(): boolean;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    selectPage(page: number, event?: Event): void;
    protected makePage(num: number, text: string, active: boolean): {
        number: number;
        text: string;
        active: boolean;
    };
    protected getPages(currentPage: number, totalPages: number): any[];
    protected calculateTotalPages(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PagerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PagerComponent, "pager", never, { "itemsPerPage": "itemsPerPage"; "totalItems": "totalItems"; "maxSize": "maxSize"; "rotate": "rotate"; "boundaryLinks": "boundaryLinks"; "directionLinks": "directionLinks"; "pageBtnClass": "pageBtnClass"; "align": "align"; "firstText": "firstText"; "previousText": "previousText"; "nextText": "nextText"; "lastText": "lastText"; "disabled": "disabled"; }, { "numPages": "numPages"; "pageChanged": "pageChanged"; }, never, never>;
}

//# sourceMappingURL=pager.component.d.ts.map