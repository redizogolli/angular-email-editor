import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { loadScript } from './loadScript';
import pkg from './source.json';
import { filter, interval, take } from 'rxjs';
import * as i0 from "@angular/core";
let lastEditorId = 0;
export class EmailEditorComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2VtYWlsLWVkaXRvci9zcmMvbGliL2VtYWlsLWVkaXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbWFpbC1lZGl0b3Ivc3JjL2xpYi9lbWFpbC1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBaUI5QyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFRckIsTUFBTSxPQUFPLG9CQUFvQjtJQUN0QixRQUFRLENBQVM7SUFDakIsT0FBTyxHQUFtQixFQUFFLENBQUM7SUFDN0IsU0FBUyxDQUFTO0lBQ2xCLEtBQUssQ0FBUztJQUNkLFVBQVUsQ0FBUztJQUNuQixNQUFNLENBQVM7SUFDZixFQUFFLENBQVM7SUFFWCxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBRW5CLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzVCLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNCLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0lBRXRDLE1BQU0sQ0FBTTtJQUVaO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsUUFBUSxLQUFJLENBQUM7SUFFYixlQUFlO1FBQ2IsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVTLFVBQVU7UUFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FDSCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE9BQU8sR0FBbUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFFbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDcEM7WUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzVCO1lBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdEM7WUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxHQUFHLE9BQU87Z0JBQ1YsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztpQkFDckI7YUFDRixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxVQUFVLENBQUMsRUFBMEI7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLFVBQVUsQ0FBQyxFQUEwQjtRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO3VHQXBGVSxvQkFBb0I7MkZBQXBCLG9CQUFvQixtU0NuQ2pDLHVGQUNBOzsyRkRrQ2Esb0JBQW9CO2tCQU5oQyxTQUFTOytCQUVFLGNBQWM7MEVBS2YsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbG9hZFNjcmlwdCB9IGZyb20gJy4vbG9hZFNjcmlwdCc7XHJcbmltcG9ydCBwa2cgZnJvbSAnLi9zb3VyY2UuanNvbic7XHJcbmltcG9ydCB7IGZpbHRlciwgaW50ZXJ2YWwsIHRha2UgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgbW9kdWxlIHVubGF5ZXIge1xyXG4gIGZ1bmN0aW9uIGluaXQob2JqZWN0KTtcclxuICBmdW5jdGlvbiBjcmVhdGVFZGl0b3Iob2JqZWN0KTtcclxuICBmdW5jdGlvbiBsb2FkRGVzaWduKG9iamVjdCk7XHJcbiAgZnVuY3Rpb24gc2F2ZURlc2lnbihGdW5jdGlvbik7XHJcbiAgZnVuY3Rpb24gZXhwb3J0SHRtbChGdW5jdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5sYXllck9wdGlvbnMge1xyXG4gIHByb2plY3RJZD86IG51bWJlcjtcclxuICB0b29scz86IG9iamVjdDtcclxuICBhcHBlYXJhbmNlPzogb2JqZWN0O1xyXG4gIGxvY2FsZT86IHN0cmluZztcclxufVxyXG5cclxubGV0IGxhc3RFZGl0b3JJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdlbWFpbC1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VtYWlsLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgZWRpdG9ySWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25zOiBVbmxheWVyT3B0aW9ucyA9IHt9O1xyXG4gIEBJbnB1dCgpIHByb2plY3RJZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRvb2xzOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIG1pbkhlaWdodCA9ICc1MDBweCc7XHJcblxyXG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB1cGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIGVkaXRvcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmVkaXRvcklkIHx8IGBlZGl0b3ItJHsrK2xhc3RFZGl0b3JJZH1gO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBsb2FkU2NyaXB0KHRoaXMubG9hZEVkaXRvci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBsb2FkRWRpdG9yKCkge1xyXG4gICAgaW50ZXJ2YWwoMzAwKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSksXHJcbiAgICAgICAgdGFrZSgxKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IFVubGF5ZXJPcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9qZWN0SWQpIHtcclxuICAgICAgICAgIG9wdGlvbnMucHJvamVjdElkID0gdGhpcy5wcm9qZWN0SWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50b29scykge1xyXG4gICAgICAgICAgb3B0aW9ucy50b29scyA9IHRoaXMudG9vbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcHBlYXJhbmNlKSB7XHJcbiAgICAgICAgICBvcHRpb25zLmFwcGVhcmFuY2UgPSB0aGlzLmFwcGVhcmFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVkaXRvciA9IHVubGF5ZXIuY3JlYXRlRWRpdG9yKHtcclxuICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIGRpc3BsYXlNb2RlOiAnZW1haWwnLFxyXG4gICAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBwa2cudmVyc2lvbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQoe30pO1xyXG5cclxuICAgICAgICB0aGlzLmVkaXRvci5hZGRFdmVudExpc3RlbmVyKCdlZGl0b3I6cmVhZHknLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlYWR5LmVtaXQoe30pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVkaXRvci5hZGRFdmVudExpc3RlbmVyKCdkZXNpZ246dXBkYXRlZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZWQuZW1pdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZERlc2lnbihkYXRhOiBvYmplY3QpIHtcclxuICAgIHRoaXMuZWRpdG9yLmxvYWREZXNpZ24oZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2F2ZURlc2lnbihjYjogKGRhdGE6IG9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5lZGl0b3Iuc2F2ZURlc2lnbihjYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhwb3J0SHRtbChjYjogKGRhdGE6IG9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5lZGl0b3IuZXhwb3J0SHRtbChjYik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW2lkXT1cImlkXCIgY2xhc3M9XCJ1bmxheWVyLWVkaXRvclwiIFtzdHlsZS5taW4taGVpZ2h0XT1cIm1pbkhlaWdodFwiPjwvZGl2PlxyXG4iXX0=