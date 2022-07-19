import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ()=> {
    return (
    <div className="imageForm"> 
        <p className="f3">
            {'this will detect image face'}
        </p>
        <div>
            <div className="form" >
                <div className=" formlink pa4 center br3 shadow-5">
            <input  className="f4 pa2 w-70 center"  type="text"/>
            <button className="button w-30 grow f4 link ph3 pv2 dib white bg-light-purple" style={{border: "none"}}>Detect</button>
            </div>
            </div>
        </div>
     </div>
    )
}

export default ImageLinkForm