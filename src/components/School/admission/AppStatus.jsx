import { Route, Routes } from 'react-router-dom';
import './AppStatus.css'
import AppStatusHome from './AppStatusHome';
import Payment from './Payment';

const AppStatus = () => {
    return (
        <div className="app-status">
            <Routes>
                <Route index element={ <AppStatusHome /> }/>
                <Route path=':payment' element={ <Payment /> }/>
            </Routes>
        </div>
    );
}
 
export default AppStatus;