export interface  CreateTableUseCase{
    execute: (options: CreateTableOptsions) => string;
}


export interface CreateTableOptsions{
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase{

    constructor(
        /*
            DI - Dependency Injection
        */
    ){}

    execute({base, limit=10}: CreateTableOptsions): string {
        let outPutMessage = '';
        for(let i=1; i<=limit; i++){
            outPutMessage += `${base} x ${i} = ${base * i}\n`;
        }

        return outPutMessage;
    }
}