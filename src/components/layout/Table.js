import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
    display: flex;
    font-weight: 900;
    &:first-child {
      .cell-table {
        padding: 14px 0px;
        text-align: center;
        flex: 1;
        &.menu-table {
          border-top: 0px;
        }
      }
      .date,
      .price {
        flex: 1;
      }
      .farm {
        flex: 1;
        i {
          font-size: 15px;
        }
      }
      .name {
        flex: 1px;
      }
    }
    &:last-child {
      .cell-table {
        padding: 14px 0px;
        text-align: center;
        flex: 1;
        &.menu-table {
          border-top: 0px;
        }
      }
      .date,
      .price {
        flex: 1;
      }
      .name {
        flex: 1px;
        text-align: left;
      }
      .farm {
        flex: 1;
        i {
          font-size: 15px;
        }
      }
    }
    .cell-table {
      padding: 14px 0px;
      text-align: center;
      flex: 1;
    }
    .date,
    .price {
      flex: 1;
    }
    .farm {
      flex: 1;
      i {
        font-size: 15px;
      }
    }
    .name {
      flex: 1px;
      text-align: left;
      p{
          margin-left: 15%;
      }
    }
`

const TableCard = (props) => {
    return (
        <Table>
            <div class="cell-table date">
                {props.children}
            </div>
            <div class="cell-table name-header">
                {props.children}
            </div>
            <div class="cell-table farm">
                {props.children}
            </div>
        </Table>
    )
}

export default TableCard
