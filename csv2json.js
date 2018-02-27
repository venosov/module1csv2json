const csv=require('csvtojson')
const fs = require('fs')
const path = require('path')

const convertFile = (csvFilePath='./customer-data.csv') => {
    let jsons = []
    csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj)=>{
        jsons.push(jsonObj)
    })
    .on('done',(error)=>{
        fs.writeFileSync(path.join(__dirname, '.', 'customer-data.json'), JSON.stringify(jsons, null, 2))
        console.log('end')
    })
}

convertFile(process.argv[2])