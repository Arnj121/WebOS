var njk39c3ce_display=''
var njk39c3ce_evaldisplay = ''
var njk39c3ce_memory=''
var njk39c3ce_focused=0
var njk39c3ce_numbers= ['1','2','3','4','5','6','7','8','9','0','/','*','-','+','.']
document.getElementById('njk39c3ce-minimize').onclick = ()=>{
    sys.minimizeApp('njk39c3ce')
}
document.getElementById('njk39c3ce-close').onclick = ()=>{
    taskmanager.KillApp('njk39c3ce')
}
document.getElementById('njk39c3ce-input-screen').onfocus=()=>{
    njk39c3ce_focused=1
}
document.getElementById('njk39c3ce-input-screen').oninput = (e)=>{
    njk39c3ce_display = e.target.value.replaceAll('*','x')
    njk39c3ce_evaldisplay=e.target.value.replaceAll('x','*')
    console.log(njk39c3ce_evaldisplay);
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-1').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-2').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-3').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-4').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-5').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-6').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-7').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-8').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-9').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-0').onclick = (e)=>{
    njk39c3ce_display+=e.target.id.split('-')[2]
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-dot').onclick = (e)=>{
    njk39c3ce_display+='.'
    njk39c3ce_evaldisplay+=e.target.id.split('-')[2]
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-c').onclick = (e)=>{
    njk39c3ce_display=''
    njk39c3ce_evaldisplay=''
    njk39c3ce_displayscreen()
    document.getElementById('njk39c3ce-answer').innerText=''
}
document.getElementById('njk39c3ce-numbers-m+').onclick = (e)=>{
    njk39c3ce_memory=document.getElementById('njk39c3ce-answer').innerText
}
document.getElementById('njk39c3ce-numbers-mc').onclick = (e)=>{
    njk39c3ce_memory=''
}
document.getElementById('njk39c3ce-numbers-mr').onclick = (e)=>{
    njk39c3ce_display+=njk39c3ce_memory
    njk39c3ce_evaldisplay+=njk39c3ce_memory
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-minus').onclick = (e)=>{
    njk39c3ce_display+='-'
    njk39c3ce_evaldisplay+='-'
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-times').onclick = (e)=>{
    njk39c3ce_display+='x'
    njk39c3ce_evaldisplay+='*'
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-divide').onclick = (e)=>{
    njk39c3ce_display+='/'
    njk39c3ce_evaldisplay+='/'
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-plus').onclick = (e)=>{
    njk39c3ce_display+='+'
    njk39c3ce_evaldisplay+='+'
    njk39c3ce_displayscreen()
}
document.getElementById('njk39c3ce-numbers-equals').onclick = (e)=>{
    njk39c3ce_calculate()
}
njk39c3ce_paint()
keyupPipeline['njk39c3ce']=[njk39c3ce_typer]
function njk39c3ce_displayscreen() {
    document.getElementById('njk39c3ce-input-screen').value=njk39c3ce_display
}
function njk39c3ce_calculate() {
    let res
    try {
        console.log(njk39c3ce_evaldisplay)
        res = eval(njk39c3ce_evaldisplay)
        document.getElementById('njk39c3ce-answer').innerText = res
    }
    catch (e) {
        document.getElementById('njk39c3ce-answer').innerText ='Error'

    }
}
function njk39c3ce_typer(e) {
    if(sys.isfoucused('njk39c3ce')) {
        if (njk39c3ce_numbers.indexOf(e.key) != -1) {
            njk39c3ce_display += e.key
            njk39c3ce_evaldisplay += e.key
            njk39c3ce_displayscreen()
        } else if (e.key == 'Enter' || e.key == 'Equal') {
            njk39c3ce_calculate()
        } else if (e.key == 'Backspace') {
            njk39c3ce_display = njk39c3ce_display.substring(0, njk39c3ce_display.length - 1)
            njk39c3ce_evaldisplay = njk39c3ce_evaldisplay.substring(0, njk39c3ce_evaldisplay.length - 1)
            njk39c3ce_displayscreen()
        }
    }
}
function njk39c3ce_paint() {
    document.getElementById('njk39c3ce').style.backgroundColor = effective.background
    document.getElementById('njk39c3ce').style.color = effective.fontcolor

    document.getElementById('njk39c3ce-input-screen').style.color = effective.fontcolor

}
