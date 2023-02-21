import React from "react"
import pic from "../../../../assets/School/images/student-image.png"
import "./UnderProcess.css"
import { AcceptedData } from "../../../../utils/AcceptedData";
import { BsNodeMinusFill } from "react-icons/bs";

const UnderProcess = () => {
    return (
        <div className="container">
            <div className="wrapper">
                {
                    AcceptedData.map((props) => (
                        <div className="card" key={props.id}>
                    <div className="inner-card">
                        <div className="user-profile">
                            <img src={ pic} alt="Avatar"/>
                                    <div className="user-Name">{ props.name}</div>
                                    <div className="user-code">{ props.id}</div>
                                    <div className="course">{ props.course}</div>
                        </div>
                        <div className="pointer-holder">
                            {
                                props.process.map((inner) => (
                                    <div className="pointer" key={inner.id}>
                                        <div className="angle">
                                            {
                                                inner.done === true ? (
                                                    <div className="flex items-center text-green-600">
                                                       <div className="circle">{ inner.question}</div>
                                                        <div className="text">
                                                            <div>{inner.data }</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center">
                                                        <div className="circle">{ inner.question}</div>
                                                        <div className="text">
                                                            <div>{inner.data }</div>
                                                        </div>
                                                    </div>
                                                )
                                           }
                                            <div>
                                            {
                                                inner.id !== "9" ? (
                                                    <div className="shape"></div>
                                                ) : BsNodeMinusFill
                                            }
                                            </div>
                                        </div>
                                    </div>
                                ))            
                            }
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    )
};

export default UnderProcess