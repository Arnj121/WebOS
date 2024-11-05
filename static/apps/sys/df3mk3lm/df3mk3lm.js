document.getElementById('df3mk3lm-minimize').onclick = ()=>{
    sys.minimizeApp('df3mk3lm')
}
document.getElementById('df3mk3lm-close').onclick = ()=>{
    taskmanager.KillApp('df3mk3lm')
}

var df3mk3lm_curtab=''
df3mk3lm_LoadApps()
taskmanager.executeAppPipeline['df3mk3lm'] = [df3mk3lm_addApp]
taskmanager.killAppPipeline['df3mk3lm'] = [df3mk3lm_removeFromList]
function df3mk3lm_addApp(obj) {
    df3mk3lm_createAppObj(obj)
}

function df3mk3lm_LoadApps() {
    let appsRunning = taskmanager.taskmanager
    let keys = Object.keys(appsRunning)
    for(let i=0;i<keys.length;i++){
        df3mk3lm_createAppObj(appsRunning[keys[i]])
    }
}

function df3mk3lm_removeFromList(appId) {
    try {
        document.getElementById('df3mk3lm-apps-running-right').removeChild(
            document.getElementById(appId + '-task-right'))

        document.getElementById('df3mk3lm-apps-running-left').removeChild(
            document.getElementById(appId + '-task-left'))
        df3mk3lm_curtab = ''
    }catch (e) {}
}

function df3mk3lm_createAppObj(obj){
    let ele = document.createElement('label')
    let ic
    ele.className = 'df3mk3lm-app-running-left-obj'
    if(appmanager.Apps[obj['processid']].iconTpe=='fa'){
        ic = document.createElement('i')
        ic.className = appmanager.Apps[obj['processid']].iconSrc
        ic.style.marginRight = '5px'
    }
    ele.innerHTML = ic.outerHTML+obj.appname
    ele.id = obj['processid']+'-task-left'
    ele.onclick = (e)=>{
        let id = e.target.id.split('-')[0]
        if(df3mk3lm_curtab.length!=0){
            document.getElementById(df3mk3lm_curtab).style.display='none'
        }
        df3mk3lm_curtab = id+'-task-right'
        document.getElementById(df3mk3lm_curtab).style.display = 'flex'

    }
    document.getElementById('df3mk3lm-apps-running-left').append(ele)

    let div = document.createElement('div')
    div.className  = 'df3mk3lm-flex-column df3mk3lm-app-running-right-obj'
    div.id = obj['processid']+'-task-right'
    let namelbl = document.createElement('label')
    namelbl.innerText = 'App name'
    namelbl.style.margin = '10px'
    namelbl.style.fontSize = 'large'
    namelbl.style.color = 'rgba(255,64,129,1)'
    let name = document.createElement('label')
    name.innerText = obj['appname']
    name.style.margin = '10px 10px 10px 15px'

    let processlbl = document.createElement('label')
    processlbl.innerText = 'Process ID'
    processlbl.style.fontSize = 'large'
    processlbl.style.margin = '10px'
    processlbl.style.color = 'rgba(255,64,129,1)'

    let process = document.createElement('label')
    process.innerText =obj['processid']
    process.style.margin = '10px 10px 10px 15px'

    div.append(namelbl,name,processlbl,process)
    if(obj['background']){
        let backlbl=document.createElement('label')
        backlbl.innerText='App running in background'
        backlbl.style.margin='10px'
        backlbl.style.color='rgba(255,64,129,1)'
        div.append(backlbl)
    }

    let restart = document.createElement('label')
    let kill = document.createElement('label')

    restart.innerText = 'Restart'
    kill.innerText = 'End Task'

    restart.className = kill.className = 'df3mk3lm-button'
    restart.id = obj['processid']+'-task-restart'
    kill.id = obj['processid']+'-task-kill'

    restart.onclick = (e)=>{
        let id = e.target.id.split('-')[0]
        taskmanager.restartApp(id)
    }
    kill.onclick = (e)=>{
        let id = e.target.id.split('-')[0]
        taskmanager.taskmanager[id].forceKill=1
        document.getElementById(id+'-close').click()
        df3mk3lm_removeFromList(id)
    }
    div.append(restart,kill)
    document.getElementById('df3mk3lm-apps-running-right').append(div)

}
df3mk3lm_paint()
sys.notify('df3mk3lm','you have opened task manager')
function df3mk3lm_paint() {
    document.getElementById('df3mk3lm').style.backgroundColor=effective.background
    document.getElementById('df3mk3lm').style.color=effective.fontcolor
}
