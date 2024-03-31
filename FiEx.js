const express= require('express')
const path = require('path')
const bodyparser = require('body-parser')
const processor =require('./processor')
const cors = require('cors')
const corsoptions ={
    origin:'*',
    optionsSuccessStatus:200
}
const app = express()
app.use(cors(corsoptions))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/initdir',processor.initDir)
app.get('/root',processor.root)
app.get('/structure',processor.structure)
app.get('/getdetails',processor.getdetails)
app.delete('/delete',processor.deleteFile)
app.post('/createfolder',processor.createFolder)
app.put('/rename',processor.rename)
app.get('/getchildren',processor.getChildren)
app.post('/createfile',processor.createFile)
app.get('/pkgupdate',processor.pkgupdate)
app.get('/installPkg',processor.installPkg)
app.get('/getFile',processor.getFile)
app.listen(2002,()=>{
    console.log('FiEx live on 2002')
})


