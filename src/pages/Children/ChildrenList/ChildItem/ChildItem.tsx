import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimePicker from '@mui/lab/TimePicker'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import React, { FC, useState } from 'react'
import { checkChild } from '../../../../store/features/ChildrenSlice'
import { useAppDispatch } from '../../../../store/hooks'
import { Child } from '../../../../types/types'


interface Props {
    child: Child
}

const ChildItem: FC<Props> = ({ child }) => {

    const [time, setTime] = useState<Date>(new Date())

    const appDispatch = useAppDispatch()

    const handleCheck = () => {
        // `${date.getHours()}:${date.getMinutes()}`
        appDispatch(checkChild(child.childId, `${time.getHours()}:${time.getMinutes()}`, child.checkedIn ? "checkout" : "checkins"))
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={child.image.small}
                alt={`Image of ${child.name.fullName}`}
            />
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <CardContent sx={{ flex: '1' }}>
                    <Typography component="div" variant="h5">
                        {child.name.fullName}, {new Date().getFullYear() - new Date(child.birthday).getFullYear()}
                    </Typography>
                    <Typography variant="subtitle1" color={child.checkedIn ? 'text.primary' : 'text.secondary'} component="div">
                        {child.checkedIn && `Checked-in at ${format(new Date(child.checkinTime), "hh:mm")}`}
                        {!child.checkedIn && `Not checked-in`}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', flex: "1.5", alignItems: 'center', justifyContent: "center", p: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            label={child.checkedIn ? "Check-out Time" : "Check-in Time"}
                            value={time}
                            onChange={(date: any) => {
                                setTime(date)
                            }}
                            renderInput={(params: any) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button disabled={!time} onClick={handleCheck}>{child.checkedIn ? "Check-out" : "Check-in"}</Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ChildItem