import { OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface UnlayerOptions {
    projectId?: number;
    tools?: object;
    appearance?: object;
    locale?: string;
}
export declare class EmailEditorComponent implements OnInit, AfterViewInit {
    editorId: string;
    options: UnlayerOptions;
    projectId: number;
    tools: object;
    appearance: object;
    locale: string;
    id: string;
    minHeight: string;
    loaded: EventEmitter<any>;
    ready: EventEmitter<any>;
    updated: EventEmitter<any>;
    editor: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected loadEditor(): void;
    loadDesign(data: object): void;
    saveDesign(cb: (data: object) => void): void;
    exportHtml(cb: (data: object) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailEditorComponent, "email-editor", never, { "editorId": { "alias": "editorId"; "required": false; }; "options": { "alias": "options"; "required": false; }; "projectId": { "alias": "projectId"; "required": false; }; "tools": { "alias": "tools"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "id": { "alias": "id"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; }, { "loaded": "loaded"; "ready": "ready"; "updated": "updated"; }, never, never, false, never>;
}
