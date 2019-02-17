import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { get_all_goods } from '../../goods.service';
import './home.component.css';

class Home extends Component {

    state = {
        goods: [],
        isLoading: false,
        error: null,
    }


    componentDidMount() {
        this.setState({ isLoading: true });
           get_all_goods()
            .then(response => {
              // console.log(response);
               return response.data;
            })
            .then(data => {
                // console.log(data[0]);
                this.setState({ goods: data, isLoading: false })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    renderGoods = (good) => {
        var path = '/details/' +good._id;
        return <div key={good._id}  className="col-md-4">
                <div className="h_grid">
                  <i className="fa fa-store grid_fa"></i>
                  <div className="grid_good_title"> {good.name} </div>
                  <div className='btn btn-primary grid_good_btn'><Link style={{ color: 'white' }} to = { path }>View item</Link></div>
                </div>
              </div>
    };

    render() {
        const goods_Ids = this.state.goods;

        return (
          <React.Fragment>
          <Helmet>
              <title> Welcome to our Store. </title>
          </Helmet>
          <section id="intro" className="section-intro">
            <div className="overlay">
              <div className="container">
                <div className="main-text">
                  <h1 className="intro-title">Welcome To <span >STORE</span></h1>
                  <p className="sub-title">Our store</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row h_books_grid">
                <div className=''>
                  { goods_Ids.map( this.renderGoods ) }
                  
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>


        );
    }
}

export default Home;