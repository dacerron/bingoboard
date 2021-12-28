import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import './board.css'

import randomEmoji from '../random-emoji'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function BoardDisplay({ activities }) {
    return (<div className={"boardContainer"}><Box sx={{ flexGrow: 1 }}><Grid
        justifyContent="center"
        alignItems="center"
        direction="row"
        container spacing={2}
        >
        {activities.map((e) => { return <ButtonBase sx={{ width: 128, height: 128 }}>
            <div> {randomEmoji()}{e}</div>
          </ButtonBase> })}
    </Grid></Box></div>)
}

export default BoardDisplay