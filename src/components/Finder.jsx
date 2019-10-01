import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'

export default class Finder extends Component {
    constructor(){
        super()

        this.state = {
            wildPokemonArr: []
        }
    }

    componentDidMount = () => {
        // the below is going to our local server http://localhost:4040
        // the http part isn't written because we declared the server
        // location in the packages.json file with "proxy".
        axios.get('/api/wild-pokemon').then(res => this.setState({wildPokemonArr: res.data}))
    }

    render(){
        return(
            <div className="finder">
                {this.state.wildPokemonArr.map((el, i) => <Grass key={i + el.name} catchFn={this.props.catchFn} pokemonData={el} refreshFn={this.componentDidMount}/>)}
            </div>
        )
    }
}