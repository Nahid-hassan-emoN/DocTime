import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
};
const DocCardAll = () => {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    useQuery: ["users"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <h3>Loading Now.......</h3>;
  }
  if (error) {
    return <h3>Error{error.messae}</h3>;
  }

  return (
    <>
      <div className="doc-available-card grid grid-cols-4 gap-4 mt-3">
        {users.map((user) => (
          <div key={user.id} className="doc-online-card position-relative">
            <div className="doc-online-img">
              <img src={user.image} alt="" />
            </div>

            <div className="doc-online-card-details ">
              <p className="">Gynecologist &amp; Obstetrician</p>
              <h2 className="dic-name m-2">
                {`${user.firstName} ${user.lastName}`}
              </h2>
              <small>MBBS</small>
              <small>BCS (Health)</small>
              <small>MCPS (Gynae &amp; Obs)</small>
              <small>MRCOG (Gynae &amp; Obs) (UK)</small>

              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value="4.5"
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <h5 className="price">
                ৳ 500.00 &nbsp;
                <strike>৳ 1000</strike>
                &nbsp;
                <span>(incl. VAT)</span>
              </h5>
              <div className="col-10 mx-auto">
                <Link
                  to=""
                  className="btn-light-green flex justify-between mt-3"
                >
                  <BsCameraVideoFill className="video-icon" />
                  <span>ডাক্তার দেখান</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DocCardAll;
