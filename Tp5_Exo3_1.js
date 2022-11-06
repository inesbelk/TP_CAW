const fs = require('fs');

function nodeGrep(regEx,...Files){
   
    const regex = new RegExp(regEx);
    
    for(f in Files){

        const isDir = fs.statSync(`./${Files[f]}`).isDirectory();
        
        if(!isDir){
            const data = fs.readFileSync(`${Files[f]}`, 'utf8');
            if(regex.test(data)){
                
                return `file name is: ${Files[f]}`;
            }
        }else{
            let recFiles = fs.readdirSync(Files[f]);
            for(file in recFiles){
                recFiles[file] = `./${Files[f]}/${recFiles[file]}`;
            }
            
            return nodeGrep(regEx,...recFiles);
        }
        

    }
    return "NONE";
}
console.log(nodeGrep("my",'fileines.txt','filerania.txt'))