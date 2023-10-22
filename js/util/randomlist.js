const addSuggestion =async (key,file,tag) =>{
    
    const jsonContent = await fetchDir(file)
    
    const keyElement = document.getElementById(key)
   
    if(keyElement == null||jsonContent==null)return;

    console.log("add suggestion",jsonContent)

    console.log("tag : ",tag)
    

}

//export addSuggestion