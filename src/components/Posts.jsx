import React from "react";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="container-fluid mt-5 w-100" style={{ maxWidth: "1040px" }}>
      <div className="row  ">
        <div id="post" className="col-md-8">
          {/* Post 1 */}
          <div className="card mb-4">
            <img
              src="/images/image1.svg"
              className="card-img-top"
              alt="article thumbnail"
            />
            <div className="card-body">
              <div>
                <div>✍️ Article</div>
              </div>
              <div className="d-flex justify-content-between w-100 align-items-center mt-2">
                <h5  className="card-title">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h5>
                <div className="dropdown">
                  <button
                    className=" btn fs-3 border-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ...
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="card-text">
                I've worked in UX for the better part of a decade. From now on,
                I plan to re...
              </p>
             
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="/images/sarthak.svg"
                    className="rounded-circle"
                    alt="avatar"
                    width="45"
                    height="45"
                  />
                  <span style={{ marginLeft: "15px", fontWeight: "700" }}>
                    Sarthak Kamra
                  </span>
                </div>
                <div id="share-desktop" className=" justify-content-center gap-2 align-items-center">
                  <span className="mr-2">👁️ 1.4k views</span>
                  <img
                    src="/images/share.svg"
                    alt=""
                    style={{ backgroundColor: "#d3d3d3", padding: "5px" }}
                  />
                </div>
                <div id="share-mobile" className=" p-1 justify-content-between gap-1 align-items-center" style={{backgroundColor:"#d3d3d3"}}>
                  <img src="/images/share.svg" alt="" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="card mb-4">
            <img
              src="/images/image2.svg"
              className="card-img-top"
              alt="article thumbnail"
            />
            <div className="card-body">
              <div>
                <div>🎓 Education</div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <h5 className="card-title w-75">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h5>
                <div className="dropdown">
                  <button
                    className="btn fs-3  border-0 pb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ...
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="card-text">
                I've worked in UX for the better part of a decade. From now on,
                I plan to re...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="/images/sarah.svg"
                    className="rounded-circle"
                    alt="avatar"
                    width="45"
                    height="45"
                  />
                  <span className="ml-2 fw-bold" style={{ marginLeft: "15px" }}>
                    Sarah West
                  </span>
                </div>
                <div id="share-desktop" className=" justify-content-center gap-2 align-items-center">
                  <span className="mr-2">👁️ 1.4k views</span>
                  <img
                    src="/images/share.svg"
                    alt=""
                    style={{ backgroundColor: "#d3d3d3", padding: "5px" }}
                  />
                </div>
                <div id="share-mobile" className=" p-1 justify-content-between gap-1 align-items-center" style={{backgroundColor:"#d3d3d3"}}>
                  <img src="/images/share.svg" alt="" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <img
              src="/images/image3.svg"
              className="card-img-top"
              alt="article thumbnail"
            />
            <div className="card-body">
              
                <div>📝 MeetUp</div>

                
              
             <div className="d-flex justify-content-between align-items-center mt-2">
             <h5 className="card-title">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h5>
              <div className="dropdown">
                  <button
                    className="btn  fs-3  border-0"
                    type="button"
                    
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ...
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
             </div>
              <div
                className="card-text d-flex gap-5 "
                style={{ marginTop: "15px" }}
              >
                <p> 📅 Fri,12 Oct,2018</p>
                <p> 📍Ahmedabad,India</p>
              </div>
              <div className="w-100 ">
                <button className="w-100 border-1  shadow-none rounded-2 p-1 mb-3 bg-white ">
                  <span className="text-warning">View Website</span>
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="/images/rolan.svg" />
                </div>
                <div id="share-desktop"className=" justify-content-center gap-2 align-items-center">
                  <span className="mr-2">👁️ 1.4k views</span>
                  <img
                    src="/images/share.svg"
                    alt=""
                    style={{ backgroundColor: "#d3d3d3", padding: "5px" }}
                  />
                </div>
                <div id="share-mobile" className=" p-1 justify-content-between gap-1 align-items-center" style={{backgroundColor:"#d3d3d3"}}>
                  <img src="/images/share.svg" alt="" />
                  <span>Share</span>
                </div>
              </div>
              
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
            
                <div>💼 Job</div>
                
            
              <div className="d-flex justify-content-between align-items-center ">
              <h5 className="card-title">Software Developer-II</h5>
              <div className="dropdown">
                  <button
                    className="btn fs-3  border-0"
                    type="button"
                   
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ...
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card-text d-flex gap-5 "
                style={{ marginTop: "5px" }}
              >
                <p> 💼 Innovaccer Analytics Private Ltd</p>
                <p> 📍Noida,India</p>
              </div>
              <div className="w-100 ">
                <button className="w-100 border-1  shadow-none rounded-2 p-1 mb-3 bg-white ">
                  <span className="text-success">Apply on TimesJobs</span>
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="/images/joseph.svg"
                    className="rounded-circle"
                    alt="avatar"
                    width="45"
                    height="45"
                  />
                  <span
                    className="fs-4"
                    style={{ marginLeft: "15px", fontWeight: "700" }}
                  >
                    Joseph Gray
                  </span>
                </div>
                <div id="share-desktop" className=" justify-content-center gap-2 align-items-center">
                  <span className="mr-2">👁️ 1.4k views</span>
                  <img
                    src="/images/share.svg"
                    alt=""
                    style={{ backgroundColor: "#d3d3d3", padding: "5px" }}
                  />
                </div>
                <div id="share-mobile" className=" p-1 justify-content-between gap-1 align-items-center" style={{backgroundColor:"#d3d3d3"}}>
                  <img src="/images/share.svg" alt="" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5" id="location-search">
          <div
            className="d-flex justify-content-between align-items-center mb-3 "
            style={{ marginLeft: "104px" }}
          >
            <div className="d-flex gap-1">
              <img src="/images/location.svg" />
              <input
                type="text"
                placeholder="Enter your location"
                className="ml-2 border-0 "
                style={{ outline: "none" }}
              />
              <img src="/images/pen.svg" />
            </div>
          </div>
          <div
            style={{
              width: "230px",
              borderBottom: "1px solid black",
              height: "1px",
              marginLeft: "105px",
              opacity: 0.25,
            }}
          ></div>
          <img
            className="mt-3"
            style={{ marginLeft: "72px", height: "40px" }}
            src="/images/your.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Posts;
