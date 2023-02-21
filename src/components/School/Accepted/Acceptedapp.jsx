import React from "react"
import "./Acceptedapp"
import pic from "../../../assets/School/images/student-image.png"
import pic2 from "../../../assets/School/images/uni-logo.png"
import  {GoTriangleRight} from "react-icons/go"

const Accepted = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="header">
                    <div className="logo-hold">
                        <img src={ pic2 } alt="loading" />
                        <div>University of Toronto</div>
                    </div>
                    <div className="titleHold">
                        <div className="title">University Dashboard</div>
                        <div className="subTitle">Students</div>
                    </div>
                </div>
                <main className="main">

                    <table className="table">
                        <tr className="tr-head">
                            <th>Name</th>
                            <th>Fees</th>
                            <th>COA</th>
                            <th>Visa Process</th>
                            <th>Visa Decision</th>
                            <th>Accepted</th>
                        </tr>
                        <tr className="tr-body">
                            <td>
                                <div className="profile">
                                    <img src={ pic} />
                                    <div className="name">
                                        <div className="user-name">Adam Johnson</div>
                                        <div className="sub-name">Micro Biology</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="progress-step">
                                    <div className="circle">
                                        1
                                    </div>
                                    {true ? <div className="dash">
                                        
                                    </div>
                                        :
                                    <div className="line">
                                        
                                    </div>
                                    }
                                    <div className="shape">
                                        {/* <GoTriangleRight /> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="progress-step">
                                    <div className="circle">
                                        1
                                    </div>
                                    {true ? <div className="dash">
                                        
                                    </div>
                                        :
                                    <div className="line">
                                        
                                    </div>
                                    }
                                    <div className="shape">
                                        {/* <GoTriangleRight /> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="progress-step">
                                    <div className="circle">
                                        1
                                    </div>
                                    {true ? <div className="dash">
                                        
                                    </div>
                                        :
                                    <div className="line">
                                        
                                    </div>
                                    }
                                    <div className="shape">
                                        {/* <GoTriangleRight /> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="progress-step">
                                    <div className="circle">
                                        1
                                    </div>
                                    {true ? <div className="dash">
                                        
                                    </div>
                                        :
                                    <div className="line">
                                        
                                    </div>
                                    }
                                    <div className="shape">
                                        {/* <GoTriangleRight /> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="progress-step">
                                    <div className="circle">
                                        1
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </main>
            </div>
        </div>
    )
}

export default Accepted