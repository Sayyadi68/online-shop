import React from 'react';
import Header from './components/header';
import Sidemenu from './components/right-menu';
import Carousel from './components/carousel';
import Burgermenu from './components/burgermenu';
import Closemenu from './components/closemenu';
import Undermenu from './components/undermenu';
import Itemtable from './components/itemtable';
import './tailwind.css';
import './index.css';
import './App.css';


function App() {
  return (
    <div className="App h-full">

      <Closemenu/>

      <Header/>
      <Sidemenu/>

      <Burgermenu/>

      <div className='pb-20'>

        <Carousel/>
        <Itemtable/>
        <Itemtable/>
        <Itemtable/>
        <Itemtable/>
        <Itemtable/>
        <Itemtable/>
        <Itemtable/>
        <Itemtable/>

      </div>

      
      
      <Undermenu/>

        
    </div>
  );
}

export default App;