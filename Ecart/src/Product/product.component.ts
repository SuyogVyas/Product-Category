import { Component } from "@angular/core";

@Component({
    selector:'product-list',
    templateUrl: './product.component.html'
})

export class Products{

    selectedValue = "All";
    

    show:boolean = false;
    show2:boolean = false;

    productsList:any[] = [
        {name:"TV",category:"Electronics",price:23000,description:"Sony TV",quantity:2},
        {name:"AC",category:"Electronics",price:33000,description:"Videocon",quantity:2},

        {name:"Angular Book",category:"Books",price:3300,description:"Complete guide for Angular",quantity:2},
        {name:"OS Book",category:"Books",price:1300,description:"Complete guide for OS",quantity:2},

        {name:"Watch",category:"Fashion",price:10000,description:"Titan",quantity:2},
        {name:"Shoes",category:"Fashion",price:1000,description:"Nike",quantity:2},

        {name:"Samsung",category:"Mobile",price:25000,description:"GalaxyA51",quantity:2},
        {name:"OnePlus",category:"Mobile",price:1000,description:"black colour",quantity:2},


    ];

    getAllCount():number{
        return this.productsList.length;
    }

    getMobileCount():number{
        return this.productsList.filter(e=>e.category=="Mobile").length;
    }

    getFashionCount():number{
        return this.productsList.filter(e=>e.category=="Fashion").length;
    }

    getElectronicsCount():number{
        return this.productsList.filter(e=>e.category=="Electronics").length;
    }

    getBooksCount():number{
        return this.productsList.filter(e=>e.category=="Books").length;
    }

   
    getSelectedValueFromChild(value:string)
    {
        this.selectedValue = value;
    }

    

    showTrue(){
        this.show = true;
        console.log(this.show);
    }

    showFalse()
    {
        this.show = false;
    }

    show2True(){
        this.show2 = true;
            }

    show2False()
    {
        this.show2 = false;
    }
}