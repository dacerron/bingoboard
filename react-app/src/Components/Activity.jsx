import { useState } from "react"
import randomEmoji from "../random-emoji"
import { ListItem, ListItemIcon, ListItemText } from "@mui/material"

function Activity({ deleteEntry, id, activity }) {
    const [emoji, setEmoji] = useState(randomEmoji())
    return (
        <ListItem onClick={() => { deleteEntry(id) }}>
            <ListItemIcon>
                {emoji}
            </ListItemIcon>
            <ListItemText
                primary={activity}
                secondary={"YAY"}
            />
        </ListItem>)
}

export default Activity