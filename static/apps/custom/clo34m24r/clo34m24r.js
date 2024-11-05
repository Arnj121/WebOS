var clo34m24r_data

function clo34m24r_loadLogin() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4){
            document.getElementById('clo34m24r-main-page').innerHTML=xhr.response
            let script,style
            script=document.createElement('script')
            style=document.createElement('link')
            script.src='http://localhost:4000/resource/login/clo34m24r_login.js'
            style.href='http://localhost:4000/resource/login/clo34m24r_login.css'
            style.rel='stylesheet';style.type='text/css'
            style.id='clo34m24r-app-css';script.id='clo34m24r-app-js'
            document.getElementById('clo34m24r').append(style,script)
        }
    }
    xhr.open('GET','http://localhost:4000/loginpage')
    xhr.send()
}

function clo34m24r_loadData() {
    if (datamanager.hasreadAccess('clo34m24r') && datamanager.haswriteAccess('clo34m24r')) {
        console.log(datamanager.hasreadAccess('clo34m24r') , datamanager.haswriteAccess('clo34m24r'))
        datamanager.load('clo34m24r', (res) => {
            if (Object.keys(res).length) {
                clo34m24r_data = res
                clo34m24r_loadLogin()
            } else {
                clo34m24r_data = {
                    'accounts': {},
                    'loggedin': 0
                }
                datamanager.data['clo34m24r'] = clo34m24r_data
                clo34m24r_loadLogin()
            }
        })

    } else {
        console.log(datamanager.hasreadAccess('clo34m24r') , datamanager.haswriteAccess('clo34m24r'))
        appmanager.requestPermission('clo34m24r','read',(res)=>{
            if(res){
                appmanager.requestPermission('clo34m24r','write',(res)=>{
                    if (res){
                        clo34m24r_loadData()
                    }
                    else{
                        clo34m24r_warn()
                    }
                })
            }
            else{
                clo34m24r_warn()
            }
        })
    }
}
function clo34m24r_warn() {
    document.getElementById('clo34m24r-main-page').innerText='Allow read and write permission.'
}
clo34m24r_loadData()
document.getElementById('clo34m24r-minimize').onclick = ()=>{
    sys.minimizeApp('clo34m24r')
}
document.getElementById('clo34m24r-close').onclick=()=>{
    taskmanager.KillApp('clo34m24r')
}
