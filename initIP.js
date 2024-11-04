const fs = require('fs')
const dns = require('node:dns')
const os = require('node:os')
require('dotenv').config()
const ip1=process.env.IP
const ip2=process.argv[2]
const newip=process.argv[3]
let files=['static/main/index.html','.env','static/main/script.js','JSON/apps.json','create-app.js']
dns.lookup(os.hostname(),{family:4},(err,addr)=>{
    for(let i=0;i<files.length;i++) {
        fs.readFile(files[i], 'UTF-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                let loc = data.indexOf(ip1)
                while (loc != -1) {
                    data = data.replace(ip1, addr)
                    loc = data.indexOf(ip1)
                    console.log(loc)
                }
                console.log(data)
                fs.writeFile(files[i], data, () => {
                })
            }
        })
    }
})
