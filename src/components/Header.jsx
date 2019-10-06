import React from 'react'
import theme from '../assets/theme.m4a'
import axios from 'axios'

export default class Header extends React.Component {
    state = {
        itemsInCart: 0
    }

    componentDidMount = async () => {
        let num = this.state.itemsInCart
        await axios.post('/api/customer/1', {num}).then(res => res.data)
    }

    addItem() {
        this.setState({
            itemsInCart: 1 + this.state.itemsInCart
        })
    }

    reset() {
        this.setState({
            itemsInCart: 0
        })
    }

    async save() {
        let num = this.state.itemsInCart
        await axios.post('/api/customer/1', {num}).then(res => res.data)
    }

    render(){
        const audio = new Audio(theme)
        let totalPrice = this.state.itemsInCart * 50
        let totalPriceBox = this.state.itemsInCart * 20
        console.log(totalPrice)
        return(
            <header>
                <h1 onClick={() => audio.play()}>Pokemon Catcher 2000</h1>
                <button class="snipcart-add-item"
                        data-item-name="Yearly Drop"
                        data-item-id="yearly-drop"
                        data-item-url="https://thecarddrop.com/api/products/yearly-drop"
                        data-item-price={`${totalPriceBox}`}
                        data-item-payment-interval="Year"
                        >
                        Subscribe now!
                    </button>
                    {/* <button
                        class="snipcart-add-item"
                        data-item-id="2"
                        data-item-name="Bacon"
                        data-item-price={`${totalPrice}`}
                        data-item-url="https://thecarddrop.com/api/products/bacon"
                        data-item-description="Some fresh bacon">
                        Buy bacon
                    </button> */}
                    <button
                        class="snipcart-add-item"
                        data-item-id="2"
                        data-item-name="Bacon"
                        data-item-price="80"
                        data-item-url="https://thecarddrop.com/api/products/bacon"
                        data-item-description="Some fresh bacon">
                        Buy bacon
                    </button>
                    <button onClick={() => this.addItem()}>Add</button>
                    {this.state.itemsInCart}
                    <button onClick={() => this.reset()}>Reset</button>
                    <button onClick={() => this.save()}>Save</button>
            </header>
        )
    }
}