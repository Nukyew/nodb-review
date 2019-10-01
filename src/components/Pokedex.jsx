import React from 'react'
import Pokemon from './Pokemon'

export default (props) => {
    return(
        <div className="pokedex">
            {props.pokemonList.map(el => {
                return <Pokemon id={el.id} saveFn={props.saveFn} key={el.id} name={el.name} img={el.img} releaseFn={props.releaseFn}/>
            })}
        </div>
    )
}