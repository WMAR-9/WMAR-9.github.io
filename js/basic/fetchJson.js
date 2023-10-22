const fetchDir =async dir =>{
    let temp = null
    await fetch(dir).then(response => response.json())
      .then(data => {
        temp=data
      })
      .catch(error => {
          console.log(`fetch [${dir}] error: ${error}`)
      }); 
    return temp
}