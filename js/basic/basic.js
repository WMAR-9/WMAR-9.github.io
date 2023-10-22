const clone = a =>{
    if (a == null || typeof a != 'object' || a instanceof Image) {
        return a;
    }
    const b = Array.isArray(a)?[]:{};
    for (let key in a) {
        b[key] = clone(a[key]);
    }
    return b;
}
const hashString = str=> {
    const sha256 = new TextEncoder("utf-8").encode(str);
    return crypto.subtle.digest("SHA-256", sha256)
      .then(buffer => {
        return Array.from(new Uint8Array(buffer))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
    });
}

// hashString("AFASTE").then(e=>console.log(e.substring(0,32)))