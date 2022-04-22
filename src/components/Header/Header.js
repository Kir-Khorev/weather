// import React, { useState, useEffect } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import './style.css'
// import GetWeather from '../../services/weather-service.js/weather-service';
// import MainContent from '../MainContent/MainContent';

// const Header = (props) => {
//     // const [state, setState] = useState(0);
//     // console.log(state);
//     const tver = 'tver'
//     return (
//         <>
//             <header>
//                 Header Component
//                 <form>
//                     <div className="formGroup">
//                         <button onClick={(e) => { e.preventDefault() }}
//                             className="submitBtn">
//                             <FaSearch className='fa-search' />
//                         </button>
//                         <input value=''
//                             onChange=''
//                             type="text"
//                             className="searchCity"
//                             placeholder="Search city" />
//                         <br />
//                     </div>
//                 </form>
//             </header>
//             <MainContent city={tver}/>
//         </>
//     )
// }

// export default Header;