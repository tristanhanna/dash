import Head from 'next/head';
import Anime from 'react-anime';
import Nav from '../components/nav';

export default function Tools() {
  return (
      <div>
      <Nav>
      </Nav>
    <div className="container">
      <Head>
        <title>Tristan Hanna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
            @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
        </style>

      <main>
        <h1 className="heading">tools</h1>
        <p className="description">my favorite web dev tools</p>
        <div className="grid">
          <a href="https://nextjs.org/" className="card">
            <img src="/next.png" height="60"/>
          </a>

          <a href="https://reactjs.org/" className="card">
              <img src="/react.png" height="60"/>
          </a>

          <a href="https://firebase.google.com/"
            className="card">
                <img src="/firebase.png" height="60"/>
          </a>
    
          <a href="https://www.postgresql.org/"
            className="card">
                <img src="/postgres.png" height="60"/>
          </a>
        </div>
        <div className="grid">
          <a href="https://github.com/"
            className="card">
                <img src="/github.png" height="60"/>
          </a>
    
          <a href="https://aws.amazon.com/"
            className="card">
                <img src="/aws.png" height="60"/>
          </a>
            
          <a href="https://expressjs.com/"
            className="card">
                <img src="/express.png" height="60"/>
          </a>
    
          <a href="https://ejs.co/"
            className="card">
                <img src="/ejs.png" height="60"/>
            </a>
        </div>
        <div className="grid">
          <a href="https://git-scm.com/"
            className="card">
                <img src="/git.png" height="60"/>
          </a>
    
          <a href="https://www.chartjs.org/"
            className="card">
                <img src="/chart.svg" height="60"/>
          </a>
            
          <a href="https://developer.leapmotion.com/"
            className="card">
                <img src="/leap.png" height="60"/>
          </a>
        </div>
      </main>
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
            color: #32CD32;
            font-family: 'Comfortaa', cursive;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .styleAnime{
            display:flex;
            flex-direction:horizontal;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
            margin-top:0;
        }

        .heading{
            font-size:6em;
            margin-bottom:0;
        }

        .grid {
          display: flex;
          flex-direction:row;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
            background:#ffffff;
          flex-basis: 25%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 2px solid #ffffff;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
            border: 2px solid #32cd32;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
            background:url("/bgBlack.jpg");
            background-attachment:fixed;
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
