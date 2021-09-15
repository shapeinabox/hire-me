import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/system/Box'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { fetchChildren } from '../../../store/features/ChildrenSlice'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import ChildItem from './ChildItem/ChildItem'
import Pagination from '@mui/material/Pagination'

const pageSize = 5;

const ChildrenList: FC = () => {

    const [page, setPage] = useState(1);

    const children = useAppSelector((state) => state.children.children)
    const appDispatch = useAppDispatch()

    const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        if (!page) return;
        setPage(page)
    }

    useEffect(() => {
        appDispatch(fetchChildren())
    }, [])

    const currentChildren = useMemo(() => children && children.length > 0 && children.slice(((page - 1) * pageSize), ((page - 1) * pageSize) + pageSize), [children, page])

    return (
        <Box>
            <Typography variant="h4">Children List</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <Pagination count={Math.round(children.length / pageSize)} page={page} onChange={handlePageChange} size="large" color="primary" />
            </Box>
            <Stack spacing={2}>
                {currentChildren && currentChildren.length > 0 && currentChildren.map(child => <ChildItem key={child.childId} child={child} />)}
            </Stack>
        </Box>
    )

}

export default ChildrenList