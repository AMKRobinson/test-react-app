import React, { Component } from 'react';
import Input from './components/Input';
import InputItem from './components/InputItem';
import './App.css';

class App extends Component {
  state = {
    items: []
  }

  input = (text) => {
    let newItems = this.state.items;
    newItems.push(text);
    this.setState({
      items: newItems
    })
  }

  randomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  reapply = (e) => {
    e.preventDefault();
    this.setState({
      stuff: 'cool'
    });
  }

  randColor = () => {
    let r = this.randomRange(20, 255)
    let g = this.randomRange(20, 255)
    let b = this.randomRange(20, 255)

    return `rgb(${r},${g},${b})`;
  }

  render() {
    console.log(this.state.items.length);
    return (
      <div className="App">
        <input type='button' onClick={this.reapply} value="reapply" />
        <Input addText={this.input} />
        {this.state.items.map((item, i) => {
          const rand = this.randomInt(4);
          const randRight = this.randomInt(900);
          const randTop = this.randomInt(700);
          const randColor = this.randColor();
          return <InputItem
            key={i}
            inputItem={item}
            randomValue={rand}
            right={randRight}
            top={randTop}
            color={randColor}
          />
        })}
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
