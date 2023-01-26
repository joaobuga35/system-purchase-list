export interface iListItens {
    name:string;
    quantity:string;
}

export interface iList {
    listName: string;
    data: Array<iListItens>
}

export interface idType extends iList{
    id: number
}
