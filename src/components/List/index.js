import React from 'react'
import { ListTemp, ListComponents, CompoLeft, CompoRight, RealTime, BoxRealTime, RTDetails } from './ListElements'

const List = () => {
    return (
        <RealTime>
            <ListTemp>
                <ListComponents>
                    <CompoLeft>
                        <h1>Max</h1>
                    </CompoLeft>
                    <CompoRight>
                        <h1>70 C</h1>
                        <p>Chiang Mai</p>
                    </CompoRight>
                </ListComponents>
                <ListComponents>
                    <CompoLeft>
                        <h1>Min</h1>
                    </CompoLeft>
                    <CompoRight>
                        <h1>70 C</h1>
                        <p>Chiang Mai</p>
                    </CompoRight>
                </ListComponents>
                <ListComponents>
                    <CompoLeft>
                        <h1>Average</h1>
                    </CompoLeft>
                    <CompoRight>
                        <h1>70 C</h1>
                        <p>Chiang Mai</p>
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