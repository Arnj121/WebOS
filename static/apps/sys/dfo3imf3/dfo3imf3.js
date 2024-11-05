var dfo3imf3_curtab='dfo3imf3-home-page'

document.getElementById('dfo3imf3-minimize').onclick = ()=>{
    sys.minimizeApp('dfo3imf3')
}
document.getElementById('dfo3imf3-close').onclick=()=>{
    taskmanager.KillApp('dfo3imf3')
}


document.getElementById('dfo3imf3-home').onclick = ()=>{
    document.getElementById(dfo3imf3_curtab).style.display='none'
    document.getElementById(dfo3imf3_curtab.substring(0,dfo3imf3_curtab.lastIndexOf('-'))).style.borderStyle = 'none'
    dfo3imf3_curtab ='dfo3imf3-home-page'
    document.getElementById(dfo3imf3_curtab).style.display='flex'
    document.getElementById('dfo3imf3-home').style.borderStyle = 'solid'
}
document.getElementById('dfo3imf3-installed').onclick = ()=>{
    document.getElementById(dfo3imf3_curtab).style.display='none'
    document.getElementById(dfo3imf3_curtab.substring(0,dfo3imf3_curtab.lastIndexOf('-'))).style.borderStyle = 'none'
    dfo3imf3_curtab ='dfo3imf3-installed-page'
    document.getElementById(dfo3imf3_curtab).style.display='flex'
    document.getElementById('dfo3imf3-installed').style.borderStyle = 'solid'
}
listhomeApps()
function listhomeApps(){
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            let res = JSON.parse(xhr.response)
            displayapps(res)
        }
    }
    xhr.open('GET','http://localhost:2000/getapps')
    xhr.send()
}
function displayapps(response) {
    for (let i of Object.keys(response))
        if(!response[i].sys)
            createAppOjb(response[i])
}

function createAppOjb(obj) {
    let ele = document.createElement('div')
    ele.className = 'dfo3imf3-home-page-obj'
    ele.id =obj['appId']+'-window'
    let ic
    if(obj['iconTpe']=='fa'){
        ic = document.createElement('i')
        ic.className = obj['iconSrc'] + ' fa-3x'
        ic.style.margin = '10px auto'
        ele.append(ic)
    }

    let name = document.createElement('label')
    name.innerText = obj['appname']
    name.style.fontSize = 'large'
    name.style.margin='10px auto'
    ele.append(name)

    if(appmanager.Apps[obj['appId']]){
        let uninstall = document.createElement('label')
        uninstall.innerHTML = "<i class='fal fa-trash-alt' style='margin: auto 5px'></i> Remove"
        uninstall.className = 'install cursor'
        uninstall.id=obj['appId']+'-remove'
        uninstall.onclick =(e)=>{
            let id = e.target.id.split('-')
            remove(id[0])
        }
        ele.append(uninstall)
    }
    else{
        let install = document.createElement('label')
        install.innerHTML = "<i class='fal fa-download' style='margin: auto 5px'></i> Install"
        install.className = 'install cursor'
        install.id=obj['appId']+'-install'
        install.onclick = (e)=>{
            let id = e.target.id.split('-')
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if(xhr.readyState ==4){
                    let res = JSON.parse(xhr.response)
                    installapp(res)
                }
            }
            xhr.open('GET',`http://localhost:2000/getapp?appid=${id[0]}`)
            xhr.send()
        }
        ele.append(install)
    }
    document.getElementById('dfo3imf3-home-page').append(ele)
}
function installapp(obj) {
    appmanager.install('dfo3imf3',obj,installsuccessful)
}
function installsuccessful(status,obj){
    if(status) {
        document.getElementById(obj.appId + '-window').removeChild(document.getElementById(obj.appId + '-install'))
        let progress = document.createElement('progress')
        progress.className = 'progress'
        progress.id=obj.appId+'-progress'
        progress.value = '0'
        document.getElementById(obj.appId + '-window').append(progress)
        let j,v=0
        j = setInterval(()=>{
            v+=0.025
            document.getElementById(obj.appId+'-progress').value = v
            if(v>=1)
                clearInterval(j)
        },30)
        setTimeout(()=> {
            document.getElementById(obj.appId+'-window').removeChild(document.getElementById(obj.appId+'-progress'))
            let uninstall = document.createElement('label')
            uninstall.innerHTML = "<i class='fal fa-trash-alt' style='margin: auto 5px'></i> Remove"
            uninstall.className = 'install cursor'
            uninstall.id = obj['appId'] + '-remove'
            uninstall.onclick = (e) => {
                let id = e.target.id.split('-')
                remove(id[0])
            }
            document.getElementById(obj.appId + '-window').append(uninstall)
            sys.notify('dfo3imf3',`${obj.appname} has been installed`)
        },2000)
    }
    else{
        console.log('error')
    }
}
function remove(appid) {
    appmanager.uninstall(appid)
    document.getElementById(appid+'-window').removeChild(document.getElementById(appid+'-remove'))
    let install = document.createElement('label')
    install.innerHTML = "<i class='fal fa-download' style='margin: auto 5px'></i> Install"
    install.className = 'install cursor'
    install.id=appid+'-install'
    install.onclick = (e)=>{
        let id = e.target.id.split('-')
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(xhr.readyState ==4){
                let res = JSON.parse(xhr.response)
                installapp(res)
            }
        }
        xhr.open('GET',`http://localhost:2000/getapp?appid=${id[0]}`)
        xhr.send()
    }
    document.getElementById(appid+'-window').append(install)
}

paint()
function paint() {
    document.getElementById('dfo3imf3').style.backgroundColor = effective.background
    document.getElementById('dfo3imf3').style.color = effective.fontcolor

    document.getElementById('dfo3imf3-search-input').style.backgroundColor=effective.foreground
    document.getElementById('dfo3imf3-search-input').style.color=effective.fontcolor

}
