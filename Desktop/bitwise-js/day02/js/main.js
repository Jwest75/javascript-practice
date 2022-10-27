const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?character=homer';
fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    console.log (data);
    const img = document.createElement('img');
    img.src = data[0].image;
    document.body.append(img);
    const h3 = document.createElement('h3');
    h3.innerHTML = `Name: ${data[0].character} <br>
    Quote: ${data[0].quote}`
    document.body.append(h3);
})