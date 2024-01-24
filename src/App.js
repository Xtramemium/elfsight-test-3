import { CharacterList, MainPage } from './Pages';
import { Route, Routes } from 'react-router';


const App = () => {

    return (
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/Characters'} element={<CharacterList/>}/>
            </Routes>
    );
};

export default App;
