import React, {Component} from 'react'

export default class Grass extends Component{
    constructor(){
        super()

        this.state = {

            grassClicked: false,
            clicksToCatch: Math.ceil(Math.random() * 10)
        }
    }

    checkGrass() {
        if (!this.state.grassClicked) {
            this.setState({
                grassClicked: true
            })
        } else {
            this.catchPokemon()
        }
    }

    catchPokemon() {
        this.props.catchFn({
            name: this.props.pokemonData.name,
            img: this.props.pokemonData.sprites.front_default
        })
        this.props.refreshFn()
    }


    render(){
        const {pokemonData} = this.props
        const grass = 'https://studio.code.org/media?u=http%3A%2F%2Fi.imgur.com%2FyaxYGuT.png'
        return(
            <div className='grass'>
                <img onClick={() => this.checkGrass()} src={this.state.grassClicked ? pokemonData.sprites.front_default : grass} alt={this.props.pokemonData.name}/>
                {this.state.grassClicked ? <h4>{pokemonData.name}</h4> : <></>}
            </div>
        )
    }
}