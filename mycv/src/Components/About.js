import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

class About extends Component{
    state={
        infos: [
            {
                title: "first name",
                value: "Van"
            },
            {
                title: "last name",
                value: "Pham"
            },
            {
                title: "age",
                value: "26"
            },
            {
                title: "nationality",
                value: "Vietnamese"
            },
            {
                title: "freelance",
                value: "Available"
            },
            {
                title: "address",
                value: "HCM city"
            },
            {
                title: "phone",
                value: "+84902450647"
            },
            {
                title: "email",
                value: "bichvanphamnguyen1412@gmail.com"
            },
            {
                title: "zalo",
                value: "+84902450647"
            },
            {
                title: "languages",
                value: "English"
            },
        ],
        stats: [
            {
                stats_number: "1",
                stats_content: "year of",
                stats_block: "experience"
                
            },
            {
                stats_number: "2",
                stats_content: "completed",
                stats_block: "projects"
            }
        ],
        skills: [
            {
                skill_percent: "65",
                skills_name: "HTML"    
            },
            {
                skill_percent: "55",
                skills_name: "CSS" 
            },
            {
                skill_percent: "50",
                skills_name: "JAVASCRIPT" 
            },
            {
                skill_percent: "35",
                skills_name: "LARAVEL" 
            },
            {
                skill_percent: "45",
                skills_name: "REACT" 
            },
        ],
        resumes: [
            {
                resumes_time: "2021-PRESENT",
                resumes_doing: "Web Developer",
                resumes_place: "Aptech",
                resumes_content: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            },
            {
                resumes_time: "2021-PRESENT",
                resumes_doing: "Web Developer",
                resumes_place: "Aptech",
                resumes_content: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            },
            {
                resumes_time: "2021-PRESENT",
                resumes_doing: "Web Developer",
                resumes_place: "Aptech",
                resumes_content: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            },
            {
                resumes_time: "2021-PRESENT",
                resumes_doing: "Web Developer",
                resumes_place: "Aptech",
                resumes_content: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            },
            {
                resumes_time: "2021-PRESENT",
                resumes_doing: "Web Developer",
                resumes_place: "Aptech",
                resumes_content: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            },
            {
                resumes_time: "2021-PRESENT",
                resumes_doing: "Web Developer",
                resumes_place: "Aptech",
                resumes_content: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            }
        ]
    }
    render(){
        return(
            <div className="container-fluid about-wrapper" 
                 data-aos="fade-up"
                 data-aos-duration="1200">
                    <div className="about-title-section text-left text-sm-center">
                        <h1>about
                            <span> me</span>
                        </h1>
                        <span className="about-title-bg">Resume</span>
                    </div>
                    
                    <section className="about-main-content">
                        <div className="container">
                            <div className="row">
    
                                <div className="col-xl-6 col-lg-5 col-12">
                                    <div className="row">
    
                                        <div className="col-12">
                                            <h3 className="text-uppercase mb-0 ft-wt-600 about-custom-title">personal infos</h3>
                                        </div>
    
                                        <div className="col-12">
                                            <ul className="about-list list-unstyled">
                                                {this.state.infos.map((info, index) =>{
                                                    return(
                                                        <li key={index}>
                                                            <span className="about-list-title">{info.title}: </span>
                                                            <span className="about-list-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{info.value}</span>
                                                        </li>
                                                    ) 
                                                })}                                               
                                            </ul>
                                        </div>
    
                                    </div>
                                </div>
    
                                <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                                    <div className="row">
                                        {this.state.stats.map((stat, index) => {
                                            return(
                                            <div className="col-6" key={index}>
                                                <div className="about-box-stats with-margin">
                                                    <h3 className="position-relative poppins-font">{stat.stats_number}</h3>
                                                    <p className="position-relative text-uppercase m-0">{stat.stats_content}
                                                        <span className="d-block">{stat.stats_block}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
    
                            </div>

                            <hr className="separator"/>

                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center ft-wt-600 about-custom-title">my skills</h3>
                                </div>

                                <div className="col-12 mt-5 mb-3 mb-sm-5">
                                    <div className="row">
                                        {this.state.skills.map((skill, index) => {
                                            return(
                                            <div className="col-xl-3" key={index}>
                                                <div className="about-box-skills with-margin">
                                                    <h3 className="position-relative poppins-font">{skill.skill_percent}</h3>
                                                    <p className="position-relative text-uppercase m-0">{skill.skills_name}</p>
                                                </div>

                                                <hr className="separator"/>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-12">
                                    <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center ft-wt-600 about-custom-title">experience & education</h3>
                                </div>

                                <div className="col-12 mt-5 mb-3 mb-sm-5">
                                    <div className="row">
                                        {this.state.resumes.map((resume, index) => {
                                            return(
                                                <div className="col-lg-6 m-15px-tb" key={index}>
                                                    <div className="about-resume-box">
                                                        <ul>
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="fa fa-briefcase"></i>
                                                                </div>
                                                                <span className="text-uppercase time">{resume.resumes_time}</span>
                                                                <h5 className="poppins-font text-uppercase">{resume.resumes_doing}
                                                                    <span className="place">{resume.resumes_place}</span>
                                                                </h5>
                                                                <p>{resume.resumes_content}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
    
    
}

export default About;