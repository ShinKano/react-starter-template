import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/Global';


const App = () => {
    return (
        <>
            <Mydiv>
                Let's start coding.
            </Mydiv>

            <GlobalStyles/>
        </>
    );
}

export default App;

const Mydiv = styled.div`
  background-color: red;
`;
