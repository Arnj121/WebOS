const express= require('express')
const path = require('path')
const bodyparser = require('body-parser')
const processor =require('./processor')
const cors = require('cors')
const corsoptions ={
    origin:'*',
    optionsSuccessStatus:200
}
const fiex = express()
fiex.use(cors(corsoptions))
fiex.use(bodyparser.urlencoded({extended:true}))
fiex.use(bodyparser.json())

fiex.get('/initdir',processor.initDir)
fiex.get('/root',processor.root)
fiex.get('/structure',processor.structure)
fiex.get('/getdetails',processor.getdetails)
fiex.delete('/delete',processor.deleteFile)
fiex.post('/createfolder',processor.createFolder)
fiex.put('/rename',processor.rename)
fiex.get('/getchildren',processor.getChildren)
fiex.post('/createfile',processor.createFile)
fiex.get('/pkgupdate',processor.pkgupdate)
fiex.get('/installPkg',processor.installPkg)
fiex.get('/getFile',processor.getFile)

module.exports={fiex}

