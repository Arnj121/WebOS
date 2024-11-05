function pkill(options,aargs){
    if(aargs.length==1){
        let appId = appmanager.getAppId(aargs[0])
        if(appId!=0){
            taskmanager.KillApp(appId)
            let html = document.createElement('label')
            html.style.color = '#B0BEC5'
            html.innerText = aargs[0] + ' process killed!'
            return {'status': 1, msg: html.outerHTML}
        }
        else{
            let html = document.createElement('label')
            html.style.color = '#B0BEC5'
            html.innerText = 'app '+ aargs[0] + ' not found'
            return {'status': 1, msg: html.outerHTML}
        }
    }
    let html = document.createElement('label')
    html.style.color = '#B0BEC5'
    html.innerText = 'pkill expected 1 argument. found '+aargs.length
    return {'status': 0, msg: html.outerHTML}
}