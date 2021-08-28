import React from "react";

const ResumeComponent = () => {
    return (
        <div className="py-5 w3l-resume text-center">
            <div className="container py-lg-5 py-3">
                <h5 className="title-small mb-2"> My resume</h5>
                <h3 className="title-big mb-4">
                    I Would Love to make your Ideas real{" "}
                </h3>
                <p>
                    I love graphic design and photography and have been working
                    on my portfolio since 2016. You can download my resume in
                    order to learn the details of my professional life as a
                    designer and photographer. Contact me and we will discuss
                    your projects!
                </p>
                <div className="mt-5">
                    <a href="#download" className="btn btn-style btn-primary">
                        Download resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResumeComponent;
