import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform <string, number>{
    transform(value: string, metadata: ArgumentMetadata): number {
       if(metadata.type !== 'param' || metadata.data !== 'id'){
        return parseInt(value)
       }

       const val = Number(value)

       if(isNaN(val) || val <= 0){
        throw new BadRequestException(`O valor do parâmetro ${metadata.data} deve ser um número inteiro positivo`)
       }

       return val
    }
}