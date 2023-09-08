import './main.css';
import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import HeaderS from './components/HeaderS';
import Nav from './components/Nav';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "read",
          price: "49.99",
          selected: false,
          bad: 1,
          info: false,
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "sport",
          price: "50",
          selected: false,
          bad: 2,
          info: false,
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "kids",
          price: "149.99",
          selected: false,
          bad: 3,
          info: false,
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "sun",
          price: "500",
          selected: false,
          bad: 3,
          info: false,
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "read",
          price: "580",
          selected: false,
          bad: 3,
          info: false,
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "read",
          price: "520",
          selected: false,
          bad: 3,
          info: false,
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "sun",
          price: "99.99",
          selected: false,
          bad: 1,
          info: false,
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "read",
          price: "49.99",
          selected: false,
          bad: 1,
          info: false,
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "read",
          price: "49.99",
          selected: false,
          bad: 1,
          info: false,
        },
      ]
    }}
  render() {
    return (
      <div className='text-blue-400'>
        <Header />
        <Nav />
        <Main items = {this.state.items}/>
      </div>
    )
  }
}
export default App