import {Link} from "react-router-dom";
const Hero = ({title, description, button,furniture}) => {
    return (<><div className="hero">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>
                            {title || "Shop the Best Furniture"}
                        </h1>
                        <p className="mb-4">
                            {description}
                        </p>
                        {button && (    
                            <p>
                                <Link href="" className="btn btn-secondary me-2">
                                    Shop Now
                                </Link>
                                <Link href="#" className="btn btn-white-outline">
                                Explore
                            </Link>
                        </p>
                        )}
                    </div>
                </div>
                {furniture &&(
                <div className="col-lg-7">
                    <div className="hero-img-wrap">
                        <img src="images/couch.png" className="img-fluid" />
                    </div>
                </div>
                )}

            </div>
        </div>
    </div>
    </>);
}
export default Hero;