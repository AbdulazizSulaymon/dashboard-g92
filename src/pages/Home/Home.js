import React from 'react'
import { Slide } from 'react-awesome-reveal'
import HomeWrapper from './HomeWrapper'



const Home = () => {
    return (
        <HomeWrapper>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="shadow p-4 rounded bg-yellow">Users</div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="shadow p-4 rounded bg-yellow">Todos</div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="shadow p-4 rounded bg-yellow">3</div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="shadow p-4 rounded bg-yellow">4</div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="shadow p-4 rounded bg-yellow">5</div>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home
