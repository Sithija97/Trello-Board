const fs = require('fs');

//reading
fs.readFile('./filelocation',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

//reading
fs.writeFile('./filelocation','thing we nedd to write',()=>{
    console.log('file was written');
});

//directories
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
});

//delete
if(fs.existsSync('./file with path')){
    fs.unlink('./file with path', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
 