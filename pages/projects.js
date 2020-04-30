import Head from 'next/head';
import Anime from 'react-anime';
import Nav from '../components/nav';

export default function Projects() {
  return (
    <div>
      <Nav>
      </Nav>
      <div className="container">
      <Head>
        <title>Tristan Hanna</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <style>
                    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
        </style>

      <main>
        <Anime scale={[0, 1]} delay={300}>
        <h1 className="heading">projects</h1>
        </Anime>
        <Anime scale={[0,1]} translateX={[-1000,0]} duration={4000} delay={800}>
        <div className="grid">
          <a href="https://vimeo.com/409891546" className="card">
            <h3>Future Motion</h3>
            <p>Vehicle interface emulator that uses gesture controls.</p>
          </a>

          <a href="https://creative.colorado.edu/~bewa8445/FWD/Projects/project2/" className="card">
            <h3>Hangman</h3>
            <p>Hangman game built using React framework.</p>
          </a>

          <a href="https://creative.colorado.edu/~trha0779/runner/"
            className="card">
            <h3>Runner</h3>
            <p>Old school runner game using Phaser and Firebase.</p>
          </a>

          <a href="https://color-theta.now.sh/"
            className="card">
            <h3>Pixel Board</h3>
            <p>
              Pixel art board using Next.js framework.
            </p>
          </a>
            <a href="https://tristanhanna.myportfolio.com/sound-box"
                className="card">
                <h3>Sound Box</h3>
                <p>
                  Physical computing project; uses p5.js.
                </p>
              </a>
            <a href="https://github.com/tristanhanna"
                className="card">
                <h3>Github</h3>
                <p>
                  My Github has projects that are more backend focused.
                </p>
              </a>
        </div>
        </Anime>
      </main>
        <footer>
            <p>tristan.hanna@colorado.edu</p>
            <img src="/next.png" height="35" />
        </footer>
      <style jsx>{`
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
            padding-top: 3rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            color: #270949;
            font-family: 'Comfortaa', cursive;
        }

        footer {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
          align-items:center;
        }

        .heading{
            font-size:6em;
            margin-bottom:0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
            text-align:center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
            background:rgba(0,0,0,.1);
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #270949;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
            .heading{
                font-size:3em;
            }
            .description{
                font-size:1em;
            }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
            background:url("/bgWhite.jpg");
            background-attachment:fixed;
          background-size:cover;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </div>
  )
}
