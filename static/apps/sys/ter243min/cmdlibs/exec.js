function exec(options, aargs){
    if (aargs.length ==1) {
        let appId = appmanager.getAppId(aargs[0])
        if (appId != 0) {
            taskmanager.executeApp(appId)
            return {status: 1, msg: ''}
        } else {
            let html = document.createElement('label')
            html.style.color = '#B0BEC5'
            html.innerText = 'App not found!Check if its in the path or cmdline is supported by the app'
            return {'status': 0, msg: html.outerHTML}
        }
    }
    let html = document.createElement('label')
    html.style.color = '#B0BEC5'
    html.innerText = 'exec expected 1 argument. Found '+aargs.length
    return {'status': 0, msg: html.outerHTML}
}