import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import LoadingOverlay from '../UI/LoadingOverlay/LoadingOverlay'

export default function AppLoadingOverlay() {

    const loading = useAppSelector((state: RootState) => state.ui.loading)

    return (
        <LoadingOverlay loading={loading} />
    )

}