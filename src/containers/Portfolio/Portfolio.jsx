import React from "react";
import Project from "../../components/Project/Project";

const Portfolio = () => {
  return (
    <>
      <main className="container py-5">
        <div className="row mt-4 px-3 px-md-0">
          <div className="col-12 bg-dark mx-md-3 px-4" id="portfolio">
            <header className="row">
              <div className="col-12">
                <h1 className="border-bottom" id="title">
                  Portfolio
                </h1>
              </div>
            </header>
            <section className="row card-group py-4">
              <Project
                title={"Project 1 - SearchU"}
                description={
                  "Web application for prospective college students to search cities and/or schools for University details and city quality of life metrics."
                }
                image={"./assets/gifs/search-u-gif.gif"}
                alt="SearchU Gif"
              />
              <Project
                title={"Weather Dashboard"}
                description={
                  "Application dashboard to search for current weather data for selected cities."
                }
                image={"./assets/images/weather-dashboard-screenshot.jpg"}
                alt={"Weather Dashboard Application Image"}
              />
              <Project
                title={"Food Truck Chasers"}
                description={
                  "Full CRUD application that allows users to search for Food Trucks in their city. This application also allows for truck operators to create, manage, and update their Food Trucks"
                }
                image={"./assets/images/food-truck-chasers2.jpg"}
                alt={"Food Truck Chasers Application Image"}
              />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
