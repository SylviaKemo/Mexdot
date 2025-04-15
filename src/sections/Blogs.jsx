import { CiClock2 } from "react-icons/ci";

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="blogs-heading">
          <span className="sub-title">our latest blogs</span>
          <h2 className="title mt">
            Find a service that<br></br> works for you
          </h2>
        </div>
        <div className="blogs-content">
          <div className="blogs-card">
            <div className="post-author">
              <img src="/t-1.jpg" alt="" className="post-author-img" />
              <div className="post-author-info">
                <div className="post-author-info-name">
                  <h3>Darlene Robertson</h3>
                  <p>Editor</p>
                </div>
                <div className="post-timer">
                  <CiClock2 />
                  <p>Oct 15,2024</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/blog-1.jpg" alt="" className="blog-img" />
            </div>
            <div>
              <h4>
                Building trust online the<br></br> role of web
              </h4>
            </div>
          </div>
          <div className="blogs-card">
            <div className="post-author">
              <img src="/t-2.jpg" alt="" className="post-author-img" />
              <div className="post-author-info">
                <div className="post-author-info-name">
                  <h3>Darlene Robertson</h3>
                  <p>Editor</p>
                </div>
                <div className="post-timer">
                  <CiClock2 />
                  <p>Oct 15,2024</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/blog-2.jpg" alt="" className="blog-img" />
            </div>
            <div className="">
              <h4>
                Building trust online the<br></br> role of web
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
