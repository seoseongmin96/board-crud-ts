export interface IUSER{
    userId : number
    username : string
    password : string
    name : string
    email : string
    regDate : string
    token : string
    roles: string[]
}

export interface IList{
   artId: number,
   title?: string,
   content?: string
}

export interface IBoard{
   
}