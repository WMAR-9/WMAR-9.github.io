const fetchData =(method,url,data=null,config={}) =>{
    let temp = null


// fetch(url, {
//   method: "GET",
//   mode: "cors", // Enable CORS
//   headers: {
//     "Content-Type": "application/json", // Set your request headers here
//     // Additional headers if needed
//   },
// })
//   .then((response) => {
//     console.log(response)
//     response.json()
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
    const xhr = new XMLHttpRequest()

    xhr.open("GET", url, true)
    
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
    xhr.withCredentials = true;
    for (const header in config.headers) {
      xhr.setRequestHeader(header, config[header])
    }

    xhr.onload = () =>{
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          
          temp = data
        } else {

          console.error('There was a problem with the request:', xhr.status, xhr.statusText);
        }
      }
    };
    xhr.send();
    
    return temp
}
