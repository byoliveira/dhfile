import { Component, Input } from "@angular/core";

@Component({
    selector: 'dh-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    @Input() url='';
    @Input() description='';
}