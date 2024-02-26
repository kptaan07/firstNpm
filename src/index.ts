export class Log{
    static success(msg: string){
        alert("Done: "+msg);
        console.log(`%c ${msg}`, 'color:green');    
    }
    static danger(msg: string) {
        alert("Error: " + msg); 
        console.log(`%c ${msg}`,'color:red;font-weight:bold');      
    }
    static info(msg: string){
        console.log(`%c ${msg}`,'color:black; backgroud:yellow')
    }
}