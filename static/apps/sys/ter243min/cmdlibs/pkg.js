async function pkg(options, aargs){
    if (aargs[0] == 'update'){
        let pkgs=[]
        let id = user.IsloggedIn()?user.getUniqueId():user.guestId
        let userOrGuest = user.IsloggedIn()?'users':'guest'
        await fetch(`http://localhost:2002/pkgupdate?id=${id}&type=${userOrGuest}`,{method:'GET'})
            .then(res=>res.json())
            .then(res=>{
                pkgs=JSON.parse(res['result'])
                console.log(pkgs)
            })
        cmdline.packagesAvailable=pkgs;
        let html = document.createElement('label')
        html.innerText=Object.keys(pkgs).length+' Package(s) updated successfully!'
        html.style.color='#B0BEC5'
        return {'status':1,msg:html.outerHTML}
    }
    else if(aargs[0] == 'install'){
        if(aargs.length>=2){
            let l=Object.keys(cmdline.packagesAvailable)
            console.log(l,aargs)
            if(l.length>0) {
                await aargs.slice(1,).forEach(e =>{
                    if (l.indexOf(e)!=-1) {
                        let id = user.IsloggedIn() ? user.getUniqueId() : user.guestId
                        let type = user.IsloggedIn() ? 'users' : 'guest'
                        fetch(`http://localhost:2002/installPkg?id=${id}&type=${type}&pkgname=${e}.js`)
                            .then(res => res.json())
                            .then(res => {
                                ter243min_write_output(res['msg'])
                                cmdline.LoadCmdFiles(`${e}`,type,id)
                            })
                    } else {
                        ter243min_write_output('package ' + e + ' not found')
                    }
                })
            }
            else {
                let id = user.IsloggedIn() ? user.getUniqueId() : user.guestId
                let type = user.IsloggedIn() ? 'users' : 'guest'
                let path = '/home/bin/pkgs.json'
                await fetch(`http://localhost:2002/getFile?id=${id}&type=${type}&path=${path}`)
                    .then(res => res.json())
                    .then(res => {
                        cmdline.packagesAvailable = JSON.parse(res['data'])
                    })
                let l=Object.keys(cmdline.packagesAvailable)
                await aargs.slice(1,).forEach(e => {
                    if (l.indexOf(e)!=-1) {
                        let id = user.IsloggedIn() ? user.getUniqueId() : user.guestId
                        let type = user.IsloggedIn() ? user.getUniqueId() : user.guestId
                        fetch(`http://localhost:2002/installPkg?id=${id}&type=${type}&pkgname=${e}.js`)
                            .then(res => res.json())
                            .then(res => {
                                ter243min_write_output(res['msg'])
                                cmdline.LoadCmdFiles(`${e}`,type,id)
                            })
                    } else {
                        ter243min_write_output('package ' + e + ' not found')
                    }
                })
            }
            return {'status':1,msg:''}
        }
        else {
            let html = document.createElement('label')
            html.innerText='Invalid number of arguments passed: '+aargs[0]
            html.style.color='#B0BEC5'
            return {'status':0,msg:html.outerHTML}
        }
    }
    else{
        let html = document.createElement('label')
        html.innerText='Invalid option '+aargs[0]
        html.style.color='#B0BEC5'
        return {'status':0,msg:html.outerHTML}
    }
}