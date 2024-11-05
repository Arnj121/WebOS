document.getElementById('xo23qwrr-minimize').onclick = ()=>{
    sys.minimizeApp('xo23qwrr')
}
document.getElementById('xo23qwrr-close').onclick= ()=>{
    taskmanager.KillApp('xo23qwrr')
}
if(taskmanager.taskmanager['xo23qwrr'].cmdline.length!=0)
    document.getElementById('xo23qwrr-image-view').src = taskmanager.taskmanager['xo23qwrr'].cmdline
else
    console.log('app requires cmdline options')
xo23qwrr_paint()
function xo23qwrr_paint() {
    document.getElementById('xo23qwrr').style.backgroundColor = effective.background
    document.getElementById('xo23qwrr').style.color = effective.fontcolor
}
