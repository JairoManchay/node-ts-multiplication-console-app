import { yarg } from "./config/plugins/args.plugin";

(async() => {
    await main();
})();

async function main(){
    
    let outPutMessage = '';
    const base = yarg.b;
    const limit = yarg.l;
    const headerMessage = `
    ==================================================
                    Tabla del ${base}
    ==================================================\n`;

    for(let i=1; i<=limit; i++){
        outPutMessage += `${base} x ${i} = ${base * i}\n`;
    }

    outPutMessage = headerMessage + outPutMessage;

    if(yarg.s){
        console.log(outPutMessage);
    }else{
        console.log("Archivo creado!!");
    }
    
}



