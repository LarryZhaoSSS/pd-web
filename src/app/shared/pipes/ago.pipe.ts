import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
  transform(value: any): any {
    if(value) {
      const seconds = Math.floor((+new Date()- +new Date(value))/1000)
      if(seconds < 30) {
        return '刚刚'
      } else {
        return '过去好久啦'
      }
      
    }
  }
}