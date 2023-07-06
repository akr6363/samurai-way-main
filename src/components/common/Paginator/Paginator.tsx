import React, {useState} from 'react';
import styled from "styled-components";


type PaginationPropsType = {
    pageItemsCount: number
    pageSize: number
    currentPage: number
    selectPage(pageNumber: number): void
    portionSize?: number
}

export const Paginator: React.FC<PaginationPropsType> =
    ({pageItemsCount, pageSize, selectPage, currentPage, portionSize = 10}) => {

        const pageCount = Math.ceil(pageItemsCount / pageSize)
        let numbersArray = []
        for (let i = 1; i <= pageCount; i++) {
            numbersArray.push(i)
        }

        const portionCount = Math.ceil(pageCount / portionSize)
        const [portionNumber, setPortionNumber] = useState(1)
        const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
        const rightPortionPageNumber = portionNumber * portionSize

        const setPrevPortionPages = () => {
            setPortionNumber(portionNumber - 1)
        }
        const setNextPortionPages = () => {
            setPortionNumber(portionNumber + 1)
        }

        return <Pagination>
            {portionNumber > 1 && <button onClick={setPrevPortionPages}>PREV</button>}
            {numbersArray
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
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
            {portionCount > portionNumber && <button onClick={setNextPortionPages}>NEXT</button>}
        </Pagination>
    };

const PaginationItem = styled.span`
  padding: 2px;
  &.current {
    font-weight: bold;
  }
`

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
`

const PageNumberContainer = styled.div`

`


export default Paginator;