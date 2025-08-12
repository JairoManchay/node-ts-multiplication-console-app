import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base number for multiplication'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit for multiplication table'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'Output directory'
})
.check((argv, options) => {

    if( argv.b < 1) throw 'Error: base must be greater than 0';
    console.log({argv, options});
    return true;
})
.parseSync()


