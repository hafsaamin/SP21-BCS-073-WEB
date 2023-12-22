import React, { useEffect, useState } from "react";
import axios from "axios";
import Paintings from "./paintings";

function Get() {


    return (
        <>
            <main>
                <div className="bahubali">
                    <div className="about-mainheading mainheading">Get Paintings</div>
                    <div className="about-subheading subheading" id="sub">
                        <p>""Art is not just a purchase; it's an Investment"</p>
                    </div>
                </div>
                <div className="projects-main">
                    <Paintings />
                </div>
            </main>
        </>
       
    );


}

export default Get;