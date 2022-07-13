import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <section className="homepage hero is-fullheight-with-navbar">
        <div className="hero-body is-overlay">
          <Link to="/coins" className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <figure className="image is-square">
                  <img src="/crystal-crypto-logo.svg" alt="image" />
                </figure>
              </div>
            </div>
            <h1
              Link
              to="/coins"
              className="title is-1 has-text-centered has-text-white"
            >
              Crystal Crypto
            </h1>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
