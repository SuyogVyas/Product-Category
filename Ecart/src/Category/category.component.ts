import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'comp',
    templateUrl:'./category.component.html'
})

export class CategoryComponent
{

    selectedValue = 'All';

    @Input()
    allCount:number = 0;
    
    @Input()
    electronicsCount:number = 0;
    
    @Input()
    fashionCount:number = 0;
    
    @Input()
    mobileCount: number = 0;
    
    @Input()
    booksCount: number = 0;

    

    @Output()
    sendSelectedValue:EventEmitter<string> = new EventEmitter<string>();

    getSelectedValue()
    {
        this.sendSelectedValue.emit(this.selectedValue);
    }

}
