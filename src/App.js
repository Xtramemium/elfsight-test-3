import { CharacterList, MainPage } from './Pages';
import { Route, Routes } from 'react-router';


const App = () => {

    return (
            <Routes>
                <Route path={'/'} element={<MainPage/>}></Route>
                <Route path={'/Characters'} element={<CharacterList/>}></Route>
            </Routes>
    );
};

export default App;
