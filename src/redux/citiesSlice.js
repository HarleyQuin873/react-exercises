import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
             { id: 0,
               name: "Tokyo",
               description: "città di Tokyo",
               imgURL:"https://media.istockphoto.com/id/1444615409/it/foto/chinatown-in-giappone-alla-notte.jpg?s=1024x1024&w=is&k=20&c=vd0bD01A8AjNIBirrvwfkNO1yGw7HgkuEO3IepwX3Ts=",
               isVisited: true
             },
 {
    id: 1,
    name: "New York",
    description: "città di New York",
    imgURL:"https://media.istockphoto.com/id/525232662/it/foto/new-york-allempire-stato-building-e-la-statua-della-libert%C3%A0.jpg?s=1024x1024&w=is&k=20&c=W5gpnN04pucS9sytT9TZMGJ8orP8OojT2ltYIVnmzIo=",
    isVisited: false
  },
  {
    id: 2,
    name: "Rome",
    description: "città di Roma",
    imgURL:"https://media.istockphoto.com/id/508540910/it/foto/roma-tramonto-sul-tevere-e-st-peters-basilica-di-san-pietro-vaticano-italia.jpg?s=1024x1024&w=is&k=20&c=ZDLV6PBXukggCcJIo-XieliLBQpNp32Xc5NKXwsgj38=",
    isVisited: true
  },
  {
    id: 3,
    name: "Paris",
    description: "città di Parigi",
    imgURL:"https://media.istockphoto.com/id/1141703900/it/foto/paesaggio-urbano-di-parigi.jpg?s=1024x1024&w=is&k=20&c=xtHcMA1q7AYSki7SmddfoAPkTeVZtbzit8jdIKMZ220=",
    isVisited: false
  },
],
},
reducers: {
    add: (state, action) => {
        state.value.push(action.payload)
    },
},
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer