
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import {makeStyles} from '@material-ui/core/styles'

function App() {

  const useSyles = makeStyles(()=> ({
    App: {
      backgroundColor: "black",
      color: "white",
      minHeight : "100vh"
    }
  }) );
  
  const classes = useSyles();
  
  return (
   <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} default />
        <Route path="/recipes/:title"  element={<DetailsPage/>} />
      </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App;
