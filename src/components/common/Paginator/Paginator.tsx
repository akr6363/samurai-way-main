import React from 'react';
import styled from "styled-components";


type PaginationPropsType = {
    pageTotalCount: number
    pageSize: number
    currentPage: number
    selectPage(pageNumber: number): void
}

export const Paginator: React.FC<PaginationPropsType> = ({pageTotalCount, pageSize, selectPage, currentPage}) => {

    const pageCount = Math.ceil(pageTotalCount / pageSize)
    let numbersArray = []
    for (let i = 1; i <= pageCount; i++) {
        numbersArray.push(i)
    }

    return <Pagination>
        {numbersArray.map(p => {
            return (
                <PaginationItem key={p}
                                className={currentPage === p ? 'current' : ''}
                                onClick={() => {
                                    selectPage(p)
                                }}>
                    {p}
                </PaginationItem>
            )
        })}
    </Pagination>
};

const PaginationItem = styled.span`
  &.current {
    font-weight: bold;
  }
`

const Pagination = styled.div`

`


export default Paginator;