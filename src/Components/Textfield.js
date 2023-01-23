import React, { useEffect, useState } from 'react';
import './Textfield.css';
import axios from 'axios';



function Textfield() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProfile = async () => {
        setLoading(true);
        const response = await fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");
        const data = await response.json();
        setProfile(data.texts);
        setLoading(false);
    };

    useEffect(() => {
        getProfile();
    }, []);

    // console.log("data", profile)

    return (
        <div>
            <div className="main">
                <section className="section">
                    <div>
                        {loading ? (
                            <div>loading..</div>
                        ) :
                            (
                                profile.map(i => {
                                    return (
                                        <div className='elements' key={0}>
                                          
                                                <span>{i.heading}</span>
                                                <h2>{i.subHeading}</h2>
                                                <p>{i.description}</p>
                                        </div>
                                    )
                                })
                            )}
                    </div>
                </section>
                {/* <form className="section">
          <h2>Post data</h2>
          <input type="text" placeholder="enter detail" />
          <button type="submit">Post</button>
        </form>
        <form className="section">
          <h2>Update data</h2>
          <select>
            <option>Choose data</option>
          </select>
          <input type="text" placeholder="enter detail" />
          <button type="submit">Update</button>
        </form> */}
            </div>
        </div>
    );
}



export default Textfield;


// (textObj) => <span> key={textObj.id}
//                     <h1>{textObj.heading}</h1>
//                     <h1>{textObj.subHeading}</h1>
//                     <h1>{textObj.description}</h1>
//                 </span>


// texts.map(text =>(
//     <li key={text.id}>{text.heading}</li>
// ))