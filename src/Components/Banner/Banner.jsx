import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <div className="banner-area">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 col-12 left-content">
                        <div className="left-item">
                            <h3>Florence <br/> Agency</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum rem et adipisci, debitis doloremque repudiandae assumenda quia esse. Sed impedit in, voluptatem ut est obcaecati!
                            </p>
                            <button id="price">See Pricing</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <img src="https://i.postimg.cc/c1Pg95wc/banner-img-2.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;