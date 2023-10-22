const fitCurrentStyle =async jsonData => {

    const modalID = await hashString(new Date().getTime().toString())

    const node = setElementClass(createElement('div'),"col-4")
    
    let art = setElementClass(createElement('div'),"art")
    
    const img = setSrc(setElementClass(createElement('img'),"thumbnail"),jsonData.Thumbnail||"../img/icon.png")

    const overlay = setClickFunc(setElementClass(createElement('div'),"overlay bg-tangoblue"),showModal,modalID)

    art = appendElement(art,overlay)
    art = appendElement(art,img)
    
    let modal = setElementID(setElementClass(createElement('div'),"modal bg-dark"),modalID)

    let slideContainer = setElementClass(createElement('div'),"slide-container")

    const slideContent = []

    
    if(jsonData.Cover.length && jsonData.Cover instanceof Array){
      jsonData.Cover.forEach((e,i)=>{
        let tempLink = setHref(setElementClass(createElement('a'),`slide${i==0?" active":""}`),jsonData.Link)
        tempLink.title = `Play ${jsonData.Title}`
        const tempImg = setSrc(createElement('img'),e)
        tempLink = appendElement(tempLink,tempImg)
        slideContent.push(setName(tempLink,modalID))
      })
    }

    const nextBtn = setClickFunc(setInnerHTML(setElementClass(createElement('div'),"prev tx-lightgreen"),"&#10094"),showSlides,{key:modalID,val:-1})
    const prevBtn = setClickFunc(setInnerHTML(setElementClass(createElement('div'),"next tx-lightgreen"),"&#10095"),showSlides,{key:modalID,val:1})

    const closseBtn = setClickFunc(setInnerHTML(setElementClass(createElement('div'),"close"),"&times"),closeModal,modalID)

    const description = setInnerHTML(setElementClass(createElement('div'),"description bg-tangoblue tx-white"),jsonData.Description||"")

    slideContent.push(nextBtn)
    slideContent.push(prevBtn)
    slideContent.push(closseBtn)
    slideContent.push(description)
    
    for(var i of slideContent){
        slideContainer = appendElement(slideContainer,i)
    }


    modal = appendElement(modal,slideContainer)
    
    

    art = appendElement(art,modal)
    

    let itemContent = setElementClass(createElement('div'),"itemContent tx-white borderRadius")
    
    const title = setElementClass(createElement('div'),"margin-2 tx-center tx-size tx-lightgreen tx_bold")

    const author = setElementClass(createElement('div'),"margin-2")
        
    const total = [art,setInnerHTML(title,jsonData.Title),setInnerHTML(author,`👺 ${jsonData.Author}`)]

    for (var i of jsonData.Type){
        const tempNode = setElementClass(createElement('div'),"tag-type bg-tangoblue")
        total.push(setInnerHTML(tempNode,i))
    }

    total.push(createElement('hr'))

    for (var i of jsonData.SkillTag){
        const tempNode = setElementClass(createElement('div'),"tag-skill bg-orange")
        total.push(setInnerHTML(tempNode,i))
    }
    

    for(var i of total){
        itemContent = appendElement(itemContent,i)
    }

    return appendElement(node,itemContent)
}

const addContent =async (key,file,dir='') => {
    
    const jsonContent = await fetchDir(file)
    const keyElement = document.getElementById(key)
    

    let defaultContent =  true
    
    for(var j in jsonContent){

        if(dir==j){
            
            for(var i in jsonContent[j]){

                const node =await fitCurrentStyle(jsonContent[j][i])
                await keyElement.appendChild(node)
            }
            break
        }
    }

    // if(defaultContent&&jsonContent){
    //     const currentJson = jsonContent[Object.keys(jsonContent)[0]]
    //     for(var i in currentJson){
    //         const node =await fitCurrentStyle(currentJson[i])
    //         await keyElement.appendChild(node)
    //     }
    // }

}
