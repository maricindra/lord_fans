function Squad_topics() {
  const topics = [
    {
      id: 1,
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="#4f6146" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 22V18" />
          <path d="M14 22V18" />
          <path d="M12 18a5 5 0 0 0 5-5V3H7v10a5 5 0 0 0 5 5Z" />
          <path d="m12 7 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
        </svg>
      ),
      text: "This legend won in all of eleven categories of indication",
    },
    {
      id: 2,
      // Se você quer que o ícone seja um link, mantenha assim:
      icon: (
        <a href="https://www.youtube.com/watch?v=yqKThTGi6I8&list=PL00F32DF9392A2667" target="_blank" rel="noopener noreferrer ">
          <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="#4f6146" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </a>
      ),
      text : "The best Soundtrack",
    },
    {
      id: 3,
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 128 128" fill="#4f6146" stroke="#4f6146" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
        <path d="M107 80A12 12 0 1 0 107 104 12 12 0 1 0 107 80zM57 90A12 12 0 1 0 57 114 12 12 0 1 0 57 90zM22 60A12 12 0 1 0 22 84 12 12 0 1 0 22 60z"/>
        <path d="M33.9 24c-1.6 0-2.9 1.4-2.9 3l0 31.2c0 .8-.8 1.2-1.5.8-2.7-1.6-6-2.3-9.4-1.9-6.8.9-12.3 6.4-13 13.3-1 9.4 6.7 17.2 16 16.6C31 86.4 37 79.5 37 71.6l0-41.1c3.5 1.2 6 4.5 6 8.4 0 1.2.7 2.4 1.9 2.8C47 42.6 49 41 49 39 49 30.7 42.2 23.9 33.9 24zM22 81c-5 0-9-4-9-9s4-9 9-9 9 4 9 9S27 81 22 81zM122 49.2c0-4.5-2.3-8.7-6.2-11.1-2.9-1.8-6.3-2.2-9.6-1.6l-29.7 5.9C70.4 43.7 66 49 66 55.2v33c0 .8-.8 1.2-1.5.8-2.7-1.6-6-2.3-9.4-1.9-6.8.9-12.3 6.4-13 13.3-1 9.4 6.7 17.2 16 16.6 7.9-.6 13.9-7.4 13.9-15.3l0-32.2 44-8.8v17.5c0 .8-.8 1.2-1.5.8-2.7-1.6-6-2.3-9.4-1.9-6.8.9-12.3 6.4-13 13.3-1 9.4 6.7 17.2 16 16.6 7.9-.6 13.9-7.4 13.9-15.3L122 49.2zM57 111c-5 0-9-4-9-9s4-9 9-9 9 4 9 9S62 111 57 111zM72 63.3v-8.1c0-3.3 2.4-6.2 5.6-6.9l30-6c2.1-.4 4.2.1 5.8 1.5 1.6 1.3 2.6 3.3 2.6 5.4v5.3L72 63.3zM107 101c-5 0-9-4-9-9s4-9 9-9 9 4 9 9S112 101 107 101z"/>
        </svg>
      ),
      text: "The best Cinematography, Visual Effects and Makeup",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 text-center md:flex-row gap-4  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-col items-center justify-center p-12 border border-white/30 aspect-square transition-all duration-300 hover:border-green03 group text-green03"
          >
            <div className=" mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
              {topic.icon}
            </div>

            <p className=" font-cocogothic text-center text-lg md:text-xl leading-relaxed uppercase tracking-wider">
              {topic.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Squad_topics;