const axios = require('axios')

module.exports = {
    getWildPokemon: (req, res) => {
        const pokemonArr = []
        const rand1 = Math.ceil(Math.random() * 151)
        const rand2 = Math.ceil(Math.random() * 151)
        const rand3 = Math.ceil(Math.random() * 151)
        // the setup below is to cover the fact that all 3 calls will take time to be run.
        // So with this setup, once the first call finishes, it runs the second. Then the third.
        // Then when all three have run, it will finally send the data.
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`).then(result => {
            pokemonArr.push(result.data)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`).then(result => {
                pokemonArr.push(result.data)
                axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`).then(result => {
                    pokemonArr.push(result.data)
                    res.status(200).send(pokemonArr)
                })
            })
        })
    }
}