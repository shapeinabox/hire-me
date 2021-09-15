import React from 'react'
import { clearAppError } from '../../store/features/UISlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import ErrorAlert from '../UI/ErrorAlert/ErrorAlert'

export default function AppErrorDialog() {

    const error = useAppSelector((state: RootState) => state.ui.error)
    const appDispatch = useAppDispatch()

    return (
        <ErrorAlert show={!!error?.message} error={error?.message} dismiss={() => appDispatch(clearAppError())} />
    )

}