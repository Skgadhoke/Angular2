import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
    name: "filter",
    pure: false
})
export class ArrayFilterPipe implements PipeTransform {
 
    transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
        return items.filter(item => {
            for (let field in conditions) {
                if (conditions[field] && item[field].indexOf(conditions[field])) {
                    return false;
                }
            }
            return true;
        });
    }
}