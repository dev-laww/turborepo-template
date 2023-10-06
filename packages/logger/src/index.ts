import pino, { Logger } from 'pino';
import pretty from 'pino-pretty';


const environment = new Map<string, string>(Object.entries({
    test: "silent",
    development: "debug",
    preview: "info",
    production: "error"
}))

const stream = pretty({
    colorize: true,
    ignore: "hostname,pid",
    translateTime: "SYS:standard"
})

export const logger = pino({
    name: "App Logger",
    level: environment.get(process.env.NODE_ENV ?? "development"),
}, stream);

interface LoggerArgs {
    name: string;
    class?: string;
    module?: string;
    function?: string;
}

export const getLogger = (args: LoggerArgs): Logger => logger.child(args);

