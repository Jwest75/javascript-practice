const baseUrl = 'https://pokeapi.co/api/v2/pokeman/dragonite';
fetch(baseUrl)
.then(response =>{
    return response.json();
})
.then(data);{
    console.log(data)
}
