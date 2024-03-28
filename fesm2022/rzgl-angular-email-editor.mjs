import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { interval } from 'rxjs';
import {filter, take} from 'rxjs/operators';

class EmailEditorService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const scriptUrl = '//editor.unlayer.com/embed.js?2';
const callbacks = [];
let loaded = false;
const isScriptInjected = () => {
    const scripts = document.querySelectorAll('script');
    let injected = false;
    scripts.forEach((script) => {
        if (script.src.includes(scriptUrl)) {
            injected = true;
        }
    });
    return injected;
};
const addCallback = (callback) => {
    callbacks.push(callback);
};
const runCallbacks = () => {
    if (loaded) {
        let callback;
        while ((callback = callbacks.shift())) {
            callback();
        }
    }
};
const loadScript = (callback) => {
    addCallback(callback);
    if (!isScriptInjected()) {
        const embedScript = document.createElement('script');
        embedScript.setAttribute('src', scriptUrl);
        embedScript.onload = () => {
            loaded = true;
            runCallbacks();
        };
        document.head.appendChild(embedScript);
    }
    else {
        runCallbacks();
    }
};

var name = "@rzgl/angular-email-editor";
var version = "3.0.0";
var peerDependencies = {
	"@angular/common": "^16.0.0",
	"@angular/core": "^16.0.0"
};
var pkg = {
	name: name,
	version: version,
	peerDependencies: peerDependencies
};

let lastEditorId = 0;
class EmailEditorComponent {
    editorId;
    options = {};
    projectId;
    tools;
    appearance;
    locale;
    id;
    minHeight = '500px';
    loaded = new EventEmitter();
    ready = new EventEmitter();
    updated = new EventEmitter();
    editor;
    constructor() {
        this.id = this.editorId || `editor-${++lastEditorId}`;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        loadScript(this.loadEditor.bind(this));
    }
    loadEditor() {
        interval(300)
            .pipe(filter(() => !!document.getElementById(this.id)), take(1))
            .subscribe(() => {
            const options = this.options || {};
            if (this.projectId) {
                options.projectId = this.projectId;
            }
            if (this.tools) {
                options.tools = this.tools;
            }
            if (this.appearance) {
                options.appearance = this.appearance;
            }
            if (this.locale) {
                options.locale = this.locale;
            }
            this.editor = unlayer.createEditor({
                ...options,
                id: this.id,
                displayMode: 'email',
                source: {
                    name: pkg.name,
                    version: pkg.version,
                },
            });
            this.loaded.emit({});
            this.editor.addEventListener('editor:ready', () => {
                this.ready.emit({});
            });
            this.editor.addEventListener('design:updated', (data) => {
                this.updated.emit(data);
            });
        });
    }
    loadDesign(data) {
        this.editor.loadDesign(data);
    }
    saveDesign(cb) {
        this.editor.saveDesign(cb);
    }
    exportHtml(cb) {
        this.editor.exportHtml(cb);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: EmailEditorComponent, selector: "email-editor", inputs: { editorId: "editorId", options: "options", projectId: "projectId", tools: "tools", appearance: "appearance", locale: "locale", id: "id", minHeight: "minHeight" }, outputs: { loaded: "loaded", ready: "ready", updated: "updated" }, ngImport: i0, template: "<div [id]=\"id\" class=\"unlayer-editor\" [style.min-height]=\"minHeight\"></div>\r\n", styles: [":host{flex:1;display:flex}.unlayer-editor{flex:1;display:flex}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'email-editor', template: "<div [id]=\"id\" class=\"unlayer-editor\" [style.min-height]=\"minHeight\"></div>\r\n", styles: [":host{flex:1;display:flex}.unlayer-editor{flex:1;display:flex}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { editorId: [{
                type: Input
            }], options: [{
                type: Input
            }], projectId: [{
                type: Input
            }], tools: [{
                type: Input
            }], appearance: [{
                type: Input
            }], locale: [{
                type: Input
            }], id: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], loaded: [{
                type: Output
            }], ready: [{
                type: Output
            }], updated: [{
                type: Output
            }] } });

class EmailEditorModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorModule, declarations: [EmailEditorComponent], exports: [EmailEditorComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EmailEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EmailEditorComponent],
                    imports: [],
                    exports: [EmailEditorComponent]
                }]
        }] });

/*
 * Public API Surface of email-editor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmailEditorComponent, EmailEditorModule, EmailEditorService };
//# sourceMappingURL=rzgl-angular-email-editor.mjs.map
