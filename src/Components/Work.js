import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import img1 from "../Assets/8.jpeg"
import img2 from "../Assets/9.jpeg"
import img3 from "../Assets/10.jpeg"
import img4 from "../Assets/7.jpeg"
import img5 from "../Assets/4.jpeg"



const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Items",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
         <span className="backgorund">
            <section className="gallery">
                <article className="card">
                    <figure>
                        <img
                        src={img1}
                        alt="Preview"
                        title="Preview"
                        />
                    </figure>
                </article>
                <article className="card">
                    <figure>
                        <img
                        src={img2}
                        alt="Preview"
                        title="Preview"
                        />
                    </figure>
                </article>

                <article className="card">
                    <figure>
                        <img
                        src={img3}
                        alt="Preview"
                        title="Preview"
                        />
                    </figure>
                </article>

                <article className="card">
                    <figure>
                        <img
                        src={img4}
                        alt="Preview"
                        title="Preview"
                        />
                    </figure>
                </article>

                <article className="card">
                    <figure>
                        <img
                        src={img5}
                        alt="Preview"
                        title="Preview"
                        />
                    </figure>
                </article>

         
            </section>
        </span>
      </div>
    </div>
  );
};

export default Work;
