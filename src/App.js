import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [courses, setCourses] = useState([])
  const [hell, setHell] = useState([])

  useEffect(() => {
    fetch("https://enterpriseapi.rolai.com/content/discover?tenantId=cd2466f4-c40f-4a8e-ab92-617a1dac54ac&isUnAuth=true&resourceType=NORMAL&resourceType=SCHOOL_60_MIN&resourceType=CODING_COURSE&resourceType=KPI_COURSE")
      .then(response => {
        return response.json()
      })
      .then(data =>

        setCourses(data.data)
      )
  }, []);




   const handleChange = (e) => {
    let ischecked = e.target.checked;
    if (ischecked) {
      let hello = courses.filter((data) => data.item_type === e.target.value)
      console.log(hell);
      setHell([...hell,...hello]);
    } else {
      let hello = hell.filter((data) => data.item_type !== e.target.value)
      console.log(hell);
      setHell(hello);
    }
  }

  


 


return (
    <div className='hello'>
      <div className="App">

    {hell.length===0?<>
        {courses.map((user) => {

          return <div className='task' style={{ backgroundImage: `url("${user.image_url}")` }}>
             <div className='type'>
            {user.item_type}
          <br></br><br></br>
          </div>
            <div className='drop'>
             
              {user.title}
              <br></br>
              <br></br>
              {user.description}


            </div>
          </div>
        })}</>:<>
        {hell.map((user) => {
        return <div className='task' style={{ backgroundImage: `url("${user.image_url}")` }}>
           <div className='type'>
            {user.item_type}
          <br></br><br></br>
          </div>
          <div className='drop'>

          {user.title}
          <br></br>
          <br></br>
          {user.description}
        </div>
        </div>
      })}</>
}



        <div className='filter'>
          <div className="sidebar">

            <label for="Industries"><h2>Industries</h2></label>
            <br></br>
             <div className='handle'  onClick={(e)=>handleChange(e)}>
            <input type="checkbox" value="NORMAL" name="hello" id="AutoMobile"   />
            <label htmlFor="AutoMobile">AutoMobile</label>

            <br></br>

            <input type="checkbox" value="CODING_COURSE" name="hello" id="Banking & Finance"  />
            <label htmlFor="Banking & Finance">Banking & Finance</label>

            <br></br>

            <input type="checkbox" value="SCHOOL_60_MIN" name="hello" id="CPG & Retail"   />
            <label htmlFor="CPG & Retail">CPG & Retail</label>
            <br></br>

            <input type="checkbox" value="KPI_COURSE" name="hello" id="Others"  />
            <label htmlFor="Others">Others</label>
            <br></br>
          </div>
          </div>
        </div>




      </div>




    </div>
  );
}


export default App;