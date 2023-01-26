import React, { Component } from "react";


class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
       
          <div className="row section-head">
            <div className="two columns header-col" >
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <h2 className="lead" >{message}</h2>
            </div>
          </div>
       

        <div className="row">
        
         
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact" style={{marginLeft:"30%"}}>
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>
                  {phone}
                  </span>
                </p>
              </div>

              <div className="widget widget_tweets" style={{marginLeft:"30%"}}>
                <h4 className="widget-title">More About Us</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      
                    </span>
                    
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis eta
                      quasi
                      
                    </span>
                    
                  </li>
                </ul>
              </div>
            </aside>
          
        </div>
      </section>
    );
  }
}

export default Contact;
