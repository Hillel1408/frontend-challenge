import { Main } from './layout/Main';
import { Header } from './layout/Header';
import { FavoritCats } from './layout/FavoritCats';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const navItems = [
        {
            href: '/frontend-challenge/',
            name: 'Все котики',
        },
        {
            href: '/frontend-challenge/lyubimye-kotiki',
            name: 'Любимые котики',
        },
    ];

    return (
        <Router basename="frontend-challenge">
            <Header navItems={navItems} />
            <Routes>
                <Route exact path="/" element={<Main />}></Route>
                <Route
                    exact
                    path="/lyubimye-kotiki"
                    element={<FavoritCats />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
