function ls(options,aargs){
    let result = cmdline.session.curchild
    let html = document.createElement('label')
    html.style.color='#B0BEC5'
    result.forEach(e=>{
        let t = document.createElement('label')
        t.innerText = e
        t.style.margin = '0 2px'
        html.append(t)
    })
    return {'status':1,'msg':html.outerHTML,'result':result}
}