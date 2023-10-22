const addSidebar =async (key,file,dir='') => {
    
    const jsonContent = await fetchDir(file)
    const keyElement = document.getElementById(key)
    if(keyElement == null)return;

    let defaultContent =  true
    
    for(var j in jsonContent){
        if(dir==j){
            console.log("TT > ",jsonContent[j])    
            defaultContent = false
            break
        }
    }
    
    if(defaultContent&&jsonContent){
        const currentJson = jsonContent[Object.keys(jsonContent)[0]]
        for(var i in currentJson){
            const node =await fitCurrentStyle(currentJson[i])
            await keyElement.appendChild(node)
        }
    }

}

// export side bar