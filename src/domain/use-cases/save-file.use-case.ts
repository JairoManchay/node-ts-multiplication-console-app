import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options{
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase{
    
    execute ({fileContent,destination= 'outputs',fileName='table'}: Options): boolean{
        // Implement the logic to save the file
        try{
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            return true;
        }catch (error) {
            console.error('Error saving file:', error);
            return false;
        }
        
    }

}