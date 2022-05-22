import axios from "axios";
import React, {useState , useEffect} from "react";
import '../../App.css';
import{DialogTitle,Dialog} from '@mui/material';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import html2canvas from "html2canvas";
//https://www.npmjs.com/package/jspdf
import { jsPDF } from "jspdf";
import $ from "jquery";

import './Encyclopedia.css'




const PUBLIC_URL=process.env.PUBLIC_URL
function Encyclopedia() {
  const [search, setSearch] = useState("");
  // const [users , setUsers] = useState([])
  const [fileredData , setFilteredData] = useState([])
  const [treeData,setTreeData] = useState([])
  const [open,setOpen] = useState(false)
  const [selectedTree,setSelectedTree] = useState({})



  useEffect(()=>{

    axios.get('https://retoolapi.dev/xyNJRq/tree').then((response)=>{
      if(response.data.length>0){
        let tempData = response.data
        tempData.forEach((tree,index)=>{
          tempData[index]={
            ...tree,
            searchPhase:`${tree.chineseName} ${tree.familyNameC} ${tree.commonName.toLowerCase()} ${tree.familyName.toLowerCase()}`,
          }
        })
        setTreeData(tempData);
      }else{
        setTreeData([]);
      }
    })
  },[])

  useEffect(()=>{
    setFilteredData(
      treeData.filter((tree)=> tree.searchPhase.includes(search.toLowerCase()))
    )
  },[search,treeData])


  const handleClose = (value) => {
    setOpen(false);
    setSelectedTree({});
  };

  function generatePDF (data){
    const doc = new jsPDF();
    console.log(data)
        /*
    addimage 第1個係圖片,2係格式, 3係x coordinate ,4係y coordinate, 5係圖片width , 6 係圖片height
    */
    doc.addImage(`${PUBLIC_URL}/assets/images/${selectedTree.photo1}`,'jpg',10,0,10,10)
    doc.text(`Scientific Name: ${data["scientificName\t"]}`, 10, 10);
    doc.text(`Common Name: ${data.commonName}`, 10, 20);
    doc.text(`Family: ${data.familyName}`, 10, 30);
    // doc.text(`生長習性: ${data.growingHabitC}`, 10, 10);
    // doc.text(`高度: ${data.heightC}`, 10, 10);
    // doc.text(`莖: ${data.stemsC}`, 10, 10);
    // doc.text(`葉: ${data.leavesC}`, 10, 10);
    // doc.text(`花: ${data.flowersC}`, 10, 10);
    // doc.text(`果: ${data.fruitsC}`, 10, 10);
    // doc.text(`花期: ${data.floweringPeriodC}`, 10, 10);
    // doc.text(`果期: ${data.fruitingPeriodC}`, 10, 10);
    doc.save("flower.pdf");
  }
  
  return (
    <>
<Dialog onClose={handleClose} open={open}>
<button onClick={()=>{
  generatePDF(selectedTree)
}}>Download as PDF</button>
  <div id="detailDIV">
    <DialogTitle>樹木詳細 Tree Detail</DialogTitle>
    <div>
    <img src={`${PUBLIC_URL}/assets/images/${selectedTree.photo1}`}></img>
    <img src={`${PUBLIC_URL}/assets/images/${selectedTree.photo2}`}></img>
    </div>
    <ReactHTMLTableToExcel
      id="test-table-xls-button"
      className="download-table-xls-button"
      table="table-to-xls"
      filename="Exncyclopedia"
      sheet="tablexls"
      buttonText="Download as Excel"/>
    <table id="table-to-xls">
    <div>
      <p >{`中文名: `}{selectedTree.chineseName}</p>
      <p>{`科名: `}{selectedTree.familyNameC}</p>
      <p>{`本地分布狀態: `}{selectedTree.localDistributionStatusC}</p>
      <p>{`生長習性: `}{selectedTree.growingHabitC}</p>
      <p>{`高度: `}{selectedTree.heightC}</p>
      <p>{`莖: `}{selectedTree.stemsC}</p>
      <p>{`葉: `}{selectedTree.leavesC}</p>
      <p>{`花: `}{selectedTree.flowersC}</p>
      <p>{`果: `}{selectedTree.fruitsC}</p>
      <p>{`花期: `}{selectedTree.floweringPeriodC}</p>
      <p>{`果期: `}{selectedTree.fruitingPeriodC}</p> 
    </div>
    <br></br>
    <div>
      <p>{`Scientific Name: `}{selectedTree["scientificName\t"]}</p>
      <p>{`Common Name: `}{selectedTree.commonName}</p>
      <p>{`Family: `}{selectedTree.familyName}</p>
      <p>{`Local distribution status: `}{selectedTree.localDistributionStatus}</p>
      <p>{`Growing habit: `}{selectedTree.growingHabit}</p>
      <p>{`Height: `}{selectedTree.height}</p>
      <p>{`Stems: `}{selectedTree.stems}</p>
      <p>{`Leaves: `}{selectedTree.leaves}</p>
      <p>{`Flowers: `}{selectedTree.flowers}</p>
      <p>{`Fruits: `}{selectedTree.fruits}</p>
      <p>{`Seeds: `}{selectedTree.seeds}</p>
      <p>{`Flowering period: `}{selectedTree.floweringPeriod}</p>
      <p>{`Fruiting period: `}{selectedTree.fruitingPeriod}</p>
    </div>

  </table>
  </div>
  </Dialog>


    
    <div class='outerestBox'>
    <h1>樹木全書 Encyclopedia</h1>
    <h1> 
      <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearch(event.target.value);
            }} />
    </h1>
    {fileredData.length === 0 ? <div style={{color:"Red"}}>No result found</div> : fileredData.map((val)=>{
            return (
              <div class="card"key={val.id}>
              <p 
              class="printoutText"
              onClick={()=>{
                setSelectedTree(val)
                setOpen(true)
              }}>{val.chineseName} {val.commonName}</p>
            </div>
            )
          })}
    </div>
    
    </>
  )
}

export default Encyclopedia;






















// import axios from "axios";
// import React, {useState , useEffect} from "react";
// //import './Encyclopedia.css';
// import '../../App.css';


// function Encyclopedia() {
//   const [search, setSearch] = useState("");
//   const [users , setUsers] = useState([])
//   const [fileredData , setFilteredData] = useState([])

//   useEffect(()=>{

//     // axios.get('https://retoolapi.dev/0vEjtN/data')


//     // {
//     //   "": "",
//     //   "id": 1,
//     //   "Seeds": "Black, encircled by orange yellow aril",
//     //   "Fruits": "Legume ligulate, woody when mature, blackish brown, spirally concorted, in the shape of an ear. With about 12 seeds",
//     //   "Height": "To 20 m",
//     //   "Leaves": "The green leaf-like organ we see actually is the modified petiole called “phyllodes”. The actual leaf was reduced into a tiny black spot which is difficult to be seen with the naked eye. The function of photosynthesis is instead performed by the phyllodes. Phyllodes falcate-oblong, both ends attenuate. Main vein 3 to 7, conspicuous",
//     //   "Flowers": "Yellow, numerous flowers arranged in spike, like plush iron wire. Inflorescence single or several, terminal to axillary",
//     //   "Common Name": "Ear-leaved Acacia, Ear-pod Wattle",
//     //   "Family Name": "MIMOSACEAE",
//     //   "Chinese Name": "耳果相思, 耳葉相思, 大葉相思",
//     //   "Growing habit": "Evergreen Tree",
//     //   "Fruiting period": "October to April in Hong Kong",
//     //   "Scientific Name": "Acacia auriculiformis A. Cunn. ex Benth.",
//     //   "Flowering period": "September to November in Hong Kong",
//     //   "Local distribution status": "Exotic species"




//     //   "id": 1,
//     //   "name": "Ear-leaved Acacia, Ear-pod Wattle",
//     //   "familyName":"MIMOSACEAE",
//     //   "chineseName":"",
//     //   "growingHabit":"",
//     //   "fruitingPeriod":"",
//     //   "scientificName":"",
//     //   "floweringPeriod":"",
//     //   "localDistributionStatus":"",
//     //   "flowers":"",
//     //   "leaves":"",
//     //   "height":"",
//     //   "fruits":"",
//     //   "seeds":"",
//     // },

//     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
//       setUsers(response.data);
//     })
//   },[])

//   useEffect(()=>{
//     setFilteredData(
//       users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()))
//     )
//   },[search,users])


//   function sortData(searchWord,searchKey){
//     if(searchKey==="byChineseName"){

//     }else if(searchKey==="byEngName"){

//     }
//   }
  
//   return (
//     <>
//     <h1 className='encyclopedia'>Encyclopedia</h1>
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

// export default Encyclopedia;