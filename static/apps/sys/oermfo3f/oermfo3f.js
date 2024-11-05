var oermfo3f_timerplay=0, oermfo3f_totaltime=0,oermfo3f_hrs=0,oermfo3f_min=0,oermfo3f_sec=0;
var oermfo3f_timerKeeper=0,oermfo3f_clockKeeper=0,oermfo3f_stopKeeper=0
var oermfo3f_month={0:'January',1:'February',2:'March',3:'April',4:'May',5:'June',
    6:'July',7:'August',8:'September',9:'October',10:'November',11:'December'};
var oermfo3f_stopwatch={hrs:0,min:0,sec:0},oermfo3f_stopw=0,oermfo3f_lapid=0
var oermfo3f_laphr=0,oermfo3f_lapmin=0,oermfo3f_lapsec=0,oermfo3f_curtab='oermfo3f-clock'
document.getElementById('oermfo3f-minimize').onclick=()=>{
    sys.minimizeApp('oermfo3f')
}
document.getElementById('oermfo3f-close').onclick=()=>{
    if((oermfo3f_timerKeeper!=0 || oermfo3f_stopKeeper!=0 ) && !taskmanager.taskmanager['oermfo3f'].forceKill){
        taskmanager.runInBackground('oermfo3f')
    }
    else {
        try {
            clearInterval(oermfo3f_clockKeeper)
            clearInterval(oermfo3f_timerKeeper)
            clearInterval(oermfo3f_stopKeeper)
        } catch (e) {
        }
        taskmanager.KillApp('oermfo3f')
    }
}
document.getElementById(oermfo3f_curtab).style.borderStyle = 'solid'


document.getElementById('oermfo3f-clock').onclick = ()=>{
    document.getElementById(oermfo3f_curtab).style.borderStyle='none'
    document.getElementById(oermfo3f_curtab+'-page').style.display='none'
    oermfo3f_curtab = 'oermfo3f-clock'
    document.getElementById(oermfo3f_curtab).style.borderStyle='solid'
    document.getElementById(oermfo3f_curtab+'-page').style.display='flex'
}

document.getElementById('oermfo3f-timer').onclick = ()=>{
    document.getElementById(oermfo3f_curtab).style.borderStyle='none'
    document.getElementById(oermfo3f_curtab+'-page').style.display='none'
    oermfo3f_curtab = 'oermfo3f-timer'
    document.getElementById(oermfo3f_curtab).style.borderStyle='solid'
    document.getElementById(oermfo3f_curtab+'-page').style.display='flex'
}
document.getElementById('oermfo3f-stopwatch').onclick=()=>{
    document.getElementById(oermfo3f_curtab).style.borderStyle='none'
    document.getElementById(oermfo3f_curtab+'-page').style.display='none'
    oermfo3f_curtab = 'oermfo3f-stopwatch'
    document.getElementById(oermfo3f_curtab).style.borderStyle='solid'
    document.getElementById(oermfo3f_curtab+'-page').style.display='flex'
}

document.getElementById('oermfo3f-timer-play').onclick = ()=>{
    if(oermfo3f_timerplay){
        oermfo3f_timerplay=0
        document.getElementById('oermfo3f-timer-play').classList.remove('fa-pause')
        document.getElementById('oermfo3f-timer-play').classList.add('fa-play')
        document.getElementById('oermfo3f-timer-page-input').style.display='flex'
        oermfo3f_pausetimer()
    }
    else{
        oermfo3f_timerplay=1
        let oermfo3f_h = parseInt(document.getElementById('oermfo3f-timer-page-hrs').value)
        let oermfo3f_m = parseInt(document.getElementById('oermfo3f-timer-page-min').value)
        let oermfo3f_s = parseInt(document.getElementById('oermfo3f-timer-page-sec').value)
        //TODO: fix this Nan
        document.getElementById('oermfo3f-timer-play').classList.remove('fa-play')
        document.getElementById('oermfo3f-timer-play').classList.add('fa-pause')
        oermfo3f_totaltime = oermfo3f_s+(oermfo3f_m*60)+(oermfo3f_h*3600)
        let oermfo3f_temp=oermfo3f_totaltime
        let oermfo3f_hours = parseInt(oermfo3f_temp/3600)
        document.getElementById('oermfo3f-timer-page-display-hrs').innerText=oermfo3f_hours
        oermfo3f_temp = oermfo3f_totaltime-(oermfo3f_hours*3600)
        let oermfo3f_minutes = parseInt(oermfo3f_temp/60)
        document.getElementById('oermfo3f-timer-page-display-min').innerText=oermfo3f_minutes
        let oermfo3f_seconds = oermfo3f_totaltime-oermfo3f_hours*3600-oermfo3f_minutes*60
        document.getElementById('oermfo3f-timer-page-display-sec').innerText=oermfo3f_seconds
        document.getElementById('oermfo3f-timer-page-input').style.display='none'
        console.log(oermfo3f_hours,oermfo3f_minutes,oermfo3f_seconds)
        oermfo3f_hrs=oermfo3f_hours;oermfo3f_min=oermfo3f_minutes;oermfo3f_sec=oermfo3f_seconds;
        oermfo3f_starttimer()
    }

}

document.getElementById('oermfo3f-timer-reset').onclick = ()=>{
    oermfo3f_timerplay=0
    document.getElementById('oermfo3f-timer-play').classList.remove('fa-pause')
    document.getElementById('oermfo3f-timer-play').classList.add('fa-play')
    document.getElementById('oermfo3f-timer-page-input').style.display='flex'
    document.getElementById('oermfo3f-timer-page-display-hrs').innerText='00'
    document.getElementById('oermfo3f-timer-page-display-min').innerText='00'
    document.getElementById('oermfo3f-timer-page-display-sec').innerText='00'
    oermfo3f_totaltime=0
    document.getElementById('oermfo3f-timer-page-hrs').value =0
    document.getElementById('oermfo3f-timer-page-min').value =0
    document.getElementById('oermfo3f-timer-page-sec').value =0
}

function oermfo3f_starttimer(){
    function start() {
        oermfo3f_sec -= 1
        if (oermfo3f_sec < 0) {
            oermfo3f_min -=1
            if (oermfo3f_min < 0) {
                oermfo3f_hrs -=1
                if (oermfo3f_hrs < 0) {
                    sys.notify('oermfo3f','Timer has finished')
                    oermfo3f_pausetimer()
                } else {
                    oermfo3f_min = 59
                    oermfo3f_sec = 59
                    document.getElementById('oermfo3f-timer-page-display-hrs').innerText = oermfo3f_hrs
                    document.getElementById('oermfo3f-timer-page-display-min').innerText = oermfo3f_min
                    document.getElementById('oermfo3f-timer-page-display-sec').innerText = oermfo3f_sec
                }
            } else {
                oermfo3f_sec = 59
                document.getElementById('oermfo3f-timer-page-display-hrs').innerText = oermfo3f_hrs
                document.getElementById('oermfo3f-timer-page-display-min').innerText = oermfo3f_min
                document.getElementById('oermfo3f-timer-page-display-sec').innerText = oermfo3f_sec
            }
        } else {
            document.getElementById('oermfo3f-timer-page-display-hrs').innerText = oermfo3f_hrs
            document.getElementById('oermfo3f-timer-page-display-min').innerText = oermfo3f_min
            document.getElementById('oermfo3f-timer-page-display-sec').innerText = oermfo3f_sec
        }
    }
    oermfo3f_timerKeeper =setInterval(start,1000)
}
function oermfo3f_pausetimer() {
    clearInterval(oermfo3f_timerKeeper)
    oermfo3f_timerKeeper=0
}

function oermfo3f_startClock(){
    function start() {
        let oermfo3f_d = new Date()
        document.getElementById('oermfo3f-clock-page-hrs').innerText=oermfo3f_d.getHours()
        document.getElementById('oermfo3f-clock-page-min').innerText=oermfo3f_d.getMinutes()
        document.getElementById('oermfo3f-clock-page-sec').innerText=oermfo3f_d.getSeconds()
        document.getElementById('oermfo3f-clock-page-day').innerText=oermfo3f_d.getDate()
        document.getElementById('oermfo3f-clock-page-month').innerText=oermfo3f_month[oermfo3f_d.getMonth()]
        document.getElementById('oermfo3f-clock-page-year').innerText=oermfo3f_d.getFullYear()
    }
    oermfo3f_clockKeeper = setInterval(start,1000)
}
oermfo3f_startClock()

function oermfo3f_startStopWatch(){
    function start() {
        oermfo3f_stopwatch.sec+=1
        if(oermfo3f_stopwatch.sec>59){
            oermfo3f_stopwatch.min+=1
            if(oermfo3f_stopwatch.min>59){
                oermfo3f_stopwatch.hrs+=1
                if(oermfo3f_stopwatch.hrs>99){
                    oermfo3f_stopStopWatch()
                }
                else{
                    document.getElementById('oermfo3f-stopwatch-hrs').innerText = oermfo3f_stopwatch.hrs
                    document.getElementById('oermfo3f-stopwatch-min').innerText = oermfo3f_stopwatch.min
                    document.getElementById('oermfo3f-stopwatch-sec').innerText = oermfo3f_stopwatch.sec
                }
            }else{
                document.getElementById('oermfo3f-stopwatch-hrs').innerText = oermfo3f_stopwatch.hrs
                document.getElementById('oermfo3f-stopwatch-min').innerText = oermfo3f_stopwatch.min
                document.getElementById('oermfo3f-stopwatch-sec').innerText = oermfo3f_stopwatch.sec
            }
        }
        else{
            document.getElementById('oermfo3f-stopwatch-hrs').innerText = oermfo3f_stopwatch.hrs
            document.getElementById('oermfo3f-stopwatch-min').innerText = oermfo3f_stopwatch.min
            document.getElementById('oermfo3f-stopwatch-sec').innerText = oermfo3f_stopwatch.sec
        }
    }
    oermfo3f_stopKeeper = setInterval(start,1000)
}
function oermfo3f_stopStopWatch(){
    clearInterval(oermfo3f_stopKeeper)
    oermfo3f_stopKeeper=0
}

document.getElementById('oermfo3f-stopwatch-lap-play').onclick = ()=>{
    if(oermfo3f_stopw){
        oermfo3f_stopw=0
        document.getElementById('oermfo3f-stopwatch-lap-play').classList.remove('fa-pause')
        document.getElementById('oermfo3f-stopwatch-lap-play').classList.add('fa-play')
        document.getElementById('oermfo3f-stopwatch-lap-flag').style.display = 'none'
        oermfo3f_stopStopWatch()
    }
    else {
        oermfo3f_startStopWatch()
        oermfo3f_stopw=1
        document.getElementById('oermfo3f-stopwatch-lap-play').classList.remove('fa-play')
        document.getElementById('oermfo3f-stopwatch-lap-play').classList.add('fa-pause')
        document.getElementById('oermfo3f-stopwatch-lap-flag').style.display = 'inline'
    }
}

document.getElementById('oermfo3f-stopwatch-lap-reset').onclick = ()=>{
    if(oermfo3f_stopw)
        document.getElementById('oermfo3f-stopwatch-lap-flag').style.display='none'
    oermfo3f_stopw=0
    oermfo3f_lapid=0
    oermfo3f_laphr=oermfo3f_lapsec=oermfo3f_lapmin=0;
    oermfo3f_stopStopWatch()
    oermfo3f_stopwatch = {hrs:0,min:0,sec:0}
    document.getElementById('oermfo3f-stopwatch-hrs').innerText ='00'
    document.getElementById('oermfo3f-stopwatch-min').innerText = '00'
    document.getElementById('oermfo3f-stopwatch-sec').innerText = '00'
    document.getElementById('oermfo3f-stopwatch-lap-data').innerText=''
    document.getElementById('oermfo3f-stopwatch-lap-play').classList.remove('fa-pause')
    document.getElementById('oermfo3f-stopwatch-lap-play').classList.add('fa-play')
}


document.getElementById('oermfo3f-stopwatch-lap-flag').onclick = ()=>{
    oermfo3f_addlap()
}
function oermfo3f_addlap(){
    let oermfo3f_ele = document.createElement('div')
    oermfo3f_ele.className = 'oermfo3f-stopwatch-lap-data-obj'
    let oermfo3f_id = document.createElement('label')
    oermfo3f_lapid++
    oermfo3f_id.innerText =oermfo3f_lapid

    let oermfo3f_laptime = document.createElement('label')
    let oermfo3f_ldhr = 24-oermfo3f_laphr
    let oermfo3f_ldmin = 60-oermfo3f_lapmin
    let oermfo3f_ldsec = 60-oermfo3f_lapsec

    let oermfo3f_stdhr = 24-oermfo3f_stopwatch['hrs']
    let oermfo3f_stdmin = 60-oermfo3f_stopwatch['min']
    let oermfo3f_stdsec = 60-oermfo3f_stopwatch['sec']

    let oermfo3f_dhr = Math.abs(oermfo3f_stdhr-oermfo3f_ldhr)
    let oermfo3f_dmin = Math.abs(oermfo3f_stdmin-oermfo3f_ldmin)
    if(oermfo3f_lapmin> oermfo3f_stopwatch['min']) {
        oermfo3f_dmin = oermfo3f_ldmin + oermfo3f_stopwatch['min']
        oermfo3f_dhr--
    }
    let oermfo3f_dsec = Math.abs(oermfo3f_stdsec-oermfo3f_ldsec)
    if(oermfo3f_lapsec>oermfo3f_stopwatch['sec']) {
        oermfo3f_dsec = oermfo3f_ldsec + oermfo3f_stopwatch['sec']
        oermfo3f_dmin--
    }
    oermfo3f_dhr = oermfo3f_dhr.toString().length == 1? '0'+oermfo3f_dhr.toString(): oermfo3f_dhr.toString()
    oermfo3f_dmin = oermfo3f_dmin.toString().length == 1? '0'+oermfo3f_dmin.toString(): oermfo3f_dmin.toString()
    oermfo3f_dsec = oermfo3f_dsec.toString().length == 1? '0'+oermfo3f_dsec.toString(): oermfo3f_dsec.toString()
    oermfo3f_laphr = oermfo3f_stopwatch['hrs']
    oermfo3f_lapmin = oermfo3f_stopwatch['min']
    oermfo3f_lapsec = oermfo3f_stopwatch['sec']

    oermfo3f_laptime.innerText=`${oermfo3f_dhr} : ${oermfo3f_dmin} : ${oermfo3f_dsec}`
    let oermfo3f_overall = document.createElement('label')
    oermfo3f_overall.innerText = `${oermfo3f_stopwatch.hrs.toString().length==1? '0'+oermfo3f_stopwatch.hrs.toString(): oermfo3f_stopwatch.hrs} : `+
        `${oermfo3f_stopwatch['min'].toString().length==1 ? '0'+oermfo3f_stopwatch['min'].toString():oermfo3f_stopwatch['min']} : ${oermfo3f_stopwatch['sec'].toString().length==1? '0'+oermfo3f_stopwatch['sec'].toString():
            oermfo3f_stopwatch['sec']}`
    oermfo3f_ele.append(oermfo3f_id,oermfo3f_laptime,oermfo3f_overall)
    document.getElementById('oermfo3f-stopwatch-lap-data').append(oermfo3f_ele)
}

oermfo3f_paint()
function oermfo3f_paint() {
    document.getElementById('oermfo3f').style.backgroundColor=effective.background
    document.getElementById('oermfo3f').style.color=effective.fontcolor
}
