//Add json-typings.d.ts under src/app 
declare module "*.json" {
    const value: any;
    export default value;
}