function pwd(){
    let html = document.createElement('label')
    html.style.color = '#B0BEC5'
    html.innerText = cmdline.getCWD()
    return {'status': 1, msg: html.outerHTML}
}