import Head from 'next/head';
import Anime from 'react-anime';
import Nav from '../components/nav';

export default function Home() {
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
      <div className="top">
          <div className="styleAnime">
          <div className="firstName">
            <Anime scale={[0, 1]} translateX={[-100,0]} translateY={[100,0]} delay={10}>
                <div className="t">t</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[100,0]} translateY={[-100,0]} delay={200}>
                <div className="t">r</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[-100,0]} translateY={[100,0]} delay={400}>
                <div className="t">i</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[100,0]} translateY={[-100,0]} delay={600}>
                <div className="t">s</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[-100,0]} translateY={[100,0]} delay={800}>
                <div className="t">t</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[100,0]} translateY={[-100,0]} delay={1000}>
                <div className="t">a</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[-100,0]} translateY={[100,0]} delay={1200}>
                <div className="t">n</div>
            </Anime>
        </div>
        <div className="lastName">
            <Anime scale={[0, 1]} translateX={[100,0]} translateY={[-100,0]} delay={1400}>
                <div className="t">h</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[-100,0]} translateY={[100,0]} delay={1600}>
                <div className="t">a</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[100,0]} translateY={[-100,0]} delay={1800}>
                <div className="t">n</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[-100,0]} translateY={[100,0]} delay={2000}>
                <div className="t">n</div>
            </Anime>
            <Anime scale={[0, 1]} translateX={[100,0]} translateY={[-100,0]} delay={2200}>
                <div className="t">a</div>
            </Anime>
        </div>
        </div>
        <div className="descTag">
        <Anime scale={[0, 1]} delay={2400}>
        <p className="description">
          web development
        </p>
        </Anime>
        </div>
      </div>
        <Anime scale={[0, 1]} delay={2600} duration={3000}>
        <div className="grid">
            <a href="/projects" className="card">
            <img src="/projects1.png" className="imgStyle" onMouseOver={e => (e.currentTarget.src = "/projects2.png")} onMouseOut={e => (e.currentTarget.src = "/projects1.png")}/>
                <br/>
              <h3>projects</h3>
            </a>
            <a href="/tools" className="card">
            <img src="/tools1.png" className="imgStyle" onMouseOver={e => (e.currentTarget.src = "/tools2.png")} onMouseOut={e => (e.currentTarget.src = "/tools1.png")}/>
                <br/>
              <h3>tools</h3>
            </a>
            <a href="https://github.com/tristanhanna" className="card">
            <img src="/git1.png" className="imgStyle" onMouseOver={e => (e.currentTarget.src = "/git2.png")} onMouseOut={e => (e.currentTarget.src = "/git1.png")}/>
                <br/>
              <h3>github</h3>
            </a>
        </div>
        </Anime>
      </main>
        <footer>
            <a href="https://www.linkedin.com/in/tristan-hanna-9100a1156/"><img src="/linkedin.png" height="35" /></a>
            <a href="https://nextjs.org/"><img src="/next.png" height="35" /></a>
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
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #270949;
          font-family: 'Comfortaa', cursive;
        }

        footer {
            width: 40%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }

        .firstName{
            display:flex;
            flex-direction:horizontal;
            justify-content:space-between;
        }

        .lastName{
            display:flex;
            flex-direction:horizontal;
            justify-content:space-between;
        }

        .t{
            font-size:8em;
        }

        .styleAnime{
            display:flex;
            flex-direction:horizontal;
        }

        .imgStyle{
            height:100px;
            padding:10px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
            text-align:right;
            margin-top:0;
        }

        .grid {
          display: flex;
          flex-direction:row;
            justify-content:space-around;
            justify-content:center;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
            width: 300px;
            background:rgba(0,0,0,.1);
          flex-basis: 25%;
          padding: 1.5rem;
          text-align: center;
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

        @media (max-width: 900px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
            .t{
                font-size:2.5em;
            }
            .description{
                font-size:1rem;
            }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
            background: url("/bgRed.jpg");
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
