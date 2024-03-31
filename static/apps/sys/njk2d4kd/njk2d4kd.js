var df3mk3lm_curtab='',df3mk3lm_url
var df3mk3lm_taskbarside=0,controlpannel='accounts'
var df3mk3lm_appselected=0,df3mk3lm_dummyselected=0,njk2d4kd_add_account=0
document.getElementById('njk2d4kd-minimize').onclick =()=>{
    sys.minimizeApp('njk2d4kd')
}
document.getElementById('njk2d4kd-close').onclick = ()=>{
    taskmanager.KillApp('njk2d4kd')
}

document.getElementById('njk2d4kd-search-input').oninput =()=>{

}

document.getElementById('njk2d4kd-theme').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-theme-window'
    if(sys.settings.theme.darkMode){
        document.getElementById('njk2d4kd-dark-theme-btn').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-dark-theme-btn').classList.add('fa-toggle-on')
    }
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
}

document.getElementById('njk2d4kd-dark-theme-btn').onclick =()=>{
    sys.switchdarkmode()
    if (sys.settings.theme.darkMode) {
        document.getElementById('njk2d4kd-dark-theme-btn').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-dark-theme-btn').classList.add('fa-toggle-on')
        sys.changeTheme()
        sys.initSettings()
        paint()
    } else {
        document.getElementById('njk2d4kd-dark-theme-btn').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-dark-theme-btn').classList.add('fa-toggle-off')
        sys.changeTheme()
        sys.initSettings()
        paint()
    }
}


/*shdfbhdsfjdsfdsnfjf*/
document.getElementById('njk2d4kd-taskbar').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-taskbar-window'
    if(sys.settings.taskbar.color == 'theme'){
        document.getElementById('njk2d4kd-taskbar-theme').style.backgroundColor = 'rgba(255, 82, 82,1)'
        document.getElementById('njk2d4kd-taskbar-theme').style.color = 'rgba(255, 235, 238,1)'
    }
    else{
        document.getElementById('njk2d4kd-taskbar-custom').style.backgroundColor = 'rgba(255, 82, 82,1)'
        document.getElementById('njk2d4kd-taskbar-custom').style.color = 'rgba(255, 235, 238,1)'
        document.getElementById('njk2d4kd-taskbar-custom-color').style.display = 'flex'

    }
    if(sys.settings.taskbar.transparency){
        document.getElementById('njk2d4kd-taskbar-transparency').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-taskbar-transparency').classList.add('fa-toggle-on')
    }
    if(sys.settings.taskbar.date){
        document.getElementById('njk2d4kd-taskbar-time').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-taskbar-time').classList.add('fa-toggle-on')
    }
    if(sys.settings.taskbar.dock) {
        document.getElementById('njk2d4kd-taskbar-dock').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-taskbar-dock').classList.add('fa-toggle-on')
    }
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
}

document.getElementById('njk2d4kd-taskbar-theme').onclick = ()=>{
    document.getElementById('njk2d4kd-taskbar-custom-color').style.display = 'none'
    document.getElementById('njk2d4kd-taskbar-theme').style.backgroundColor = 'rgba(255, 82, 82,1)'
    document.getElementById('njk2d4kd-taskbar-theme').style.color = 'rgba(255, 235, 238,1)'

    document.getElementById('njk2d4kd-taskbar-custom').style.backgroundColor = 'rgba(255, 235, 238,1)'
    document.getElementById('njk2d4kd-taskbar-custom').style.color = 'black'

    sys.switchtheme('theme')
    sys.changeTheme()
    sys.initSettings()
}
document.getElementById('njk2d4kd-taskbar-custom').onclick = ()=>{
    document.getElementById('njk2d4kd-taskbar-custom-color').style.display = 'flex'
    document.getElementById('njk2d4kd-taskbar-custom').style.backgroundColor = 'rgba(255, 82, 82,1)'
    document.getElementById('njk2d4kd-taskbar-custom').style.color = 'rgba(255, 235, 238,1)'

    document.getElementById('njk2d4kd-taskbar-theme').style.backgroundColor = 'rgba(255, 235, 238,1)'
    document.getElementById('njk2d4kd-taskbar-theme').style.color = 'black'

}
document.getElementById('njk2d4kd-taskbar-custom-color-apply').onclick = ()=>{
    let background = document.getElementById('njk2d4kd-color-background').value
    let foreground = document.getElementById('njk2d4kd-color-foreground').value
    let font = document.getElementById('njk2d4kd-color-font').value
    console.log(background,foreground,font)
    sys.switchtheme('custom')
    effective.background = background
    effective.foreground = foreground
    effective.fontcolor = font
    sys.initSettings()

}

document.getElementById('njk2d4kd-taskbar-transparency').onclick = ()=>{
    sys.switchtransparency()
    if (sys.settings.taskbar.transparency) {
        document.getElementById('njk2d4kd-taskbar-transparency').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-taskbar-transparency').classList.add('fa-toggle-on')
        sys.initSettings()
        } else {
        document.getElementById('njk2d4kd-taskbar-transparency').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-taskbar-transparency').classList.add('fa-toggle-off')
        sys.initSettings()
    }
}
document.getElementById('njk2d4kd-taskbar-time').onclick = ()=>{
    sys.switchdate()
    if (sys.settings.taskbar.date) {
        document.getElementById('njk2d4kd-taskbar-time').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-taskbar-time').classList.add('fa-toggle-on')
        sys.showdateonly()
    } else {
        document.getElementById('njk2d4kd-taskbar-time').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-taskbar-time').classList.add('fa-toggle-off')
        sys.showdateonly()
    }
}
document.getElementById('njk2d4kd-taskbar-dock').onclick = ()=>{
    sys.switchdock()
    if (sys.settings.taskbar.dock) {
        document.getElementById('njk2d4kd-taskbar-dock').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-taskbar-dock').classList.add('fa-toggle-on')
        sys.taskbardock()
    } else {
        document.getElementById('njk2d4kd-taskbar-dock').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-taskbar-dock').classList.add('fa-toggle-off')
        sys.taskbardock()
    }

}

document.getElementById('njk2d4kd-apps').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-apps-window'
    document.getElementById('njk2d4kd-apps-window-app-list-sub').innerText =''
    let apps = Object.keys(appmanager.Apps)
    for(let i=0;i<apps.length;i++){
        let div = document.createElement('div')
        div.className='njk2d4kd-flex-row'
        div.style.margin = '5px 0'
        div.style.padding = '5px 0'
        let ic
        let name = document.createElement('label')
        if(appmanager.Apps[apps[i]].iconTpe == 'fa') {
            ic = document.createElement('i')
            ic.className = appmanager.Apps[apps[i]].iconSrc
            ic.style.margin = 'auto 8px auto 0'
        }
        name.innerText=appmanager.Apps[apps[i]].appname
        name.id = apps[i]+'-app-list'
        name.className = 'cursor'
        name.onclick = (e)=>{
            let id = e.target.id.split('-')[0]

            let name = document.createElement('label')
            name.innerHTML=`<i class='fal ${appmanager.Apps[apps[i]].iconSrc}' style="margin: auto 5px"></i>`+appmanager.Apps[id].appname
            name.style.margin='10px auto'

            let opt = document.createElement('div')
            opt.className = 'njk2d4kd-flex-row'
            opt.style.justifyContent = 'center'

            let reset = document.createElement('label')
            reset.innerText='reset'
            reset.className = 'njk2d4kd-apps-reset cursor'
            reset.id = id+'-app-reset'
            reset.onclick = (e)=>{
                let id = e.target.id.split('-')[0]
            }
            reset.style.margin ='auto 10px'

            let uninstall = document.createElement('label')
            uninstall.className='njk2d4kd-apps-uninstall'
            if(!appmanager.Apps[id].sys){
                uninstall.onclick = (e)=>{
                    let id = e.target.id.split('-')[0]
                    appmanager.uninstall(id)
                    sys.notify(id,`${appmanager.Apps[id].appname} has been uninstalled`)
                    document.getElementById('njk2d4kd-apps-window-app-list-sub').removeChild(document.getElementById(id+'-app-list').parentElement)
                    document.getElementById('njk2d4kd-apps-window-app-info-sub').innerHTML = "<label style=\"margin: 10px auto\">Not Selected</label>"
                }
                uninstall.classList.add('cursor')
            }
            else{
                uninstall.style.opacity='0.5'
            }
            uninstall.innerText= 'Uninstall'
            uninstall.id =id+'-app-uninstall'
            uninstall.style.margin='auto 10px'

            opt.style.margin = '10px auto'
            opt.append(reset,uninstall)

            let perm = document.createElement('label')
            perm.innerText = 'Permissions'
            perm.style.borderStyle='solid'
            perm.style.borderColor = '#d1d1d0'
            perm.style.borderWidth = '0 0 thin 0'
            perm.style.paddingBottom = '4px'
            perm.style.margin = '5px'

            let permwindow = document.createElement('div')
            permwindow.className = 'njk2d4kd-flex-column'
            permwindow.style.margin = '5px'
            let per = appmanager.Apps[id].permission
            let perobj = Object.keys(per)
            for(let i=0;i<perobj.length;i++){
                let sup = document.createElement('div')
                sup.className= 'njk2d4kd-flex-row'
                sup.style.justifyContent ='space-between'

                let l = document.createElement('label')
                l.innerText=perobj[i]
                l.style.margin ='5px'

                let ic = document.createElement('i')
                ic.style.margin='auto 5px'
                ic.id=id+'-'+perobj[i]+'-app-info-perm'
                ic.onclick = (e)=>{
                    let i = e.target.id.split('-')
                    if(per[i[1]]){
                        appmanager.removePermission(i[0],i[1])
                        document.getElementById(e.target.id).classList.remove('fa-toggle-on')
                        document.getElementById(e.target.id).classList.add('fa-toggle-off')
                    }
                    else{
                        appmanager.grantPermission(i[0],true,i[1],null)
                        document.getElementById(e.target.id).classList.remove('fa-toggle-off')
                        document.getElementById(e.target.id).classList.add('fa-toggle-on')
                    }
                }
                if(per[perobj[i]]){
                    ic.className ='fal fa-toggle-on cursor'
                }
                else{
                    ic.className = 'fal fa-toggle-off cursor'
                }
                sup.append(l,ic)
                permwindow.append(sup)
            }
            let apptype = document.createElement('label')
            apptype.style.borderStyle='solid'
            apptype.style.borderColor = '#d1d1d0'
            apptype.style.borderWidth = '0 0 thin 0'
            apptype.style.paddingBottom = '4px'

            if(appmanager.Apps[id].sys)
                apptype.innerText='System App'
            else
                apptype.innerText='App installed from Store'
            apptype.style.margin='10px 5px'

            let notific = document.createElement('label')
            notific.style.margin = '5px'
            notific.style.borderStyle='solid'
            notific.style.borderColor = '#d1d1d0'
            notific.style.borderWidth = '0 0 thin 0'
            notific.style.paddingBottom = '4px'
            notific.innerText ='Notifications'

            let notificwindow = document.createElement('div')
            notificwindow.className = 'njk2d4kd-flex-row'
            notificwindow.style.margin='5px'
            notificwindow.style.justifyContent= 'space-between'
            let not = document.createElement('label')
            not.innerText ='Allow Notifications'
            not.style.margin = '5px'
            let icon = document.createElement('i')
            icon.id = id+'-notific'
            icon.onclick = (e)=>{
                let i = e.target.id.split('-')
                if(appmanager.Apps[i[0]].notification){
                    appmanager.notifcation(i[0])
                    document.getElementById(e.target.id).classList.remove('fa-toggle-on')
                    document.getElementById(e.target.id).classList.add('fa-toggle-off')
                }
                else{
                    appmanager.notifcation(i[0])
                    document.getElementById(e.target.id).classList.remove('fa-toggle-off')
                    document.getElementById(e.target.id).classList.add('fa-toggle-on')
                }
            }
            if(appmanager.Apps[id].notification)
                icon.className = 'fal fa-toggle-on cursor'
            else
                icon.className  = 'fal fa-toggle-off cursor'
            notificwindow.append(not,icon)
            document.getElementById('njk2d4kd-apps-window-app-info-sub').innerText=''
            document.getElementById('njk2d4kd-apps-window-app-info-sub').append(
                name,opt,perm,permwindow,apptype,notific,notificwindow)

        }
        div.append(ic,name)
        document.getElementById('njk2d4kd-apps-window-app-list-sub').append(div)
    }
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
}


document.getElementById('njk2d4kd-date-time').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-date-time-window'
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
}
document.getElementById('njk2d4kd-date-time-automatic').onclick  =()=>{
    if(document.getElementById('njk2d4kd-date-time-automatic').classList.contains('fa-toggle-off')){
        document.getElementById('njk2d4kd-date-time-automatic').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-date-time-automatic').classList.add('fa-toggle-on')
        document.getElementById('njk2d4kd-manual-date-time').style.display='none'
        if(sys.settings.datetime.automatic==0)
            sys.switchauto()
    }
    else if(sys.settings.datetime.automatic){
        document.getElementById('njk2d4kd-manual-date-time').style.display='flex'
        document.getElementById('njk2d4kd-date-time-automatic').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-date-time-automatic').classList.add('fa-toggle-off')
    }
}
document.getElementById('njk2d4kd-date-time-input-apply').onclick = (e)=>{
    let d = document.getElementById('njk2d4kd-date-time-input').value
    let sd = d.split('T')
    let date = sd[0]
    let time = sd[1]
    date = date.split('-')
    time = time.split(':')
    sys.switchauto()
    sys.changeDateTime(date[2],date[1]-1,date[0],time[0],time[1],0)
}
/*fdshgfhgfh*/
document.getElementById('njk2d4kd-control-panel').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-control-panel-window'
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
    document.getElementById('njk2d4kd-control-pannel-nav-'+controlpannel).click()
}
function createAccountObj(em){
    let a = document.createElement('div')
    a.className = 'njk2d4kd-flex-row'
    a.style.justifyContent = 'space-between'
    a.style.margin = '5px auto 5px 5px'
    a.style.border='thin solid #d1d1d0'
    a.style.borderRadius ='5px'
    a.style.padding ='10px 5px'
    let email = document.createElement('label')
    email.className = 'cursor'
    email.style.margin = '0 5px auto 5px'
    email.id=em+'-control-pannel-email'
    email.onclick = (e)=>{
        let id = e.target.id.split('-')[0]
        sys.settings.controlpannel.loggedin=id
        document.getElementById('njk2d4kd-control-pannel-logged-display').style.display='flex'
        document.getElementById('njk2d4kd-control-pannel-accounts-logged').innerText=id
        sys.notify('njk2d4kd',`account switched to ${id}`)
        sys.login(id,sys.settings.controlpannel.accounts[id].password)
    }
    let del =document.createElement('label')
    email.innerText = em
    del.innerText='delete'
    del.style.textAlign='center'
    del.className = 'njk2d4kd-apps-reset'
    del.style.fontSize='small'
    del.id = em+'-control-pannel-account-delete'
    del.style.margin = 'auto 5px 0 10px'
    if(sys.settings.controlpannel.loggedin==em) {
        del.style.opacity='0.8'
    }
    else{
        del.onclick = (e) => {
            let id = e.target.id.split('-')[0]
            if (sys.settings.controlpannel.loggedin == id) {
                document.getElementById('njk2d4kd-control-pannel-signout').click()
            }
            sys.removeaccount('njk2d4kd', id)
            document.getElementById('njk2d4kd-control-pannel-accounts-list').removeChild(
                document.getElementById(e.target.id).parentElement
            )
            sys.notify('njk2d4kd', `${id} Deleted`)
        }
    }
    let password = document.createElement('label')
    password.innerText='change password'
    password.className = 'njk2d4kd-apps-reset'
    password.id=em+'-control-pannel-account-password'
    password.style.textAlign='center'
    password.style.fontSize='small'
    password.style.margin = 'auto 5px 0 5px'
    a.append(email,del,password)
    document.getElementById('njk2d4kd-control-pannel-accounts-list').append(a)
}

document.getElementById('njk2d4kd-control-pannel-nav-accounts').onclick = ()=> {
    document.getElementById('njk2d4kd-control-pannel-nav-' + controlpannel).style.borderWidth = '0'
    document.getElementById('njk2d4kd-control-pannel-' + controlpannel).style.display = 'none'
    controlpannel = 'accounts'
    document.getElementById('njk2d4kd-control-pannel-accounts-list').innerText = ''
    document.getElementById('njk2d4kd-control-pannel-nav-' + controlpannel).style.borderWidth = '0 0 2px 0'
    document.getElementById('njk2d4kd-control-pannel-' + controlpannel).style.display = 'flex'
    // let acc=

    if (sys.settings.controlpannel.loggedin != 0) {
        document.getElementById('njk2d4kd-control-pannel-accounts-logged').innerText = sys.settings.controlpannel.loggedin
        document.getElementById('njk2d4kd-control-pannel-logged-display').style.display = 'flex'
        document.getElementById('njk2d4kd-control-pannel-accounts-signin-display').style.display = 'none'
        let acc = sys.getaccounts()
        let acckeys = Object.keys(acc)
        if(acckeys.length==0)
            document.getElementById('njk2d4kd-control-pannel-none-added').style.display='inline'
        else
            document.getElementById('njk2d4kd-control-pannel-none-added').style.display='none'
        for (let i = 0; i < acckeys.length; i++)
            createAccountObj(acckeys[i])
    } else {
        document.getElementById('njk2d4kd-control-pannel-accounts-signin-display').style.display = 'flex'
        document.getElementById('njk2d4kd-control-pannel-logged-display').style.display = 'none'
        document.getElementById('njk2d4kd-control-pannel-none-added').style.display='none'
    }
}
document.getElementById('njk2d4kd-control-pannel-accounts-signin').onclick=async()=>{
    let email = document.getElementById('njk2d4kd-control-pannels-accounts-signin-email').value
    let password = document.getElementById('njk2d4kd-control-pannels-accounts-signin-password').value
    let st = await sys.login(email,password)
    if(st)
        setTimeout(()=>{document.getElementById('njk2d4kd-control-pannel-nav-accounts').click()},100)
}
document.getElementById('njk2d4kd-control-pannel-add-account').onclick=()=> {
    if (njk2d4kd_add_account && sys.settings.controlpannel.loggedin!=0) {
        document.getElementById('njk2d4kd-control-pannel-add-display').style.display = 'none'
        njk2d4kd_add_account=0
    }
    else if(sys.settings.controlpannel.loggedin!=0){
        document.getElementById('njk2d4kd-control-pannel-add-display').style.display = 'flex'
        njk2d4kd_add_account=1
    }
}
document.getElementById('njk2d4kd-control-pannel-add').onclick = ()=>{
    let username=document.getElementById('njk2d4kd-control-pannel-username').value
    let email = document.getElementById('njk2d4kd-control-pannel-email').value
    let password = document.getElementById('njk2d4kd-control-pannel-password').value
    //TODO validate inputs
    sys.addaccount('njk2d4kd',{'name':username,'email':email,'password':password})
    createAccountObj(email)
    sys.notify('njk2d4kd','account added')
    document.getElementById('njk2d4kd-control-pannel-add-account').click()
    document.getElementById('njk2d4kd-control-pannel-username').value=
    document.getElementById('njk2d4kd-control-pannel-email').value=
    document.getElementById('njk2d4kd-control-pannel-password').value=''
}
document.getElementById('njk2d4kd-control-pannel-signout').onclick = ()=>{
    document.getElementById('njk2d4kd-control-pannel-logged-display').style.display='none'
    logout()
    if(njk2d4kd_add_account){
        document.getElementById('njk2d4kd-control-pannel-add-display').style.display = 'none'
        njk2d4kd_add_account=0
    }
    document.getElementById('njk2d4kd-control-pannel-nav-accounts').click()

}
document.getElementById('njk2d4kd-control-pannel-nav-data').onclick = ()=>{
    document.getElementById('njk2d4kd-control-pannel-nav-'+controlpannel).style.borderWidth ='0'
    document.getElementById('njk2d4kd-control-pannel-'+controlpannel).style.display='none'
    controlpannel='data'
    document.getElementById('njk2d4kd-control-pannel-accounts-list').innerText=''
    document.getElementById('njk2d4kd-control-pannel-nav-'+controlpannel).style.borderWidth ='0 0 2px 0'
    document.getElementById('njk2d4kd-control-pannel-'+controlpannel).style.display='flex'
    document.getElementById('njk2d4kd-control-pannel-data-last-saved').innerText=sys.settings.controlpannel.data.lastsaved
    document.getElementById('njk2d4kd-control-pannel-data-interval').value= sys.settings.controlpannel.data.interval
    if(sys.settings.controlpannel.loggedin==0){
        document.getElementById('njk2d4kd-control-pannel-data-details').style.display='none'
        document.getElementById('njk2d4kd-control-pannel-data-warning').style.display='flex'
    }
    else{
        document.getElementById('njk2d4kd-control-pannel-data-details').style.display='flex'
        document.getElementById('njk2d4kd-control-pannel-data-warning').style.display='none'
    }
    if(!sys.settings.controlpannel.data.saveperiod){
        document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').classList.add('fa-toggle-off')
        document.getElementById('njk2d4kd-control-pannel-data-interval-display').style.display='none'
    }
}
document.getElementById('njk2d4kd-control-pannel-data-signin').onclick = ()=>{
    setTimeout(()=>{document.getElementById('njk2d4kd-control-pannel-nav-accounts').click()},200)

}
document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').onclick = ()=>{
    if(sys.settings.controlpannel.data.saveperiod){
        sys.settings.controlpannel.data.saveperiod=0
        document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').classList.add('fa-toggle-off')
        document.getElementById('njk2d4kd-control-pannel-data-interval-display').style.display='none'
    }
    else{
        sys.settings.controlpannel.data.saveperiod=1
        document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-control-pannel-data-interval-toggle').classList.add('fa-toggle-on')
        document.getElementById('njk2d4kd-control-pannel-data-interval-display').style.display='flex'
    }
}
document.getElementById('njk2d4kd-control-pannel-data-interval').onchange= ()=>{
    sys.settings.controlpannel.data.interval=document.getElementById('njk2d4kd-control-pannel-data-interval').value
}
document.getElementById('njk2d4kd-control-pannel-data-save-now').onclick = async()=> {
    let s = await sys.savesettings()
    if (s) {
        document.getElementById('njk2d4kd-control-pannel-data-last-saved').innerText = new Date().toDateString()
        sys.notify('njk2d4kd', 'Data has been saved')
    }
    else{
        sys.notify('njk2d4kd', 'error while saving data')
    }
}
document.getElementById('njk2d4kd-background').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-background-window'
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
    //0-none
    //1-default
    //2-custom
    if(sys.settings.background.backgroundimage==2) {
        document.getElementById('njk2d4kd-no-image-remove').style.display = 'inline'
        document.getElementById('njk2d4kd-background-image').src=sys.settings.background.backgroundurl
    }
    else if(sys.settings.background.backgroundimage==1) {
        document.getElementById('njk2d4kd-no-image-remove').style.display = 'none'
        document.getElementById('njk2d4kd-background-image').src=sys.default_settings.background.backgroundurl
    }
    else{
        document.getElementById('njk2d4kd-no-image-remove').style.display = 'none'
    }
}
document.getElementById('njk2d4kd-background-default-image').onclick=(e)=>{
    console.log(document.getElementById(e.target.id).checked);
    if(document.getElementById(e.target.id).checked){
        document.getElementById('njk2d4kd-background-image').src=sys.default_settings.background.backgroundurl
        sys.setbackground('backgroundimage',1)
        document.getElementById('njk2d4kd-no-image-remove').style.display = 'none'
    }
    else{
        sys.setbackground('backgroundimage',0)
        document.getElementById('njk2d4kd-background-image').src='#'
    }
    sys.initSettings()
}
document.getElementById('njk2d4kd-no-image-remove').onclick = ()=>{
    document.getElementById('njk2d4kd-background-image').src='#'
    sys.setbackground()
    sys.setbackground('backgroundimage',0)
    sys.setbackground('backgroundurl','')
    URL.revokeObjectURL(df3mk3lm_url)
    sys.initSettings()
    document.getElementById('njk2d4kd-no-image-remove').style.display = 'none'
}
document.getElementById('njk2d4kd-image-input-btn').onclick = ()=>{
    document.getElementById('njk2d4kd-image-input').click()
}
document.getElementById('njk2d4kd-image-input').onchange = (e)=>{
    let files = e.target.files[0]
    df3mk3lm_url = URL.createObjectURL(files)
    document.getElementById('njk2d4kd-background-image').src=df3mk3lm_url
    document.getElementById('njk2d4kd-background-default-image').checked=false
    sys.setbackground('backgroundimage',2)
    sys.setbackground('backgroundurl', df3mk3lm_url)
}

document.getElementById('njk2d4kd-background-apply').onclick = ()=>{
    let v = document.getElementById('njk2d4kd-background-color-input').value
    sys.setbackground('backgroundcolor',v)
    document.getElementById('njk2d4kd-background-image').style.backgroundColor=v
    sys.initSettings()
    if(sys.settings.background.backgroundimage==2)
        document.getElementById('njk2d4kd-no-image-remove').style.display = 'inline'
}
document.getElementById('njk2d4kd-background-color-input').oninput = (e)=>{
    document.getElementById('njk2d4kd-background-image').style.backgroundColor=e.target.value
}

//djkfbjdbfhjksbdsfhdjhbsdjbfv

document.getElementById('njk2d4kd-app-drawer').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0 && df3mk3lm_curtab != 'njk2d4kd-app-drawer'){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-app-drawer-window'
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
    let filled = sys.isappdrawerfull()
    if(filled[0])
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.display = 'none'
    else
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.display = 'inline'
    if(filled[1])
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.display = 'none'
    else
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.display = 'inline'

    let left = document.getElementsByClassName('left')
    for(let i=0;i<left.length;i++){
        let ele1 = document.createElement('i')
        ele1.className = left[i].classList[0]+' '+left[i].classList[1] + ' cursor'
        ele1.onclick = (e)=>{
            if(df3mk3lm_dummyselected==0) {
                df3mk3lm_dummyselected = e.target.id
                document.getElementById(df3mk3lm_dummyselected).style.opacity='0.8'
                document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='inline'
            }
            else if(df3mk3lm_dummyselected==e.target.id){
                document.getElementById(df3mk3lm_dummyselected).style.opacity='1'
                df3mk3lm_dummyselected=0
                document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='none'
            }
            else{
                document.getElementById(df3mk3lm_dummyselected).style.opacity='1'
                df3mk3lm_dummyselected = e.target.id
                document.getElementById(df3mk3lm_dummyselected).style.opacity='0.8'
            }
        }
        ele1.id = left[i].id+'-dummy-taskbar-left-obj'
        document.getElementById('njk2d4kd-dummy-taskbar-left').append(ele1)
    }
    let right = document.getElementsByClassName('right')
    for(let i=0;i<right.length;i++){
        let ele1 = document.createElement('i')
        ele1.className = right[i].classList[0]+' '+right[i].classList[1] + ' cursor'
        ele1.onclick = (e)=>{
            if(df3mk3lm_dummyselected==0) {
                df3mk3lm_dummyselected = e.target.id
                document.getElementById(df3mk3lm_dummyselected).style.opacity='0.8'
                document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='inline'
            }
            else if(df3mk3lm_dummyselected==e.target.id){
                document.getElementById(df3mk3lm_dummyselected).style.opacity='1'
                df3mk3lm_dummyselected=0
                document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='none'
            }
            else{
                document.getElementById(df3mk3lm_dummyselected).style.opacity='1'
                df3mk3lm_dummyselected = e.target.id
                document.getElementById(df3mk3lm_dummyselected).style.opacity='0.8'
            }
        }
        ele1.id = right[i].id+'-dummy-taskbar-right-obj'
        document.getElementById('njk2d4kd-dummy-taskbar-right').append(ele1)
    }

}

document.getElementById('njk2d4kd-dummy-taskbar-left-add').onclick = ()=>{
    if(df3mk3lm_taskbarside=='right') {
        df3mk3lm_taskbarside = 'left'
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.opacity = '0.7'
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.opacity = '1'
    }
    else if(df3mk3lm_taskbarside=='left'){
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.opacity = '1'
        document.getElementById('njk2d4kd-app-drawer-apps-display').style.display = 'none'
        df3mk3lm_taskbarside=0
    }else {
        df3mk3lm_taskbarside = 'left'
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.opacity = '0.7'
        document.getElementById('njk2d4kd-app-drawer-apps-display').style.display = 'flex'
        listApps()
    }
}
document.getElementById('njk2d4kd-dummy-taskbar-right-add').onclick = ()=>{
    if(df3mk3lm_taskbarside == 'left') {
        df3mk3lm_taskbarside = 'right'
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.opacity = '0.7'
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.opacity = '1'
    }
    else if(df3mk3lm_taskbarside=='right'){
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.opacity = '1'
        document.getElementById('njk2d4kd-app-drawer-apps-display').style.display = 'none'
        df3mk3lm_taskbarside=0
    }
    else {
        df3mk3lm_taskbarside = 'right'
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.opacity = '0.7'
        document.getElementById('njk2d4kd-app-drawer-apps-display').style.display = 'flex'
        listApps()

    }
}
document.getElementById('njk2d4kd-app-drawer-apps-apply').onclick =()=>{
    let data = appmanager.Apps[df3mk3lm_appselected.split('-')[0]]
    if(data.iconTpe=='fa'){
        let ele = document.createElement('i')
        ele.className = data.iconSrc+' scale15 app-drawer-obj hidable '+df3mk3lm_taskbarside
        ele.id=data.appId+'-drawer'
        ele.onclick = (e)=>{
            taskmanager.executeApp(e.target.id.split('-')[0])
        }

        let ele1 = document.createElement('i')
        ele1.className = data.iconSrc + ' cursor'

        ele1.onclick = (e)=>{
            if(df3mk3lm_dummyselected==0) {
                df3mk3lm_dummyselected = e.target.id
                document.getElementById(df3mk3lm_dummyselected).style.opacity='0.8'
                document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='inline'
            }
            else if(df3mk3lm_dummyselected==e.target.id){
                document.getElementById(df3mk3lm_dummyselected).style.opacity='1'
                df3mk3lm_dummyselected=0
                document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='none'
            }
            else{
                document.getElementById(df3mk3lm_dummyselected).style.opacity='1'
                df3mk3lm_dummyselected = e.target.id
                document.getElementById(df3mk3lm_dummyselected).style.opacity='0.8'
            }
        }


        if(df3mk3lm_taskbarside=='left') {
            document.getElementById('app-drawer').prepend(ele)
            ele1.id = data.appId+'-dummy-taskbar-left-obj'
            document.getElementById('njk2d4kd-dummy-taskbar-left').prepend(ele1)
        }
        else {
            document.getElementById('app-drawer').append(ele)
            ele1.id = data.appId+'-dummy-taskbar-right-obj'
            document.getElementById('njk2d4kd-dummy-taskbar-right').append(ele1)
        }


        sys.appDrawerModifier('add',df3mk3lm_taskbarside,df3mk3lm_appselected.split('-')[0])
        document.getElementById('njk2d4kd-app-drawer-apps-cancel').click()


        let filled = sys.isappdrawerfull()
        if(filled[0])
            document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.display = 'none'
        else
            document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.display = 'inline'

        if(filled[1])
            document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.display = 'none'
        else
            document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.display = 'inline'
    }
}
document.getElementById('njk2d4kd-app-drawer-apps-cancel').onclick =()=>{
    document.getElementById('njk2d4kd-app-drawer-apps-display').style.display = 'none'
    if(df3mk3lm_taskbarside=='left')
        document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.opacity = '1'
    else
        document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.opacity = '1'
    df3mk3lm_taskbarside=0
    df3mk3lm_appselected=0
    document.getElementById('njk2d4kd-app-drawer-apps-list').innerText = ''

}
document.getElementById('njk2d4kd-dummy-taskbar-remove').onclick = ()=>{
    let id = df3mk3lm_dummyselected.split('-')
    if(id[3] == 'left'){
        document.getElementById('njk2d4kd-dummy-taskbar-left').removeChild(document.getElementById(df3mk3lm_dummyselected))
        df3mk3lm_dummyselected = 0
        sys.appDrawerModifier('remove','left',id[0])
        let filled = sys.isappdrawerfull()
        if(filled[0])
            document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.display = 'none'
        else
            document.getElementById('njk2d4kd-dummy-taskbar-left-add').style.display = 'inline'
        document.getElementById('app-drawer').removeChild(document.getElementById(id[0]+'-drawer'))
    }
    else{
        document.getElementById('njk2d4kd-dummy-taskbar-right').removeChild(document.getElementById(df3mk3lm_dummyselected))
        df3mk3lm_dummyselected = 0
        sys.appDrawerModifier('remove','right',id[0])
        let filled = sys.isappdrawerfull()
        if(filled[1])
            document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.display = 'none'
        else
            document.getElementById('njk2d4kd-dummy-taskbar-right-add').style.display = 'inline'
        document.getElementById('app-drawer').removeChild(document.getElementById(id[0]+'-drawer'))
    }
    document.getElementById('njk2d4kd-dummy-taskbar-remove').style.display='none'

}

document.getElementById('njk2d4kd-app-drawer-home').onclick= ()=>{
    sys.switchhome()
    if (sys.settings.appdrawer.onlyhome) {
        document.getElementById('njk2d4kd-app-drawer-home').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-app-drawer-home').classList.add('fa-toggle-on')
        let ele = document.getElementsByClassName('hidable')
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.display = 'none'
        }
    } else {
        document.getElementById('njk2d4kd-app-drawer-home').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-app-drawer-home').classList.add('fa-toggle-off')
        let ele = document.getElementsByClassName('hidable')
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.display = 'inline'
        }
        if(!sys.settings.appdrawer.search)
            document.getElementById('search').style.display = 'none'
    }
}

document.getElementById('njk2d4kd-app-drawer-search').onclick=()=>{
    sys.switchcearch()
    if (sys.settings.appdrawer.search) {
        document.getElementById('njk2d4kd-app-drawer-search').classList.remove('fa-toggle-off')
        document.getElementById('njk2d4kd-app-drawer-search').classList.add('fa-toggle-on')
        document.getElementById('search').style.display = 'inline'
    } else {
        document.getElementById('njk2d4kd-app-drawer-search').classList.remove('fa-toggle-on')
        document.getElementById('njk2d4kd-app-drawer-search').classList.add('fa-toggle-off')
        document.getElementById('search').style.display = 'none'
    }
}


document.getElementById('njk2d4kd-search').onclick = ()=>{
    if(df3mk3lm_curtab.length!=0){
        document.getElementById(df3mk3lm_curtab).style.display = 'none'
    }
    df3mk3lm_curtab = 'njk2d4kd-search-window'
    document.getElementById(df3mk3lm_curtab).style.display = 'flex'
}

paint()
sys.notify('njk2d4kd','you have opened your settings app')
function paint() {
    document.getElementById('njk2d4kd').style.backgroundColor = effective.background
    document.getElementById('njk2d4kd').style.color= effective.fontcolor
    document.getElementById('njk2d4kd-search-input').style.backgroundColor = effective.foreground
    document.getElementById('njk2d4kd-search-input').style.color=effective.fontcolor
}

function listApps() {
    let apps = JSON.stringify(appmanager.Apps)
    apps = JSON.parse(apps)
    let keys = Object.keys(apps)
    for(let i of keys){
        if(Object.values(sys.settings.appdrawer.icons.left).indexOf(i)!=-1 || Object.values(sys.settings.appdrawer.icons.right).indexOf(i)!=-1){
            delete apps[i]
        }
    }
    keys = Object.keys(apps)
    for(let i of keys)
        createlistAppsObj(apps[i])
}

function createlistAppsObj(obj) {
    let main  = document.createElement('label')
    main.className = 'njk2d4kd-app-drawer-apps-list-obj'

    let name = document.createElement('label')
    name.innerText = obj['appname']
    name.id=obj['appId']+'-drawer-list'
    name.className = 'cursor'
    name.onclick = (e)=>{
        if(df3mk3lm_appselected!=0)
        if(df3mk3lm_appselected!=0)
            document.getElementById(df3mk3lm_appselected).parentElement.style.opacity='1'
        df3mk3lm_appselected = e.target.id
        document.getElementById(df3mk3lm_appselected).parentElement.style.opacity='0.8'

    }
    let ic
    if(obj['iconTpe']=='fa'){
        ic = document.createElement('i')
        ic.className = obj['iconSrc']
        ic.style.marginRight = '5px'
        main.append(ic)
    }
    main.append(name)
    document.getElementById('njk2d4kd-app-drawer-apps-list').append(main)

}
