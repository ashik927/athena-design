import React from "react";
import "./FooterForm.css";

const FooterForm = () => {
    return (
        <div className="mt-5 pt-5">
            <h3 className=" mt-5 pt-5 text-center">
                Get Your design right, right now
            </h3>
            <p className="text-center">
                Be the first to know our latest offers and updates!
            </p>

            <form
                className="input-form d-flex justify-content-center"
                action=""
            >
                <div>
                    <input type="text" placeholder="Enter your email address" />
                    <input type="submit" value="Get Started" />
                </div>
            </form>
        </div>
    );
};

export default FooterForm;
