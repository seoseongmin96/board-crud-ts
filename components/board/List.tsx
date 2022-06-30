import React, { FormEvent, useState } from "react";
import { Button, IconButton } from "@mui/material"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import styles from "@/styles/List.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import { IList } from '../../types'

type Props = {
   list: IList,
   data : (e : React.FormEvent<HTMLInputElement>) => void;
   onClickDelete: (e : React.FormEvent<HTMLInputElement>) => void;
   colspan: number;
   columns: any;
}

const Table : React.FC<Props> = ({columns, colspan, data, onClickDelete}) => {
 const router = useRouter()
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.length == 0 ? 
            <tr>
                <td colSpan={colspan}>데이터가 없습니다.</td>
            </tr>
            : data.map((board) => (
                <tr key={board._id}>
                    <td>{board.title}</td>
                    <td>{board.content}</td>
                    <td>
                        <IconButton aria-label="delete" size="small" style={{marginRight: 10 + "px"}} onClick={e => onClickDelete(board, e)} className={styles.none}>
                            <DeleteOutlineOutlinedIcon fontSize="small"/>
                        </IconButton>
                        <IconButton aria-label="edit" size="small"
                            onClick={() => {
                                router.push({
                                    pathname: '/board/[id]',
                                    query: {id: board._id}
                                })
                            }}>
                            <EditOutlinedIcon fontSize="small" />
                        </IconButton>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

