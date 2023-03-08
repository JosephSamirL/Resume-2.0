import React from 'react'
import Slide from "react-reveal";
interface Props {
    data: {
        name: string;
        profilepic: string;
    
        bio: string;
        address: {
          street: string;
          city: string;
          state: string;
          zip: string;
        };
        phone: string;
        email: string;
        resumedownload: string;
    }
}
const About = (props:Props) => {

        if (!props.data) return null;

    const name = props.data.name;
    const profilepic =  props.data.profilepic;
    const bio = props.data.bio;
    const street = props.data.address.street;
    const city = props.data.address.city;
    const state = props.data.address.state;
    const zip = props.data.address.zip;
    const phone = props.data.phone;
    const email = props.data.email;
    const resumeDownload = props.data.resumedownload;
   return (
      <section id="about">
        <Slide duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    )
}

export default About
