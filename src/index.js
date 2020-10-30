    import React, { createContext, useContext, useState,Provider, useEffect,useRef} from 'react';
    import ReactDOM from 'react-dom';
    import reportWebVitals from './reportWebVitals';
    import Routess from './Components/Routess'
    import './Style.css'

        ReactDOM.render(
          <React.StrictMode>
            <Routess/>
          </React.StrictMode>,
          document.getElementById('root')
        );

