//https://enka.network/api/uid/800800457
fetch("json/test.json")
.then(response => {
    return response.json()
})
.then(data => {
    const a = document.createElement('a')
    a.textContent = data.name
    a.href = data.link
    document.getElementById('test').appendChild(a)
    console.log(data)
})
.catch(error => {
    console.log(error)
})