import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router';
import { Characters, MainPage } from './Pages';

function App() {

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Characters" element={<Characters />} />
            </Routes>
        </Wrapper>
    );
}

export default App;
