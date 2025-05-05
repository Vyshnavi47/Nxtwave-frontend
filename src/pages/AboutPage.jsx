import "./StaticPages.css"

const AboutPage = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
        </div>

        <div className="page-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
              dapibus.
            </p>
            <p>
              Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam
              at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc
              eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque
              faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
              dapibus.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage
