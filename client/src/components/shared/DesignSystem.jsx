import React from "react"

const DesignSystem = () => {
  return (
    <section>
      <h2 className="ff-serif">Design System</h2>

      <div id="colors" className="flex">
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>
        <div style={{ flexGrow: 1 }}>
          <div className="bg-dark rect">
            <p className="text-white">#0B0D17</p>
          </div>
          <p className="text-white">
            <span className="text-light-blue">RGB</span> 11, 13, 23
          </p>
          <p className="text-white">
            <span className="text-light-blue">HSL</span> 230, 35%,7%
          </p>
        </div>
        <div style={{ flexGrow: 1 }}>
          <div className="bg-light-blue rect">
            <p className="text-dark">#D0D6F9</p>
          </div>
          <p className="text-white">
            <span className="text-light-blue">RGB</span> 208, 214, 249
          </p>
          <p className="text-white">
            <span className="text-light-blue">HSL</span> 231, 77%, 90%
          </p>
        </div>
        <div style={{ flexGrow: 1 }}>
          <div className="bg-white rect">
            <p className="text-dark">#FFFFFF</p>
          </div>
          <p className="text-white">
            <span className="text-light-blue">RGB</span> 255, 255, 255
          </p>
          <p className="text-white">
            <span className="text-light-blue">HSL</span> 0, 0%, 100%
          </p>
        </div>
      </div>

      <div id="typography" style={{ margin: "4rem 0" }}>
        <h2>
          <span>02 </span>Typography
        </h2>
        <div class="flex">
          <div style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-light-blue">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 uppercase ff-serif">Earth</p>
            </div>
            <div>
              <p className="text-light-blue">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 uppercase ff-serif">Venus</p>
            </div>
            <div>
              <p className="text-light-blue">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 uppercase ff-serif">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-light-blue">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 uppercase ff-serif">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-light-blue">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-light-blue fs-500 uppercase ff-sans-cond letter-spacing-1">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-light-blue">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-light-blue">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 ff-sans-cond uppercase letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-light-blue ff-sans-cond">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-light-blue">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSystem
