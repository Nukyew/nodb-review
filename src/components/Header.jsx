import React from 'react'
import theme from '../assets/theme.m4a'

export default function Header(props) {
    const audio = new Audio(theme)
    return(
        <header>
            <h1 onClick={() => audio.play()}>Pokemon Catcher 2000</h1>
            {/* <img src={props.image}/> */}
            <button class="snipcart-add-item"
                    data-item-name="Yearly Drop"
                    data-item-id="yearly-drop"
                    data-item-url="https://thecarddrop.com/api/products/yearly-drop"
                    data-item-price="20.00"
                    data-item-payment-interval="Year"
                    >
                    Subscribe now!
                </button>
                <button
                    class="snipcart-add-item"
                    data-item-id="2"
                    data-item-name="Bacon"
                    data-item-price="50.00"
                    data-item-url="https://thecarddrop.com/api/products"
                    data-item-description="Some fresh bacon">
                    Buy bacon
                </button>
        </header>
    )
}