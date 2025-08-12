import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOption{
    base: number;
    limit: number;
    show: boolean;
    fileName?: string;
    destination?: string;
}

export class ServerApp{
    static run(option: RunOption){
        const {base, limit, show, fileName, destination} = option;

        console.log({base, limit, show, fileName, destination});
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({fileContent: table, 
            fileName,
            destination
        });
        if(show){
            console.log(table);
        }
    }
}