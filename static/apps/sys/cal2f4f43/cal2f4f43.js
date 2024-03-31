var cal2f4f43_contract=0,cal2f4f43_date_selected=0
var cal2f4f43_curtab='cal2f4f43-side-bar-month-page'
var cal2f4f43_d = new Date()
var cal2f4f43_year=cal2f4f43_d.getFullYear(),cal2f4f43_month=cal2f4f43_d.getMonth(),cal2f4f43_day=cal2f4f43_d.getDate()
var cal2f4f43_monthList={0:'January',1:'February',2:'March',3:'April',4:'May',5:'June',
    6:'July',7:'August',8:'September',9:'October',10:'November',11:'December'};
var cal2f4f43_Months={},cal2f4f43_data=0
document.getElementById('cal2f4f43-minimize').onclick = ()=>{
    sys.minimizeApp('cal2f4f43')
}
document.getElementById('cal2f4f43-close').onclick = ()=>{
    taskmanager.KillApp('cal2f4f43')
}

document.getElementById('cal2f4f43-side-bar-contract').onclick = ()=>{
    if(cal2f4f43_contract){
        cal2f4f43_contract=0
        document.getElementById('cal2f4f43-side-bar').style.animationName='side-bar-contract'
    }
    else{
        cal2f4f43_contract=1
        document.getElementById('cal2f4f43-side-bar').style.animationName='side-bar-expand'
    }
}

document.getElementById('cal2f4f43-side-bar-month').onclick =()=>{
    document.getElementById(cal2f4f43_curtab).style.display='none'
    cal2f4f43_curtab = 'cal2f4f43-side-bar-month-page'
    document.getElementById(cal2f4f43_curtab).style.display='flex'
    cal2f4f43_removemonth()
    cal2f4f43_createcalender(cal2f4f43_year)
    cal2f4f43_displaymonth(0,cal2f4f43_year)
}
document.getElementById('cal2f4f43-side-bar-year').onclick =()=>{
    document.getElementById('cal2f4f43-side-bar-star').style.display='none'
    document.getElementById(cal2f4f43_curtab).style.display='none'
    cal2f4f43_curtab = 'cal2f4f43-side-bar-year-page'
    document.getElementById(cal2f4f43_curtab).style.display='flex'
    cal2f4f43_destroycalender()
    cal2f4f43_showcalender(cal2f4f43_year)
}
document.getElementById('cal2f4f43-side-bar-starred').onclick =()=>{
    if(sys.settings.controlpannel.loggedin!=0) {
        document.getElementById('cal2f4f43-side-bar-star').style.display='none'
        document.getElementById(cal2f4f43_curtab).style.display = 'none'
        cal2f4f43_curtab = 'cal2f4f43-side-bar-starred-page'
        document.getElementById(cal2f4f43_curtab).style.display = 'flex'
        document.getElementById('cal2f4f43-side-bar-starred-page').innerText=''
        let keys = Object.keys(cal2f4f43_data.starred)
        if(keys.length>0){
            for(let i=0;i<keys.length;i++){
                createStarredObject(keys[i],cal2f4f43_data.starred[keys[i]])
            }
        }
        else{
            document.getElementById('cal2f4f43-side-bar-starred-page').innerHTML="<label style='margin: auto;font-size: large;color: #4e68ee'>Nothing starred yet</label>"
        }
    }
}
function createEventObj(key,obj){
    let div = document.createElement('div')
    div.className = 'cal2f4f43-flex-column'
    div.style.borderRadius='5px'
    div.style.border='thin solid #d1d1d0'
    div.style.margin='5px 10px'
    div.style.padding='5px'
    let name = document.createElement('div')
    name.className='cal2f4f43-flex-row'
    name.innerHTML="<label style='margin: auto 5px'>Event name</label>" +
        "<label style='margin: auto 5px auto 30px;'>"+obj.name+"</label>"
    name.style.margin= '5px'

    let place = document.createElement('div')
    place.className='cal2f4f43-flex-row'
    place.innerHTML="<label style='margin: auto 5px'>Event place <i class='fal fa-location-arrow' style='margin: auto 5px'></i></label>" +
        "<label style='margin: auto 5px;text-underline: #252524;text-underline-mode: solid'>"+obj.place+"</label>"
    place.style.margin = '5px'

    let date = document.createElement('div')
    date.className='cal2f4f43-flex-row'
    date.innerHTML="<label style='margin: auto 5px'>Event place <i class='fal fa-calendar-day' style='margin: auto 5px'></i></label>" +
        "<label style='margin: auto 5px;text-underline: #252524;text-underline-mode: solid'>"+obj.date+"</label>"
    date.style.margin='5px'

    let edit = document.createElement('label')
    edit.style.display='block'
    edit.innerHTML = "<i class='fal fa-edit' style='margin: auto 5px'></i> <label>Edit</label>"
    edit.style.margin = '10px auto'
    edit.style.textAlign='center'
    edit.style.backgroundColor = '#2962ff'
    edit.style.borderRadius='5px'
    edit.style.padding ='5px 10px'
    edit.style.color='white'

    let del = document.createElement('label')
    del.style.display='block'
    del.innerHTML = "<i class='fal fa-trash-alt' style='margin: auto 5px'></i><label>Delete</label>"
    del.style.margin = '10px auto'
    del.style.textAlign='center'
    del.style.backgroundColor = '#ff0428'
    del.style.borderRadius='5px'
    del.style.padding ='5px 10px'
    del.style.color='white'
    div.append(name,place,date,edit,del)
    document.getElementById('cal2f4f43-side-bar-event-page').append(div)
}

document.getElementById('cal2f4f43-side-bar-event').onclick =()=> {
    if (sys.settings.controlpannel.loggedin != 0) {
        document.getElementById('cal2f4f43-side-bar-star').style.display='none'
        document.getElementById(cal2f4f43_curtab).style.display = 'none'
        cal2f4f43_curtab = 'cal2f4f43-side-bar-event-page'
        document.getElementById(cal2f4f43_curtab).style.display = 'flex'
        document.getElementById('cal2f4f43-side-bar-event-page').innerText =''
        let lbl = document.createElement('label');lbl.innerText = 'My Events'
        lbl.style.margin ='5px auto 5px 5px';lbl.style.backgroundColor='#2962ff';lbl.style.borderRadius='50px';
        lbl.style.padding ='5px 10px';lbl.style.color='white'
        document.getElementById('cal2f4f43-side-bar-event-page').append(lbl)
        let keys = Object.keys(cal2f4f43_data.events)
        if(keys.length>0){
            for(let i=0;i<keys.length;i++){
                createEventObj(keys[i],cal2f4f43_data.events[keys[i]])
            }
        }
        else{
            document.getElementById('cal2f4f43-side-bar-event-page').innerHTML = "<label style='margin: auto;color: #2962FF;'></label>"
        }
    }
}
document.getElementById('cal2f4f43-side-bar-events').onclick =()=> {
    if (sys.settings.controlpannel.loggedin != 0) {
        document.getElementById('cal2f4f43-side-bar-star').style.display='none'
        document.getElementById(cal2f4f43_curtab).style.display = 'none'
        cal2f4f43_curtab = 'cal2f4f43-side-bar-events-page'
        document.getElementById(cal2f4f43_curtab).style.display = 'flex'
    }
}
cal2f4f43_paint()
if(datamanager.hasreadAccess('cal2f4f43')){
    datamanager.load('cal2f4f43',(res)=>{
        console.log(res)
        cal2f4f43_data=res
        if(cal2f4f43_data && !('starred' in cal2f4f43_data))
            cal2f4f43_data['starred']={}
        if(cal2f4f43_data && !('events' in cal2f4f43_data))
            cal2f4f43_data['events']={}
        cal2f4f43_createcalender(cal2f4f43_year)
        cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
    })
}
else{
    appmanager.requestPermission('cal2f4f43','read',(res)=>{
        if(res){
            datamanager.load('cal2f4f43',(res)=>{
                cal2f4f43_data=res
                cal2f4f43_createcalender(cal2f4f43_year)
                cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
            })
        }
        else{
            cal2f4f43_createcalender(cal2f4f43_year)
            cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
        }
    })
}


function cal2f4f43_createcalender(year){
    cal2f4f43_Months={}
    let d = new Date(year,0,1)
    while(d.getFullYear()!=year+1){
        let t =d.getMonth()
        let month = {'month':d.getMonth(),'days':[],'start':d.getDay()}
        while(month['month']==d.getMonth()){
            month['days'].push(d.getDate())
            d.setDate(d.getDate()+1)
        }
        cal2f4f43_Months[t]=month
    }
}

function cal2f4f43_createmonth(obj,year){
    let week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    let ele = document.createElement('div')
    ele.className = 'cal2f4f43-calenderobj-month'
    ele.id = cal2f4f43_monthList[obj.month]
    document.getElementById('cal2f4f43-side-bar-month-page-month').innerText = cal2f4f43_monthList[obj.month]
    document.getElementById('cal2f4f43-side-bar-month-page-year').innerText = year
    let calhead = document.createElement('div')
    calhead.className = 'cal2f4f43-calenderheader-month'

    let calweek =document.createElement('div')
    calweek.className= 'cal2f4f43-calenderweek-month'

    for(let i=0;i<7;i++){
        let span = document.createElement('div')
        span.innerText = week[i]
        span.className='cal2f4f43-calenderweektext-month'
        span.style.width='70px'
        span.style.height='48px'
        span.style.color = '#2962FF'
        calweek.append(span)
    }
    calhead.append(calweek)
    ele.append(calhead)
    let days = document.createElement('div')
    days.className = 'cal2f4f43-calenderdays-month'

    if(obj.start==0)
        obj.start=7
    for(let i=1;i<obj.start;i++){
        let span = document.createElement('div')
        span.innerText='  '
        span.className='cal2f4f43-calendertext-month'
        span.style.width='70px'
        span.style.height='58px'
        days.append(span)
    }
    let d = new Date()
    for(let i=0;i<obj.days.length;i++){
        let span = document.createElement('span')
        span.innerText = obj.days[i]
        span.className='cal2f4f43-calendertext-month'
        span.style.width='70px'
        span.style.height='68px'
        span.style.color = '#FF3D00'
        span.id=`cal2f4f43-calendertext-${year}-${obj.month}-${obj.days[i]}`
        span.onclick=(e)=>{
            let id = e.target.id.split('-')
            if(cal2f4f43_data!=0 && `${id[2]}${id[3]}${id[4]}` in cal2f4f43_data['starred']){
                if(cal2f4f43_date_selected !=0){
                    document.getElementById(cal2f4f43_date_selected).style.borderStyle='hidden'
                }
                cal2f4f43_date_selected=e.target.id
                document.getElementById('cal2f4f43-side-bar-star').classList.remove('fal')
                document.getElementById('cal2f4f43-side-bar-star').classList.add('fas')
                document.getElementById('cal2f4f43-side-bar-star').style.display='inline'
                document.getElementById(cal2f4f43_date_selected).style.borderStyle='solid'
            }
            else if(cal2f4f43_data!=0){
                if(cal2f4f43_date_selected !=0){
                    document.getElementById(cal2f4f43_date_selected).style.borderStyle='hidden'
                }
                cal2f4f43_date_selected=e.target.id
                document.getElementById('cal2f4f43-side-bar-star').classList.remove('fas')
                document.getElementById('cal2f4f43-side-bar-star').classList.add('fal')
                document.getElementById('cal2f4f43-side-bar-star').style.display='inline'
                document.getElementById(cal2f4f43_date_selected).style.borderStyle='solid'
            }
        }
        if(d.getMonth() == obj.month && d.getFullYear() == year && d.getDate()==obj.days[i]) {
            span.style.color = '#2962FF'
            span.style.fontWeight='bold'
        }
        days.append(span)
    }
    ele.append(days)
    document.getElementById('cal2f4f43-side-bar-month-page-months').append(ele)
}
function cal2f4f43_displaymonth(month,year) {
    cal2f4f43_createmonth(cal2f4f43_Months[month],year)
}
function cal2f4f43_removemonth(){
    document.getElementById('cal2f4f43-side-bar-month-page-months').innerText=''
}
document.getElementById('cal2f4f43-side-bar-events-page-create').onclick = ()=>{
    let name = document.getElementById('cal2f4f43-side-bar-events-page-name').value
    let location = document.getElementById('cal2f4f43-side-bar-events-page-place').value
    let date = document.getElementById('cal2f4f43-side-bar-events-page-date').value
    cal2f4f43_data.events[Math.floor(Math.random()*1000)] = {'name':name,'place':location,'date':date}
    datamanager.save('cal2f4f43',cal2f4f43_data)
    document.getElementById('cal2f4f43-side-bar-event').click()
    sys.notify('cal2f4f43','An event has been added')
}
document.getElementById('cal2f4f43-side-bar-star').onclick = ()=>{
    let s = cal2f4f43_date_selected.split('-')
    if(cal2f4f43_data!=0 && `${s[2]}${s[3]}${s[4]}` in cal2f4f43_data.starred){
        delete cal2f4f43_data.starred[`${s[2]}${s[3]}${s[4]}`]
        document.getElementById('cal2f4f43-side-bar-star').classList.remove('fas')
        document.getElementById('cal2f4f43-side-bar-star').classList.add('fal')
    }
    else{
        cal2f4f43_data.starred[`${s[2]}${s[3]}${s[4]}`]=`${s[2]}-${s[3]}-${s[4]}`
        document.getElementById('cal2f4f43-side-bar-star').classList.remove('fal')
        document.getElementById('cal2f4f43-side-bar-star').classList.add('fas')
    }
    console.log(cal2f4f43_data)
    datamanager.save('cal2f4f43',cal2f4f43_data)
}
document.getElementById('cal2f4f43-side-bar-month-page-prev').onclick = ()=>{
    cal2f4f43_removemonth()
    cal2f4f43_month-=1
    if(cal2f4f43_month==-1) {
        cal2f4f43_year-=1
        cal2f4f43_month=11
        cal2f4f43_createcalender(cal2f4f43_year)
        cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
    }
    else
        cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
}
document.getElementById('cal2f4f43-side-bar-month-page-next').onclick = ()=>{
    cal2f4f43_removemonth()
    cal2f4f43_month+=1
    if(cal2f4f43_month==12) {
        cal2f4f43_year+=1
        cal2f4f43_month=0
        cal2f4f43_createcalender(cal2f4f43_year)
        cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
    }
    else
        cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
}

document.getElementById('cal2f4f43-side-bar-month-page-now').onclick = ()=>{
    cal2f4f43_removemonth()
    cal2f4f43_year=cal2f4f43_d.getFullYear()
    cal2f4f43_createcalender(cal2f4f43_year)
    cal2f4f43_month=cal2f4f43_d.getMonth()
    cal2f4f43_displaymonth(cal2f4f43_month,cal2f4f43_year)
}

function createStarredObject(key,value) {
    let div= document.createElement('div')
    div.style.margin= '10px'
    div.style.border= 'thin solid #d1d1d0'
    div.style.borderRadius='5px'
    div.className='cal2f4f43-flex-row'
    div.style.padding='5px'
    let ic = document.createElement('i')
    ic.className = 'fas fa-star'
    ic.id =key+'--'+value+'--star'
    ic.onclick = (e)=>{
        let id = e.target.id.split('--')
        if(id[0] in cal2f4f43_data.starred){
            document.getElementById(e.target.id).classList.remove('fas')
            document.getElementById(e.target.id).classList.add('fal')
            delete cal2f4f43_data.starred[id[0]]
        }
        else{
            document.getElementById(e.target.id).classList.remove('fal')
            document.getElementById(e.target.id).classList.add('fas')
            cal2f4f43_data.starred[id[0]] = id[1]
        }
        console.log(cal2f4f43_data)
    }
    ic.style.margin = 'auto 20px auto 5px'
    let dateic = document.createElement('i')
    dateic.className = 'fal fa-calendar-star'
    dateic.style.margin ='auto 5px'

    let date= document.createElement('label')
    date.style.margin = 'auto 5px'
    date.innerText = value
    div.append(ic,dateic,date)
    document.getElementById('cal2f4f43-side-bar-starred-page').append(div)
}

function cal2f4f43_showcalender(year){
    document.getElementById('cal2f4f43-side-bar-year-page-year').innerText=year
    let d = new Date(year,0,1)
    while(d.getFullYear()!=year+1){
        let month = {'month':d.getMonth(),'days':[],'start':d.getDay()}
        while(month['month']==d.getMonth()){
            month['days'].push(d.getDate())
            d.setDate(d.getDate()+1)
        }
        cal2f4f43_createmonthyear(month,cal2f4f43_year)
    }
}

function cal2f4f43_createmonthyear(obj,year){
    let week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

    let ele = document.createElement('div')
    ele.className = 'cal2f4f43-calenderobj'
    ele.id = cal2f4f43_monthList[obj.month]

    let calhead = document.createElement('div')
    calhead.className='cal2f4f43-calenderheader'

    let calmonth = document.createElement('label')
    calmonth.innerText=cal2f4f43_monthList[obj['month']]
    calmonth.style.fontSize = 'large'
    calmonth.style.color = '#AA00FF'
    calmonth.style.textAlign='center'
    calmonth.style.marginBottom='10px'
    calhead.append(calmonth)

    let calweek =document.createElement('div')
    calweek.className= 'cal2f4f43-calenderweek'

    for(let i=0;i<7;i++){
        let span = document.createElement('div')
        span.innerText = week[i]
        span.className='cal2f4f43-calenderweektext'
        span.style.width='42px'
        span.style.height='30px'
        span.style.color = '#2962FF'
        calweek.append(span)
    }
    calhead.append(calweek)
    ele.append(calhead)
    let days = document.createElement('div')
    days.className = 'cal2f4f43-calenderdays'

    if(obj.start==0)
        obj.start=7
    for(let i=1;i<obj.start;i++){
        let span = document.createElement('div')
        span.innerText='  '
        span.className='cal2f4f43-calendertext'
        span.style.width='42px'
        span.style.height='40px'
        days.append(span)
    }
    let d = new Date()
    for(let i=0;i<obj.days.length;i++){
        let span = document.createElement('span')
        span.innerText = obj.days[i]
        span.className='cal2f4f43-calendertext'
        span.style.width='42px'
        span.style.height='40px'
        span.style.color = '#FF3D00'
        if(d.getMonth() == obj.month && d.getFullYear() == year && d.getDate()==obj.days[i]) {
            span.style.color = '#2962FF'
            span.style.fontWeight='bold'
        }
        days.append(span)
    }
    ele.append(days)
    document.getElementById('cal2f4f43-side-bar-year-page-years').append(ele)
}

function cal2f4f43_destroycalender(){
    document.getElementById('cal2f4f43-side-bar-year-page-years').innerText=''
}
document.getElementById('cal2f4f43-side-bar-year-page-prev').onclick = ()=>{
    cal2f4f43_destroycalender()
    cal2f4f43_year-=1
    cal2f4f43_showcalender(cal2f4f43_year)
}
document.getElementById('cal2f4f43-side-bar-year-page-next').onclick = ()=>{
    cal2f4f43_destroycalender()
    cal2f4f43_year+=1
    cal2f4f43_showcalender(cal2f4f43_year)
}
document.getElementById('cal2f4f43-side-bar-year-page-now').onclick = ()=>{
    cal2f4f43_destroycalender()
    cal2f4f43_year=cal2f4f43_d.getFullYear()
    cal2f4f43_showcalender(cal2f4f43_year)
}
function cal2f4f43_paint() {
    document.getElementById('cal2f4f43').style.backgroundColor=effective.background
    document.getElementById('cal2f4f43').style.color=effective.fontcolor
}
