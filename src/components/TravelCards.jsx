import React from "react";
import images from "../images/index";

function TravelCards({ post }) {
  return (
    <>
      {post.map((item) => {
        let pic = item.location.toLowercCase();
        if (pic === "San Francisco") pic = "San Francisco";
        else if (pic === "San Diego") pic = "San-Diego";
        return (
          <div key={item.id} className="col-md">
            <div className="card">
              <img
                className="post-image-height"
                src={images[pic]}
                alt="img-location"
              />
              <div className="card-body">
                <p>{item.title}</p>
                <h6 className="text-muted">{item.location}</h6>
                <p>{(item.content, substring(0, 55))}...</p>

                <div className="d-flex justify-content-end">
                  <button type="click" className="btn btn-warning ml-auto">
                    Go to Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
