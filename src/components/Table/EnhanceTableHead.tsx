import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { headCellsProps } from './types';
const EnhanceTableHead = ({ headCells,
    onSelectAllClick,
    rowCount,
    numSelected,
    order, orderBy,
}: {
    headCells: headCellsProps[];
    onSelectAllClick: any;
    rowCount: number;
    numSelected: any;
    order: any;
    orderBy: any
}) => {
    console.log(orderBy);
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell: headCellsProps, index: number) => {
                    return (
                        <TableCell
                            key={headCell.id}
                            style={{
                                padding: "12px 9.5px",
                            }}>
                            {headCell.label}

                            {orderBy == headCell?.id ? (
                                <Box component="span" sx={{
                                    background: "green"
                                }} >ads
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};

export default EnhanceTableHead;