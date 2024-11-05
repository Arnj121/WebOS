document.getElementById('l43nkd4d-minimize').onclick = ()=>{
    sys.minimizeApp('l43nkd4d')
}
document.getElementById('l43nkd4d-close').onclick= ()=>{
    taskmanager.KillApp('l43nkd4d')
}
let l43nkd4d_rndids = {}
ListImages()
function ListImages() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4){
            let res = JSON.parse(xhr.response)
            displaimages(res)
        }
    }
    xhr.open('GET',`http://localhost:3045/getimages`)
    xhr.send()
}

function displaimages(images) {
    for(let i of Object.keys(images)){
        createImageObj(images[i])
    }
}

function createImageObj(obj) {
    let main = document.createElement('div')
    main.className = 'l43nkd4d-image-page-obj'
    let id = (Math.floor(Math.random() * 1000)).toString()+'rnd'
    l43nkd4d_rndids[id]=[obj['src'],obj['name']]
    let image = document.createElement('img')
    image.src = obj['src']
    image.id=id
    image.className ='l43nkd4d-image'
    image.ondblclick = (e)=>{
        taskmanager.applicationexecutor(l43nkd4d_rndids[e.target.id][1],l43nkd4d_rndids[e.target.id][0])
    }

    let name = document.createElement('label')
    name.innerText = obj['name']
    name.style.gridArea = '2/1/2/1'
    main.append(image,name)
    document.getElementById('l43nkd4d-image-page').append(main)

}
l43nkd4d_paint()
function l43nkd4d_paint() {
    document.getElementById('l43nkd4d').style.backgroundColor = effective.background
    document.getElementById('l43nkd4d').style.color = effective.fontcolor
}
