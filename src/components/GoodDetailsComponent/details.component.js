import React, { Component } from 'react';
import { get_good_with_id } from '../../goods.service';
import Helmet from 'react-helmet';
import './details.component.css';


class Details extends Component {

  state = {
    goods_id: null,
    goods_details: {},
    isLoading: false,
    error: false
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    const { match : { params } } = this.props;
    
    var goods_Id = params.goodsId;
    this.setState({ goods_id: goods_Id });

    
    get_good_with_id(goods_Id)
     .then(response => {
       // console.log(response.data);
        return response.data;
     })
     .then(data => {
         // console.log(data[0]);
         this.setState({ goods_details: data, isLoading: false })
     })
     .catch(error => this.setState({ error, isLoading: false }));
  }


    render() {
      
      const { name, price, category, description, color, image } = this.state.goods_details;

      return (
      this.state.isLoading ? 
      <React.Fragment>
        <section>
          <div className='container'>
            <div className='row'>
              <p className='text-center' style={{ fontSize: 30, color: 'red', marginTop: 100 }}> Loading... </p>
            </div>
          </div>
        </section>
      </React.Fragment>
      :
       <React.Fragment>
          <Helmet>
              <title>Details - Store </title>
          </Helmet>
          <div id="content">
              <div className="container">
                  <div className="row">
                      <div className="product-info">
                                <div className="col-sm-12">
                                    <div className="inner-box ads-details-wrapper">
                                    <h2> { name } </h2>
                                    {/*<h2>MacBook 2016 with 256 SSD and 8GB RAM</h2>*/}
                                     <div id="owl-demo" className="owl-carousel owl-theme" style={{ marginTop: 30 }}>
                                        <div className="item">
                                            <img src="/img/5.png" alt=""/>
                                        </div>
                                      
                                    </div>
                                </div>
                        <div className="Ads-Details">
                            <h2 className="title-2"><strong>Product Details</strong></h2>
                            <div className="row">
                                <div className="ads-details-info col-md-8">
                                    <p> { description } </p>
                                    
                                </div>
                                <div className="col-md-4">
                                    <aside className="panel panel-body panel-details">
                                        <ul>
                                            <li>
                                                <p className=" no-margin "><strong>Price:</strong> ${ price }</p>
                                            </li>
                                            <li>
                                                <p className="no-margin"><strong>Color:</strong> <span> { color } </span> </p>
                                            </li>
                                            <li>
                                                <p className="no-margin"><strong>Category:</strong> <span> { category } </span></p>
                                            </li>
                                          
                                        </ul>
                                    </aside>
                                    <div className="ads-action">
                                       
                                        <div className="btn btn-success" style ={{ marginRight: 10 }}> Add to Cart </div>
                                        <div className="btn btn-danger" > Add to Wishlist </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                  </div>
              </div>
          </div>
      
       </React.Fragment>
      );
    }
  }

  export default Details;
