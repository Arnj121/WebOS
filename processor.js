const path = require('path')
const fs= require('fs')
const db = require('./db')

const getApps =(req,res)=>{
    fs.readFile(path.join(__dirname,'JSON','apps.json'),'UTF-8',(err,data)=>{
        res.send(data)
    })
}
const getApp =(req,res)=>{
    let appid = req.query.appid
    fs.readFile(path.join(__dirname,'JSON','apps.json'),'UTF-8',(err,data)=>{
        data = JSON.parse(data)
        res.send(data[appid])
    })
}
const signup =(req,res)=>{
    let email = req.body.email
    let password = req.body.password
    let uniqueId = req.body.uniqueId
    let username = req.body.username
    console.log(uniqueId,email)
    db.getDb().collection('users').findOne({'email':email},(err,result)=>{
        if(result && result.length){
            res.send({'status':0})
        }
        else {
            db.getDb().collection('users').insertOne({
                'email': email,
                'password': password,
                'username': username,
                'uniqueId':uniqueId,
                'main': {
                    'appdata': {},
                    'apps': {},
                    'executors': {}
                },
                'driveA':{}
            })
            fs.mkdir(path.join(__dirname,'static','userfiles','users',uniqueId),(err)=>{console.log(err)})
            res.send({'status': 1})
        }
    })
}

const login = (req,res)=>{
    let email = req.body.email
    let password = req.body.password
    db.getDb().collection('users').findOne({'email':email,'password':password},(err,result)=>{
        if(result) {
            let username = result.username
            let uniqueId = result.uniqueId
            res.send({'status':1,'username':username,'uniqueId':uniqueId})
        }else {
            res.send({'status':0})
        }
    })
}

//TODO
const savedata = (req,res)=>{
    let email = req.body.email
    let data = req.body.data
    let appid=req.body.appId
    let string='main.appdata.'+appid
    let set={}
    set[string]=data
    db.getDb().collection('users').findOneAndUpdate({'email':email},{$set:set})
    res.send({'status':1})
}
//TODO
const loaddata = (req,res)=>{
    let email = req.query.email
    let appid=req.query.appId
    db.getDb().collection('users').findOne({'email':email},(err,result)=>{
        let data = result.main.appdata[appid]
        res.send({'status':1,'data':data})
    })
}
//TODO
const initapp =(req,res)=>{
    let email = req.body.email
    let executors = req.body.executors
    let apps = req.body.apps
    let appdata ={}
    for(let i of Object.keys(apps)){
        appdata[apps[i].appId] = {}
    }
    db.getDb().collection('users').findOneAndUpdate({'email':email},{$set:{'main.appdata':appdata,'main.executors':executors,'main.apps':apps}})
    res.send({'status':1})
}
//TODO
const saveapp =(req,res)=>{
    let email = req.body.email
    let executors = req.body.executors
    let app = req.body.app
    let appdata = 'main.appdata.'+app.appId
    let s={}
    s[appdata] = {}
    s['main.executors'] = executors
    s['main.apps.'+app.appId] = app
    db.getDb().collection('users').findOneAndUpdate({'email':email},{$set:s})
    res.send({'status':1})
}
//TODO
const loadapps=(req,res)=>{
    let email = req.query.email
    db.getDb().collection('users').findOne({'email':email},(err,result)=>{
        res.send({'status':1,'data':result.main.apps})
    })
}
//TODO
const saveapps=(req,res)=>{
    let email =req.body.email
    let appid = req.body.appid
    let executors = req.body.executors
    db.getDb().collection('users').findOne({'email':email},(err,result)=>{
        let appdata = result.main.appdata
        delete appdata[appid]
        let apps = result.main.apps
        delete apps[appid]
        db.getDb().collection('users').findOneAndUpdate({'email':email},{$set:{'main.appdata':appdata,'main.apps':apps,'main.executors':executors}})
        res.send({'status':1})
    })
}

const root = (req,res)=>{
    let email = req.query.email
    fs.readdir(`./static/userfiles/users/${email}`,(err,result)=>{
        res.send(JSON.stringify({'status':1,'result':result}))
    })
}
const structure = (req,res)=>{
    let uniqueId = req.query.uniqueId
    db.getDb().collection('users').findOne({'uniqueId':uniqueId},(err,result)=>{
        res.send(JSON.stringify({'status':1,'structure':result['driveA']}))
    })
}
//TODO
const getdetails = (req,res)=>{
    let name = req.query.name
    let email = req.query.email
    fs.stat(`./static/userfiles/users/${email}/${name}`,(err,result)=>{
        res.send(JSON.stringify({'status':1,'result':result}))
    })

}

const deleteFile = (req,res)=>{
    let name = req.query.name
    let email = req.query.email
    fs.unlink(`./static/userfiles/users/${email}/${name}`,(err)=>{
        if(err)
            res.send(JSON.stringify({'status':0}))
        else
            res.send(JSON.stringify({'status':1}))
    })
}
const createFolder = (req,res)=>{
    let name = req.query.name
    let path = req.query.path
    let uniqueId = req.query.uniqueId
    console.log(name,uniqueId,path,163)
    fs.mkdir(`./static/userfiles/${req.query.userguest}/${uniqueId}/${path}/${name}`,(err)=>{
        if(err)
            res.send(JSON.stringify({'status':0}))
        else
            res.send(JSON.stringify({'status':1}))
    })
}
const createFile = (req,res)=>{
    let name = req.body.name
    let uniqueId = req.body.uniqueId
    let path = req.body.path
    fs.open(`./static/userfiles/${req.query.userguest}/${uniqueId}/${path}/${name}`,'w',(err)=>{
        if(err)
            res.send(JSON.stringify({'status':0}))
        else
            res.send(JSON.stringify({'status':1}))
    })
}
const getChildren = (req,res)=>{
    let path = req.query.path
    console.log(req.query)
    let userguest = req.query.userguest
    let uniqueId = req.query.uniqueId
    let p=`./static/userfiles/${userguest}/${uniqueId}/${path}`
    console.log(p,188)
    fs.readdir(p,{ withFileTypes: true },async (err,result)=> {
            console.log(result,190)
            if (err) {
                res.send(JSON.stringify({'status': 0}))
            } else {
                let t = []
                result.forEach(e=>{
                    let s = {},k=fs.statSync(`./static/userfiles/${req.query.userguest}/${uniqueId}/${path}/${e.name}`)
                    s['name'] = e.name
                    s['size'] = k.size
                    s['fileType'] = e.isFile()?'file':'Dir'
                    s['time'] = k.birthtime
                    t.push(s)
                })
                res.send(JSON.stringify({'status': 1, 'result': t}))
            }
        }
    )
}

const rename = (req,res)=>{
    let uniqueId = req.query.uniqueId;
    let src = req.query.src;
    let des = req.query.des;
    fs.rename(path.join(`./static/userfiles/${req.query.userguest}/${uniqueId}/${src}`),
        path.join(`./static/userfiles/${req.query.userguest}/${uniqueId}/${des}`),(err)=>{
        if (err)
            res.send(JSON.stringify({'status': 0}))
        else
            res.send(JSON.stringify({'status':1}))
        }
    )
}

const initDir =(req,res)=>{
    let id = req.query.id
    fs.mkdir(`./static/userfiles/guest/${id}`,(err)=>{
        if(err) console.log(err)
    })
    fs.mkdir(`./static/userfiles/guest/${id}/home`,(err)=>{
        if(err) console.log(err)
    })
    fs.mkdir(`./static/userfiles/guest/${id}/home/documents`,(err)=>{
        if(err) console.log(err)
    })
    fs.mkdir(`./static/userfiles/guest/${id}/home/downloads`,(err)=>{
        if(err) console.log(err)
    })
    fs.mkdir(`./static/userfiles/guest/${id}/home/bin`,(err)=>{
        if(err) console.log(err)
    })

}

const pkgupdate = (req,res)=>{
    let id = req.query.id
    let type = req.query.type
    fs.readFile('./JSON/pkgs.json','UTF-8',(err,data)=>{
        if (err){
            res.send({'status':0,'result':'unable to get package details'})
        }
        else{
            fs.cp('./JSON/pkgs.json',`./static/userfiles/${type}/${id}/home/bin/pkgs.json`,(err)=>{
                if(err) console.log(err);
            })
            res.send({'status':1,'result':data})
        }
    })
}

const getFile = (req,res)=>{
    let id = req.query.id;
    let type = req.query.type;
    let path = req.query.path;
    fs.readFile(`./static/userfiles/${type}/${id}/${path}`,'UTF-8',(err,data)=>{
        if (err) console.log(err);
        else{
            return {'status':1,'data':data}
        }
    })

}

const installPkg = (req,res)=>{
    let id =  req.query.id;
    let type = req.query.type
    let pkgname = req.query.pkgname
    fs.cp(`./static/apps/custom/ter243min/${pkgname}`,`./static/userfiles/${type}/${id}/home/bin/${pkgname}`,(err)=>{
        if(err)console.log(err)
    })
    res.send({'status':1,'msg':'package installed successfully'})
}
module.exports={rename,createFile,getChildren,deleteFile,createFolder,getdetails,root,structure,getApps,getApp,signup,
    login,savedata,loaddata,initapp,saveapp,loadapps,saveapps,initDir,pkgupdate,installPkg,getFile}

