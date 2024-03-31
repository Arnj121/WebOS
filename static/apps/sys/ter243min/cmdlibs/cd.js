async function cd(options,aargs) {
    if (aargs.length != 1)
        return {status: 0, msg: "Expected one argument. Instead got " + aargs.length}
    else if (cmdline.session.curchild.indexOf(aargs[0]) != -1) {
        if (aargs[0] == '..') {
            //TODO
        } else {
            cmdline.session.cwd += '/' + aargs[0]
            let te = await filemanager.getChildren(cmdline.session.cwd)
            cmdline.session['dirdata'] = await te.result
            console.log(await te.result)
            let t = []
            for (let i = 0; i < te.length; i++) {
                t.push(te[i].name)
            }
            cmdline.session.curchild = t
            return {status: 1, msg: ''}
        }
    } else {
        let html = document.createElement('label')
        html.style.color = '#B0BEC5'
        html.innerText = 'No such directory ' + aargs + ' exists'
        return {'status': 0, msg: html.outerHTML}
    }
}