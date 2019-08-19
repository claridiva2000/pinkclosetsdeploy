import React from 'react'


const Newblog = () => {
  return (
    <div style={{backgroundColor:'black', height:'300vh', width:'100%', position:'absolute', opacity:'.7', color: 'black'}}>
    <div style={{ position:'relative', left:'15%', top:'10%', display:'flex', flexDirection:'column', justifyContent:'center', }}>
      <form action="" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'70%', opacity:'1', border:'1px solid black'}}>
        <input type="text" placeholder='date' style={{marginBottom:'10px', padding:'10px'}}/>
        <input type="text" placeholder='title'  style={{marginBottom:'10px', padding:'10px'}}/>
        <textarea type='text' cols="30" rows="10" placeholder='blog entry'></textarea>
      </form>
      <input type="submit" style={{width:'200px'}}/>
    </div>
    </div>
  )
}

export default Newblog
