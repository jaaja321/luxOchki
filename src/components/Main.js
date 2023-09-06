import React, { Component } from 'react'
import Item from './Item'

export class Main extends Component {
  render() {
    return (
      <main className='ml-[20%] mx-16 flex flex-wrap justify-around'>
        {this.props.items.map(el => (
            <Item item = {el}/>
        ))}
      </main>
    )
  }
}

export default Main