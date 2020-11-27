const fs = require('fs');
const express = require('express');

let app = express();


async function print(path) {
    const dir = await fs.promises.opendir(path);
    let data=`<ul>`;
    for await (const dirent of dir) {
        if(dirent.isFile()){
            let color='black';
            let fileExt=dirent.name.split('.').pop();
            switch (fileExt) {
                case 'txt':
                case 'doc':
                case 'docx':
                            color='blue';
                            break;
                case 'xlsx':
                case 'xlsm':
                case 'cvc':
                            color='green';
                            break;
                case 'ppt':
                            color='orange';
                            break;
                case 'pdf':
                            color='red';
                            break;
                case 'mp4':
                            color='#ce704ed1';
                            break;
                case 'mp3':
                case 'wav':
                            color='yellow';
                            break;
                case 'jpg':
                case 'jpeg':
                case 'png':
                            color='brown';
                            break;
            }
            data += `<li style="color:${color}">${dirent.name}</li>`
        }else{
            data += `<li style="color:gray">${dirent.name}</li>`
        }
    }
    data += `</ul>`
    app.get('/getDirInfo',(req,res)=>{
        res.send(`
            <p>
                <span>Note: </span>
                <span style="color:gray">Folder</span>&nbsp;&nbsp;
                <span style="color:blue">Text</span>&nbsp;&nbsp;
                <span style="color:green">Excel</span>&nbsp;&nbsp;
                <span style="color:orange">PPT</span>&nbsp;&nbsp;
                <span style="color:red">PDF</span>&nbsp;&nbsp;
                <span style="color:brown">Images</span>&nbsp;&nbsp;
                <span style="color:#ce704ed1">Videos</span>&nbsp;&nbsp;
                <span style="color:#ff00bfdb">Musics</span>
            </p>
            <br>
            ${data}
        `);
    });
}


print('D:').catch(console.error);

app.listen(3000);