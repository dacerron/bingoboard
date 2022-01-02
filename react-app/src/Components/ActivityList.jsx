import randomEmoji from "../random-emoji"
import { List, ListItem, ListItemIcon, ListItemText, Box, Grid } from "@mui/material"
import { styled } from '@mui/material/styles'
import Activity from "./Activity.jsx"

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}))

function ActivityList({ activities, deleteEntry }) {
    return (<Box sx={{ flexGrow: 1, maxWidth: 752 }}><Grid container spacing={2}><Grid item xs={12} md={6}><Demo><List dense={false}>
        {activities.map((e) => {
            return (<Activity key={e._id} deleteEntry={() => {deleteEntry(e._id)}} activity={e.activity}></Activity>)
        })}</List></Demo></Grid></Grid></Box>)
}

export default ActivityList