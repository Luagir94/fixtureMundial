import React,{FC} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Layout from '../../Components/layout';
import CardsContainerStandings from '../../pages/cardsContainerStandings';
import CardsContainer from '../../pages/cardsContainer';
import Home from '../../pages/home';
import MatchStatistics from '../../pages/matchStatistics';
type RoutesT ={
    name : string,
    path : string,
    component: any
}


const RoutesList : RoutesT[]= [{
    name: "Home",
    path: "/",
    component: <Home />,
},
{
    name: "Detail",
    path: "/fixture",
    component: <CardsContainer />,
},
{
    name: "Detail",
    path: "/standings",
    component: <CardsContainerStandings />,
},
{
    name: "Detail",
    path: "/statistics/:fixture/:id1/:id2",
    component: <MatchStatistics />,
}

]


const Routing = () => {

    return (
        <>
            <Router>
                <Layout>
                <Routes>
                    {RoutesList.map(x =>
                        <Route
                            path={x.path}
                            element={
                                x.component
                            }
                            key={x.path}
                        />

                    )
                    }
                </Routes>
                </Layout>
            </Router>
        </>
    )
}

export default Routing