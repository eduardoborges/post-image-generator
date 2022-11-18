export default function genImage(title: string, date: string, author: string) {
  return `
    <svg style="background: #41fd84" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <style>
        @import url('/static/fonts/fonts.css');
        :root {
          --maincolor: #41fd84;
          --bordercl: #bafee1;
          --callouctcolor: #b0b4be;
          --hovercolor: var(--maincolor);
          --darkMaincolor: var(--maincolor);
          --font: 'Fantasque Sans Mono';
          --dark: #1c1c1b;
        }
        *{
          font-family: var(--font), monospace;
        }
      </style>
    
      <defs>
        <clipPath id="avatar-circle">
          <circle cx="80%" cy="35%" r="10%"/>
        </clipPath>
      </defs>
    
      <filter id="grayscale">
        <feColorMatrix type="saturate" values="0.10"/>
      </filter>
    
    
      <line stroke-dasharray="10" x1="5%" x2="5%" y1="90%" y2="10%" stroke="#bafee1" stroke-width="5" />
      <line stroke-dasharray="10" x1="5%" x2="95%" y1="10%" y2="10%" stroke="#bafee1" stroke-width="5" />
      <line stroke-dasharray="10" x1="95%" x2="95%" y1="90%" y2="10%" stroke="#bafee1" stroke-width="5" />
      <line stroke-dasharray="10" x1="5%" x2="95%" y1="90%" y2="90%" stroke="#bafee1" stroke-width="5" />
    
      <foreignObject x="100" y="100" width="60%" height="200%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="
            width: 100%; height: 100%;
            font-size: 32px;
            overflow: hidden;
            padding:0;
            margin:0;
          ">
          <h1 style="
            text-decoration: underline;
            text-decoration-thickness: 10px;
            text-decoration-color: var(--bordercl);
          ">${title}</h1>
          <small>Por ${author}</small>
        </div>
      </foreignObject>
    
      <text>
        <tspan x="100" y="85%" font-size="2em">Postado em ${date}</tspan>
      </text>
    
      <image xmlns="http://www.w3.org/2000/svg" href="/static/me.jpeg" x="72%" y="20.5%" width="210" height="210" filter="url(#grayscale)" clip-path="url(#avatar-circle)"/>
    </svg>
  `;
}
