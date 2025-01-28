import React from 'react'

function Home() {
  return (
    <div>
      <div className="my_info">
        <div className="i_am">
          <h2 className='fw-bold '>I am Rinku Kumar</h2>
          <h1 className='fw-bold'>Next-Level Web <br />  Developer.</h1>
          <h6>React.js Front-End Developer. Proficient in HTML, CSS, JavaScript, and React.js, with hands-on experience through academic projects and personal practice. Eager to contribute to dynamic teams, build intuitive user interfaces.</h6>
          <br /><button className='mycv'>Download CV</button>
        </div>
        <div className="my_img">
          <div className="imgOfRinku">
            <img src={require('../img/rinku_pic.jpg')} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home