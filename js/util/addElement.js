let copyNode = null
const deepCreate = (a,node=null) =>{
    if (a == null || typeof a != 'object'){
        return node;
    }
    const srcComponent = ['img','embed','link','audio','video','iframe']
    for(var i in a){
        const json = a[i]
        const temp = document.createElement(json.element)
        temp.className = json.class || ""
        temp.id = json.id || ""
        if(srcComponent.includes(json.element)){
            temp.src = json.src || ""
            if(json.element == 'img'){
                temp.alt = "Image"
            }
        }
        if(typeof json.content != 'string'){
            deepCreate(json.content,node)
        }else{
            temp.innerHTML = json.content
        }
        if(!node){
            copyNode = temp
            node = temp
        }else{
            node.appendChild(temp)
            node = temp
        }
    }

    return copyNode
}

const addElement =async (key,file) => {
    const keyElement = document.getElementById(key)
    const jsonContent = await fetchDir(file)
    const node = deepCreate(jsonContent)
    
    // console.log("final node :",node)

    keyElement.appendChild(node)
}

const createElement = element => document.createElement(element)
const setElementClass = (node,classname="") =>(node.className=classname,node)
const setElementID = (node,ID) =>(node.id=ID,node)
const setInnerHTML = (node,context) => (node.innerHTML=context,node)
const setName = (node,name)=>(node.name=name,node)
const setClickFunc = (node,funt,arg) =>(node.onclick=()=>funt(arg),node)
const setSrc = (node,src) => (node.src=src,node)
const setHref = (node,href) => (node.href=href,node)
const appendElement = (nodeA,nodeB) => (nodeA.appendChild(nodeB),nodeA)
