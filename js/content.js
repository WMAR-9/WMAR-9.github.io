fetch("../json/content.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
});