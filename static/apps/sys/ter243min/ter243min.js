document.getElementById('ter243min-minimize').onclick = ()=>{
    sys.minimizeApp('ter243min')
}
document.getElementById('ter243min-close').onclick=()=>{
    cmdline.session={}
    taskmanager.KillApp('ter243min')
}
let ter243min_user = 'Guest'
let ter243min_count = -1
let ter243min_ssid=0
let ter243min_pointer=-1
function ter243min_init() {
    cmdline.createSession()
    if (user.IsloggedIn()){
        ter243min_user = user.getName()
    }
    let ter243min_lab = document.createElement('label')
    ter243min_lab.innerText = "WebOS v1.0.0\n\nCLI interface designed for the webOS.\n\n"
    document.getElementById('ter243min-main-page').append(ter243min_lab)
}

function ter243min_addconsole(){
    try {
        document.getElementById('ter243min_input'+ter243min_count).disabled=true
    }
    catch (e){}
    //add the output lines here
    let ter243min_div = document.createElement('div')
    let ter243min_lab = document.createElement('label')
    let ter243min_input = document.createElement('input')
    ter243min_div.className = 'ter243min_div'
    ter243min_lab.className = 'ter243min_lab'
    ter243min_count++;
    ter243min_input.id = 'ter243min_input'+ter243min_count
    ter243min_input.addEventListener('keydown',async (e)=>{
        if (e.key=='Enter') {
            cmdline.history.push(e.target.value)
            await ter243min_process_console(e.target.value)
            ter243min_addconsole()
        }
        else if(e.key=='ArrowUp'){
            if(ter243min_pointer >=0) {
                document.getElementById('ter243min_input' + ter243min_count).value = cmdline.history[ter243min_pointer]
                ter243min_pointer--
                if(ter243min_pointer==-1){
                    ter243min_pointer=0
                }
            }
        }
        else if(e.key=='ArrowDown'){
            ter243min_pointer++
            if(ter243min_pointer <=cmdline.history.length-1){
                document.getElementById('ter243min_input' + ter243min_count).value = cmdline.history[ter243min_pointer]
            }
            else ter243min_pointer = cmdline.history.length-1
        }
    })
    ter243min_input.className = 'ter243min_console_input'
    ter243min_lab.innerText=ter243min_user+`@${cmdline.session.cwd}>> `
    ter243min_div.append(ter243min_lab,ter243min_input)
    document.getElementById('ter243min-main-page').append(ter243min_div)
    ter243min_input.focus()
}
async function ter243min_process_console(input){
    let ter243minlbl = await cmdline.processInput(input)
    ter243min_pointer++;
    let ter243min_v = document.createElement('label')
    if (ter243minlbl.msg.length >0) {
        ter243min_v.innerHTML = ter243minlbl.msg
        document.getElementById('ter243min-main-page').append(ter243min_v)
    }
}

function ter243min_write_output(output){
    let ter243min_out = document.createElement('label')
    ter243min_out.innerText = output
    document.getElementById('ter243min-main-page').append(ter243min_out)

}

ter243min_init()
ter243min_addconsole()