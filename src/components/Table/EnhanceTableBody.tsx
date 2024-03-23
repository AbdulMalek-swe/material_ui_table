import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Table as MuiTable } from '@mui/material';
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
import { rowDataProps } from './types';
const EnhanceTableBody = ({
    row,
    handleSelectClick,
    selected,
    headCells
}: {
    row: rowDataProps[];
    handleSelectClick: any;
    selected: any;
    headCells: any
}) => {
    const isSelected = (id: number) => selected?.indexOf(id) !== -1;
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <TableBody>
            {row.map((row: any, index: any) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <TableRow
                        //   hover
                        //   onClick={(event) => handleClick(event, row.id)}
                        //   role="checkbox"
                        //   aria-checked={isItemSelected}
                        //   tabIndex={-1}
                        //   key={row.id}
                        //   selected={isItemSelected}
                        //   sx={{ cursor: 'pointer' }}
                        key={index}
                        hover
                        onClick={() => {
                            handleSelectClick(row.id);
                        }}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                checked={isItemSelected}
                                onChange={handleChange}
                                inputProps={{
                                    "aria-labelledby": "1",
                                }}
                                sx={{
                                    color: "#ced4da",
                                    '&.Mui-checked': {
                                        color: "#405189"
                                    }
                                }}
                            />
                        </TableCell>

                        {headCells.map((header: any, index: any) => (
                            <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                key={index}
                            >
                                {header?.render
                                    ? header?.render(row)
                                    : row[header?.id]}
                            </TableCell>
                        ))}


                    </TableRow>
                );
            })}
            {/* {emptyRows > 0 && (
          <TableRow
            style={{
              height: (dense ? 33 : 53) * emptyRows,
            }}
          >
            <TableCell colSpan={6} />
          </TableRow>
        )} */}
        </TableBody>
    );
};

export default EnhanceTableBody;