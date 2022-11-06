const fs = require('fs');

function matching(regEx,...Files){
   
    const regex = new RegExp(regEx);
    
    for(txt in Files){

        const isRepertoire = fs.statSync(`./${Files[txt]}`).isDirectory();
        
            const data = fs.readFileSync(`${Files[txt]}`, 'utf8');
            if(regex.test(data)){
                
                return `file name is: ${Files[txt]}`;
            }
            let recFiles = fs.readdirSync(Files[txt]);
            for(file in recFiles){
                recFiles[file] = `./${Files[txt]}/${recFiles[file]}`;
            
            
            return matching(regEx,...recFiles);
        }
        

    }
    return "NONE";
}
console.log(matching("my",'fileines.txt','filerania.txt'))
