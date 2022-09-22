import React,{useState} from "react";

export default function About() {
    const [btntext, setbtntext] = useState("Enable light mode")
    

    const [mystyle, setMystyle] = useState({
        color:'white',
        backgroundColor:'blue',
        border:'1px solid white',
        // width:'97vw'
    })
   const modeclick=()=>{
        if (mystyle.color==='white') {
            setMystyle({
                color:'black',
                backgroundColor:'white',
            })
            setbtntext("Enable blue mode")
        }else{
                setMystyle({
                    color:'white',
                    backgroundColor:'blue',
                })
                setbtntext("Enable light mode")
        }
    }
    return (
        <div classNameName="container" style={mystyle}>
            <h2 className="about my-2" >About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={mystyle}
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={mystyle}
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={mystyle}
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                        
                    >
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <button onClick={modeclick} type="button" class="btn btn-primary">{btntext}</button>
            </div>
        </div>
    );
}
