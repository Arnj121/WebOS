function mkdir(options,aargs) {
    for (let i in aargs) {
        filemanager.createFolder(cmdline.getCWD(), aargs[i])
        cmdline.session.curchild.push(aargs[i])
        let s = {}
        s['name'] = aargs[i]
        s['size'] = 'unknown'
        s['fileType'] = 'Dir'
        s['time'] = new Date().toLocaleString()
        cmdline.session.dirdata.push(s)
    }
    let html = document.createElement('label')
    html.style.color = '#B0BEC5'
    html.innerText = 'directory created!'
    return {status: 1, msg: html.outerHTML}
}