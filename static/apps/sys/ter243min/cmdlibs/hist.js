function hist(options,aargs){
    let history = cmdline.history.slice(0,-1)
    let html = document.createElement('label')
    html.style.display='flex'
    html.style.flexDirection='column'
    html.style.color='#B0BEC5'
    history.forEach(e=>{
        let t = document.createElement('label')
        t.innerText = e
        t.style.margin = '0 2px'
        html.append(t)
    })
    return {'status':1,'msg':html.outerHTML,'result':history}
}