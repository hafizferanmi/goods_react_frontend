import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';


const Success = () => (

        <React.Fragment>
            <Helmet>
                <title>Success - Bookish </title>
            </Helmet>

            <section id="content">
                
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="inner-box posting">
                        <div className="alert alert-success alert-lg" role="alert">
                            <h2 className="postin-title">✔ Congratulations! Your book as being listed successfully.</h2>
                            <div className="text-center" style={{ marginTop : 20 }}>
                            <Link to="/"> <div className="btn btn-danger text-center">Click to see all books  </div></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
);

export default Success;