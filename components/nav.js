import Link from 'next/link';


export default function Nav() {
  return (
    <div className="bar">
      <h3>th</h3>
      <Link href="/">
        <a className="linker">home</a>
      </Link>
      <Link href="/projects">
        <a className="linker">projects</a>
      </Link>
      <Link href="/tools">
        <a className="linker">tools</a>
      </Link>
      <Link href="https://github.com/tristanhanna">
        <a className="linker">github</a>
      </Link>
      <style jsx>{`
        .bar{
            width:100%;
            position:fixed;    
            display:flex;
            flex-direction: horizontal;
            justify-content: space-around;
            text-align: center;
            padding-right:10%;
            padding-left:10%;
            background:rgba(255,255,255,0.5);
            position:fixed;
            color:#270949;
        }      
        
        .linker {
            padding:1rem;
            text-decoration: none;
            font-size:1em;
        }

        .linker:hover,
        .linker:focus,
        .linker:active {
          color: #0070f3;
          border-color: #0070f3;
        }
      `}</style>
    </div>
  )
}