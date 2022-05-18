declare module "*.json" {
    const value: any;
    export default value;
}

declare var $ENV: Env;

interface Env {
  GPT3_API_KEY: string;
}
