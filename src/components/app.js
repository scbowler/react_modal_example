import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../assets/css/app.css';
import BasicModal from './basic_modal';

const App = () => (
    <div className="container">
        <h1 className="text-center py-5">Modal Examples</h1>
        <div className="row my-5">
            <div className="col-4 text-center">
                <BasicModal />
            </div>
            <div className="col-4 text-center">
                <p>Confirm/Cancel Example Coming Soon</p>
            </div>
            <div className="col-4 text-center">
                <p>Outside Event Triggered Example Coming Soon</p>
            </div>
        </div>
    </div>
);

export default App;
