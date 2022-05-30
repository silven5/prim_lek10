import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(array: any, start?: any, end?: any): any {
    let result = array;
    if (start !== undefined) {
      if (end !== undefined) {
        //Отримуємо потрібну частину масиву
        result = array.slice(start, end);
      }
      else {
        //Отримуємо потрібну частину масиву
        result = array.slice(start, result.length);
      }
    }
    //Поєднуємо масив у рядок
    return result.join(", ");
  }
}


