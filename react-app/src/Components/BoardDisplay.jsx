import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import ContentEditable from 'react-contenteditable'
import Config from '../config'
import './board.css'

import randomEmoji from '../random-emoji'
import { useEffect, useState, useRef } from 'react'

const config = Config()
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const fakeChangeRequest = function (id, el, success = true, time) {
    const statusObject = { status: success }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                console.log('fake requested change for ', id, el)
                resolve(statusObject)
            } else {
                console.log('fake change request that was configured to fail')
                reject(statusObject)
            }
        }, time)
    })
}

const changeRequest = function (id, el) {
    return (fetch('http' + config.addr + ':' + config.port)
        .then((response) => {
            return response.json()
        }))
}


function BoardDisplay({ activities }) {

    const [boardValues, setBoardValues] = useState([])
    const [loadedBoardValues, setLoadedBoardValues] = useState(false)
    const handleBoardUpdate = (id, el) => {
        let curBoardValues = boardValues
        curBoardValues[id] = el
        setBoardValues(curBoardValues)
    }
    useEffect(() => {
        if (loadedBoardValues) {
            let changeRequests = []
            for (let i = 0; i++; i < boardValues.length) {
                changeRequests.push(fakeChangeRequest(boardValues[i]._id, boardValues[i].el, true, 1000))
            }
            Promise.all(changeRequests).then((results) => {
                console.log('sucessfully asked for changes')
            })
        }
    }, [boardValues, loadedBoardValues])
    return (<div className={"boardContainer"}><Box sx={{ flexGrow: 1 }}><Grid
        justifyContent="center"
        alignItems="center"
        direction="row"
        container spacing={2}
    >
        {boardValues.map((e) => {
            return <ButtonBase sx={{ width: 128, height: 128 }}>
                {<ContentEditable onChange={(ev) => { this.handleBoardUpdate(e._id, ev.target.value) }} id={e._id} html={randomEmoji() + e.activity}></ContentEditable>}
            </ButtonBase>
        })}
    </Grid></Box></div>)
}


export default BoardDisplay