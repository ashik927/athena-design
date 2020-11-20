import React from 'react';
import './Service.css'


const Service = () => {
    return (
        <div>
            <div className="service-area text-center">
                <h3 >What we do</h3>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Adipisci accusamus reprehenderit hic
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 card-area">
                            <img src="https://i.postimg.cc/TYXwsTVY/Group-65-2x.png" alt=""/>
                            <h5 className="mt-3">Experience Design</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit eius neque ullam voluptates iure.
                            </p>
                        </div>
                        <div className="col-md-3 card-area">
                            <img src="https://i.postimg.cc/zXSBZ47w/Group-66-2x.png" alt=""/>
                            <h5 className="mt-3">Interface Design</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit eius neque ullam voluptates iure.
                            </p>
                        </div>
                        <div className="col-md-3 card-area">
                            <img src="https://i.postimg.cc/Pr4tFYf2/Group-69-2x.png" alt=""/>
                            <h5 className="mt-3">Prototyping </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit eius neque ullam voluptates iure.
                            </p>
                        </div>
                        <div className="col-md-3 card-area">
                            <img src="https://i.postimg.cc/Xq6VtgyD/Group-72-2x.png" alt=""/>
                            <h5 className="mt-3">Illustration</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit eius neque ullam voluptates iure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;