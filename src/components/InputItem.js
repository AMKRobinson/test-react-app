import React, { Component } from 'react'

export class InputItem extends Component {
    render() {

        const randomHeader = (value) => {
            const style = {
                right: this.props.right,
                position: 'absolute',
                top: this.props.top,
                color: this.props.color,
                backgroundColor: 'red'
            }
            switch(value) {
                case 1: return <h1 style={style}>{this.props.inputItem}</h1>
                case 2: return <h2 style={style}>{this.props.inputItem}</h2>
                case 3: return <h3 style={style}>{this.props.inputItem}</h3>
                case 4: return <h4 style={style}>{this.props.inputItem}</h4>
                case 5: return <h5 style={style}>{this.props.inputItem}</h5>
                default: return <h1>default</h1>
            }
        }

        return (
            <div>
                {randomHeader(this.props.randomValue)}
            </div>
        )
    }
}

export default InputItem
