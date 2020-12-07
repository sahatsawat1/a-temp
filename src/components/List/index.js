import React from 'react'
import { ListTemp, ListComponents, CompoLeft, CompoRight, RealTime, BoxRealTime, RTDetails } from './ListElements'
import DisplayMaxTemporature from '../../services/DisplayMaxTemporature'
import DisplayMinTemporature from '../../services/DisplayMinTemporature'
import DisplayAvgTemporature from '../../services/DisplayAvgTemporature'


const List = () => {
    return (
        <RealTime>
            <ListTemp>
                <ListComponents>
                    <CompoLeft>
                        <h1>Max</h1>
                    </CompoLeft>
                    <CompoRight>
                        <DisplayMaxTemporature />
                    </CompoRight>
                </ListComponents>
                <ListComponents>
                    <CompoLeft>
                        <h1>Min</h1>
                    </CompoLeft>
                    <CompoRight>
                        <DisplayMinTemporature />
                    </CompoRight>
                </ListComponents>
                <ListComponents>
                    <CompoLeft>
                        <h1>Average</h1>
                    </CompoLeft>
                    <CompoRight>
                        <DisplayAvgTemporature />
                    </CompoRight>
                </ListComponents>
            </ListTemp>
            <BoxRealTime>
                <RTDetails>

                </RTDetails>
            </BoxRealTime>
        </RealTime>
    )
}

export default List