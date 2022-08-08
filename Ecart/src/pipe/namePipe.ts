import {Pipe,PipeTransform} from '@angular/core'


@Pipe({
    name:'namePipe'
})
export class NamePipe implements PipeTransform {
    transform(value: any,categories:string):string {
       if(categories=="Electronics")
       return "E-"+value;
       else if(categories == "Mobile")
        {
            return "M-"+value;
        }
        else if(categories == "Books")
        {
            return "B-"+value;
        }
        else{
            return "F-"+value;
        }
    }

}