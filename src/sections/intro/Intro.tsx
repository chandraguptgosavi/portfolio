

export default function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center items-start"
    >
      <p
        className="my-3 md:my-4 
        text-green font-mono
        fade-200"
      >
        Hi, my name is
      </p>
      <p
        className="my-3 md:my-4 
        text-lightestSlate text-4xl xs:text-5xl md:text-6xl font-semibold
        fade-400"
      >
        Chandragupt.
      </p>
      <p
        className="my-3 md:my-4 
        text-4xl xs:text-5xl md:text-6xl font-semibold
        fade-600"
      >
        I make life easy through web applications.
      </p>
      <p className="my-3 md:my-4 max-w-xl fade-800">
        I’m an aspiring software engineer specializing in building exceptional
        digital experiences. Currently, I’m focusing on improving myself in all
        aspects and learning awesome things.
      </p>
    </section>
  );
}
