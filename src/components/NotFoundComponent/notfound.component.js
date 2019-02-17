import React from 'react';


const NotFoundComponent = () => (
    <React.Fragment>
        <section>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div style={{ background: 'lightyellow', marginTop: 30 }}>
                            <p className='404 text-center' style={{ fontSize: 150, color: 'lightblue', marginBottom: 30 }}> 404 </p>
                            <div className='text-center'> File not found in this application. Go home to continue. </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    </React.Fragment>
)


export default NotFoundComponent;