import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async() => {
    await main();
})();

async function main(){

    console.log(yarg);
    // si se quiere correr desde consola, se descomenta esta linea de abajo
    //ServerApp.run({base: yarg.b, limit: yarg.l, show: yarg.s, fileName: yarg.n, destination: yarg.d});
    ServerApp.run({
        base: 2,
        limit: 10,
        show: false,
        fileName: 'table-2',
        destination: 'outputs'
    });
}



