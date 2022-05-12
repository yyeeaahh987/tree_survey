import axios from "axios";
import React, {useState , useEffect} from "react";
import './Encyclopedia.css';

import Img1 from './images/Acer buergerianum Miq.jpg';
import Img2 from './images/Acer reticulatum Champ.jpg';
import Img3 from './images/Acer sino-oblongum F. P. Metcalf.jpg';
import Img4 from './images/Acer tutcheri Duthie.jpg';
import Img5 from './images/Choerospondias axillaris (Roxb.) B. L. Burtt & A. W. Hill.jpg';
import Img6 from './images/Cordyline fruticosa (L.) A. Chev.jpg';
import Img7 from './images/Dracaena fragrans (L.) Ker Gawl.jpg';
import Img8 from './images/Dracaena sanderiana Sander ex M. T. Mast.jpg';
import Img9 from './images/Dracontomelon duperreanum Pierre.jpg';
import Img10 from './images/Mangifera indica L.jpg';
import Img11 from './images/Pistacia atlantica Desf.jpg';
import Img12 from './images/Saurauia tristyla DC.jpg';

const Encyclopedia = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    }
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const handleClick = () => setModel(!model);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
    return(
      <>
      <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />

            <div className='menu-icon' onClick={handleClick}>
                <i className={model ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

      </div>

      <div className='encyclopedia'>
        {data.map((item, index)=>{
          return(
            <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        })}
      </div>
      </>
    )
  
}

// function Encyclopedia() {
//   const [search, setSearch] = useState("");
//   const [users , setUsers] = useState([])
//   const [fileredData , setFilteredData] = useState([])

//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{
//       setUsers(response.data);
//     })
//   },[])

//   useEffect(()=>{
//     setFilteredData(
//       users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()))
//     )
//   },[search,users])
  
//   return (
//     <>
//     {/* <h1 className='encyclopedia'>Encyclopedia</h1> */}
//     <h1> <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
//             setSearch(event.target.value);}} />
//           {fileredData.length === 0 ? <div style={{color:"Red"}}>No result found</div> : fileredData.map((val)=>{
//             return <div key={val.id}>
//               <p>{val.name}</p>

//             </div>
//           })}
//     </h1>
//     </>
//   )
// }

export default Encyclopedia;