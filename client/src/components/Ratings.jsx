import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component';


class Ratings extends React.Component {


  render() { 
    
    const allData = this.props.value;
    // const data = this.props.data;
    
    const overall = allData.map(data => {
      return data.overall;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const foods = allData.map(data => {
      return data.food;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const services = allData.map(data => {
      return data.service;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const ambience = allData.map(data => {
      return data.ambience;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const value = allData.map(data => {
      return data.value;
    }).reduce((total, val) => {
      return total + val
    }, 0);
    
    return (
    <div className="rating_content">
      <div className="rt_l1">What {allData.length} People Are Saying </div>

      <div className="rating">
        <div className="rt_left">
          <div className="rt_l2">Overall ratings and reviews</div>
          <div className="rt_l3">Reviews can only be made by diners who have eaten at this restaurant</div>
          <div className="rt_l4">
          <div className="icons">
            <ReactStars 
            count={5}
            size={18}
            color1={'#da3743'}
            edit={false}
            half={true}
            />
          </div>

          <div className="rt_l5">
            <span className="span_1">{(overall / allData.length).toFixed(1)}</span>
            <span className="span_2">based on recent ratings</span>
          </div>        
          </div>

          <div className="rt_l6">
            <div className="score_1">
              <div className="cat_1">{(foods/ allData.length).toFixed(1)}</div>
              <div className="cat_2">Food</div>
            </div>
            <div className="score_2">
              <div className="cat_3">{(services/ allData.length).toFixed(1)}</div>
              <div className="cat_4">Service</div>
            </div>
            <div className="score_3">
              <div className="cat_5">{(ambience/ allData.length).toFixed(1)}</div>
              <div className="cat_6">Ambience</div>
            </div>
            <div className="score_4">
              <div className="cat_7">{(value/ allData.length).toFixed(1)}</div>
              <div className="cat_8">Value</div>
            </div>  
          </div>

          <div className="rt_l7">
            <div className="ic_noise">
              <i className="fa fa-signal"></i>
            </div>

            <div className="ic_text1">
              Noise&nbsp;-&nbsp;
              <span className="ic_text_1">Moderate</span>
            </div>
          </div>

          <div className="rt_l8">
            <div className="ic_like">
              <i className="far fa-thumbs-up"></i>
            </div>
            <div className="ic_text2">
              90% of people&nbsp;
              <span className="ic_text_2">would recommend it to a friend</span>
            </div>
          </div>
        </div>
      

        <div className="rating_right_col">
          <div className="rt_right">
            <div className="data" onClick={() => this.props.handleClick(5)}>
              <span className="data_num" >5</span>
              <div className="bar" >
                <span className="bar_5"></span>
                <span></span>
              </div>
            </div>

            <div className="data" onClick={() => this.props.handleClick(4)}>
              <span className="data_num">4</span>
              <div className="bar" >
                <span className="bar_4"></span>
                <span></span>
              </div>
            </div>

            <div className="data" onClick={() => this.props.handleClick(3)}>
              <span className="data_num">3</span>
              <div className="bar" >
                <span className="bar_3"></span>
                <span></span>
              </div>
            </div>

            <div className="data" onClick={() => this.props.handleClick(2)}>
              <span className="data_num">2</span>
              <div className="bar">
                <span className="bar_2"></span>
                <span></span>
              </div>
            </div>

            <div className="data" onClick={() => this.props.handleClick(1)}>
              <span className="data_num">1</span>
              <div className="bar">
                <span className="bar_1"></span>
                <span></span>
              </div>
            </div>
          

          </div>
        </div>
      </div>
      <div className="ex_content">
        <div className="loved_for">
        Loved For
        <i className="fas fa-exclamation-circle"></i>
        </div>

        <div className="temp">
          <div className="t1">
            <div className="ic_trophy">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="ic_text">
              <div className="ext_1">Contemporary American</div>
              <div className="ext_2">San Francisco</div>
            </div>
          </div>
        </div>
      </div>
      <div className="link">
        <a href="//www.opentable.com/s/best-restaurants-in-pacific-heights/n42" className="link">Best Restaurants in Pacific Heights ></a>
      </div>

    </div> 
  )}
};

export default Ratings;

