import React from 'react'
import TableCard from '../layout/Table'
import { RankingComponents, RankingDetails } from './RankingElements'

const Ranking = () => {
    return (
        <RankingComponents>
            <h1>RANKING</h1>
            <RankingDetails>
                <TableCard>
                    <div className='date'>sadasdas</div>
                    <div>xzczx</div>
                    <div>location</div>
                </TableCard>
            </RankingDetails>
        </RankingComponents>
    )
}

export default Ranking