const embedHtml = (key,file) =>{
    const container = document.getElementById(key);
    const xhr = new XMLHttpRequest();
    const parser = new DOMParser();

    xhr.open('GET', file, true);
    xhr.onreadystatechange = e=>{
        if (xhr.readyState === 4 && xhr.status === 200) {
            const doc = parser.parseFromString(xhr.responseText, "text/html")
            const scriptTags = doc.querySelectorAll("script")
            scriptTags.forEach(scriptTag => {
                eval(scriptTag.textContent.trim() || "")
            })
            const scriptTagPattern = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
            const content = xhr.response.replace(scriptTagPattern,"")
            container.innerHTML = content
        }
    }
    xhr.send()
}

// export embedHtml