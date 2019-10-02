import React from 'react'
import theme from '../assets/theme.m4a'

export default function Header(props) {
    const audio = new Audio(theme)
    return(
        <header>
            <h1 onClick={() => audio.play()}>Pokemon Catcher 2000</h1>
            {/* <img src={props.image}/> */}
            <button class="snipcart-add-item"
                    data-item-name="My Subscription"
                    data-item-id="subscription"
                    data-item-url="https://thecarddrop.com/"
                    data-item-price="20.00"
                    data-item-payment-interval="Month"
                    data-item-payment-interval-count="2"
                    data-item-payment-trial="10">
                    Subscribe now!
                </button>
                <button
                    class="snipcart-add-item"
                    data-item-id="2"
                    data-item-name="Bacon"
                    data-item-price="50.00"
                    data-item-url="/api/products"
                    data-item-description="Some fresh bacon">
                    Buy bacon
                </button>
        </header>
    )
}