import React from 'react';
import '../../App.css';
import SeccionIndumentaria from '../cards/indumentaria/SeccionIndumentaria';

const listaIndumentaria=[

  {
    id: 11,
    producto: "PRETAL PARA PERROS TALLE S",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/pretal-paris-11-c196f462818df8a6e116023562258485-480-0.webp"
  },
  {
    id: 12,
    producto: "PRETAL PARA PERROS TALLE M",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/pretal-brooklyn1-e13ccce62d751944be16023559416624-480-0.webp"
  },
  {
    id: 13,
    producto: "PRETAL PARA PERROS CAMUFLADO PINK",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/camuflado-pink-11-a8eb725cca57c0368615914688746397-480-01-ce2683a5bb0a5714fe16529713838949-480-0.webp"
  },
  {
    id: 14,
    producto: "PRETAL PARA PERROS CAPITAL AMERICA",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/captain-america11-c4f3e2462092f27a6c15875272718866-480-0.webp"
  },
  {
    id: 15,
    producto: "PRETAL PARA PERROS ARNES MARBLE",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/arnes-marble11-c361dd9126277533c016128716071521-480-01-69120b13e462a72dfe16529710352174-480-0.webp"
  }
  
]

export default function Indumentaria() {

  return <SeccionIndumentaria listaIndumentaria={listaIndumentaria}/>
}