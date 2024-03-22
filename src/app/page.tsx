"use client"
import Table from '@/components/Table/Table'
import KeepMountedModal from '@/components/Table/modal/Moda';
import { headCellsProps, rowDataProps } from '@/components/Table/types';
import { Button } from '@mui/material';
import Image from 'next/image'
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from 'react-icons/md';
export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const headCells: headCellsProps[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
    },
    {
      id: "join",
      numeric: false,
      disablePadding: false,
      label: "Joining Date",
    },
    {
      id: "agent",
      numeric: false,
      disablePadding: false,
      label: "Agent",
    },
    {
      id: "buyer",
      numeric: false,
      disablePadding: false,
      label: "Buyer",
    },
    {
      id: "actions",
      numeric: false,
      disablePadding: false,
      label: "Actions",
      render: () => <div>
        <Button onClick={handleOpen}><CiEdit /></Button>
        <Button onClick={handleOpen}><MdOutlineDeleteOutline /></Button>
        <KeepMountedModal open={open} setOpen={setOpen} />
      </div>
    },
  ];
  const rowData: rowDataProps[] = [
    {
      id: 1,
      img: "/image/buyer.png",
      name: "234NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 2,
      img: "/image/buyer.png",
      name: "NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 3,
      img: "/image/buyer.png",
      name: "karim",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 4,
      img: "/image/buyer.png",
      name: "abdul",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 5,
      img: "/image/buyer.png",
      name: "babul",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 6,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
  ];
  return <Table headCells={headCells} row={rowData} />


}
