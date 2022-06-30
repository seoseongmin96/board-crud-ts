import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import  Write  from "../../components/board/Write";
import { writeRequest } from "../../modules/board/write";
import { NextPage } from 'next'

export interface BoardWrite{
    title: string,
    content: string
}



const WritePage: NextPage = () => {

    const [board, setBoard] = useState<BoardWrite>({title: '', content: ''})
    const dispatch = useAppDispatch()
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const {name, value} = e.currentTarget;
        setBoard({...board, [name]: value})
        console.log(board)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('진행 1: 글쓰기 버튼 클릭')
        console.log(`글 정보 : ${JSON.stringify(board)}`)
        dispatch(writeRequest(board))
        setBoard({title: '', content: ''})
        window.location.href = "./list"
    }

    return (<Write onChange={onChange} onSubmit={onSubmit}/>)
};

//const mapStateToProps = (state: { write: { isWritten: any; }; }) => ({isWritten: state.write.isWritten})
//const writeActions = {writeRequest}

export default WritePage