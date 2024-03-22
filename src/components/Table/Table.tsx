import * as React from 'react';
import Box from '@mui/material/Box';
import { TablePagination, Table as TableWrapper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import EnhanceTableBody from './EnhanceTableBody';
import EnhanceTableHead from './EnhanceTableHead';
import { headCellsProps, rowDataProps } from './types';
import { handleSelectedClick } from './utils';
import PrimarySearchAppBar from './TableToolbar';
const Table = ({
    headCells,
    row,
}: {
    headCells: headCellsProps[];
    row: rowDataProps[];
}) => {
    const [dense, setDense] = React.useState(false);
    const [selected, setSelected] = React.useState<any>([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [orderBy, setOrderBy] = React.useState('name');
    const [order, setOrder] = React.useState('asc');

    //   page selected function
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    // selected item function code here
    const handleSelectedClickItem = async (id: any) => {
        const selectedItem = await handleSelectedClick(id, selected);
        setSelected(selectedItem);
    };
    //  how much data showing on the table body
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    //   all item selected function code here
    const handleSelectAllClick = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            const newSelected = row.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    const visibleRows = React.useMemo(
        () =>
            stableSort(row, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );
    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                < PrimarySearchAppBar />
                <TableContainer>
                    <TableWrapper
                        sx={{ minWidth: 750 }}
                        size={dense ? "small" : "medium"}>
                        <EnhanceTableHead
                            headCells={headCells}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={row.length}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                        />
                        <EnhanceTableBody
                            row={visibleRows}
                            handleSelectClick={handleSelectedClickItem}
                            selected={selected}
                            headCells={headCells}
                        />
                    </TableWrapper>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={row.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    )
}

export default Table;