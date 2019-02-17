import React from 'react';
import './add.component.css';
import Helmet from 'react-helmet';
// import  { history } from 'react-router-dom';
import { add_good } from '../../goods.service';

export default class AddgoodComponent extends React.Component {

  state = {
    name: '',
    button_clicked: false,
    submision_error: false,
    button_disabled: false,
    file: {}
  }

  submit_good = (e) => {
    e.preventDefault();
    this.setState({button_clicked: true, button_disabled: true});
    let formData = new FormData()
    formData.append('good_file', this.state.file);
    formData.append('good_file_title', this.state.file.name);
    formData.append('name', e.target.elements.name.value);
    formData.append('color', e.target.elements.color.value);
    formData.append('price', e.target.elements.price.value);
    formData.append('description', e.target.elements.description.value);
    formData.append('category', e.target.elements.category.value);


    // console.log(this.state.file);
    // console.log(formData)




    add_good(formData)
      .then(res => {
        console.log(res.data);
        if(res.data.error){
          this.setState({submision_error: true, button_clicked: false, button_disabled: false});
        }else{
          this.props.history.push('/details/' + res.data.itemId);
        }
      })
  }

  fileChangedHandler(e) {
    let file = e.target.files[0];
    // console.log(file);
    this.setState({ file: file });
  }


  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Add a new good - Store</title>
        </Helmet>
        <section id="intro" className="section-intro">
          <div className="overlay">
            <div className="container">
              <div className="main-text">
                <h1 className="intro-title"> Add an item to the store </h1>
              </div>
            </div>
          </div>
        </section>
          <section id="content" style = {{ marginTop: -100 }}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-9 col-md-offset-2 content">
                  <div className="page-ads box">

                    {
                      this.state.submision_error ? <div className = 'alert alert-info'> An error occured, please try again </div> : <div></div>
                    }
                    
                    <form onSubmit={this.submit_good} encType="multipart/form-data">
                      <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" ref={this.nameRef} name="name" placeholder="Name of item" type="text" required/>
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input className="form-control" ref={this.priceRef} name="price" placeholder="Goods price" type="text" required/>
                      </div>
                      <div className="form-group">
                        <label>Color</label>
                        <input className="form-control" ref={this.colorRef} name="color" placeholder="Goods color" type="text" required/>
                      </div>
                      <div className="form-group">
                        <label>Category</label>
                        <select className="form-control" ref={this.catRef} required name="category">
                          <option value="">Select a category</option>
                          <option value="Shoe">Shoe</option>
                          <option value="Trouser">Trouser</option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Upload Item Pic</label>
                        <input className="form-control" ref={this.fileRef} name="file" type="file" onChange={ (e) => this.fileChangedHandler(e) } />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" ref={this.descRef} className="form-control" rows="4" required></textarea>
                      </div>

                      
                      <button className="btn btn-success btn-sty" type="submit" disabled={this.state.button_disabled}>
                        {
                          !this.state.button_clicked ? 'Add good' : 'Processing...'
                        }
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

      </React.Fragment>
    )
  }
}