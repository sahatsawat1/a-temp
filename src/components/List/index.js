import React from 'react'
import { ListTemp, ListComponents, CompoLeft, CompoRight, RealTime, BoxRealTime, RTDetails, Top, Bottom } from './ListElements'

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
                    <Top>
                        <h2>NOW</h2>
                    </Top>
                    <Bottom>
                        <h1>14 C</h1>
                        <p>Chiang Mai</p>
                    </Bottom>
                </RTDetails>
            </BoxRealTime>
        </RealTime>
    )
}

export default List