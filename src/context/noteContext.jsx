import React, { Children, useState } from 'react'
import { createContext } from 'react'

export const NoteContext = createContext()

const NoteState = (props) => {
    const initialnotes = [
        {
            "_id": "63b4043d273b70cd4378c07d",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:29.441Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c07f",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.591Z",
            "__v": 0
        },
        {
            "_id": "63b40440273b70cd4378c081",
            "user": "63a601b64db3db824c11fa44",
            "tittle": "hello",
            "desc": "crickett is very good sport and we love to play",
            "tag": "cricket",
            "date": "2023-01-03T10:32:32.745Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(initialnotes)
    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;