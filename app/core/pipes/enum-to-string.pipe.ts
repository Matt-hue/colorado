//import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { PropertyType } from '../models/property';
import { PropertyDetail } from '../models/room';
import { enumToString } from '../utility/helper.functions';
  
// @Directive({  
//   selector: '[enumToString]'  
// })

@Pipe({name: 'enumToString', standalone: true})

export class EnumToStringPipe implements PipeTransform {

  transform(enumValue: number, enumType: string): string {
    return enumToString(enumType, enumValue);
  }

}

