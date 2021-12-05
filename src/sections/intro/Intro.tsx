

export default function Intro() {
  return (
    <section id="intro" className="min-h-screen flex flex-col justify-center items-start">
      <p className="my-3 md:my-4 
        text-green font-mono
        fade-200"
      >Hi, my name is</p>
      <p className="my-3 md:my-4 
        text-lightestSlate text-4xl xs:text-5xl md:text-6xl font-semibold
        fade-400"
      >
          Chandragupt.
        </p>
      <p className="my-3 md:my-4 
        text-4xl xs:text-5xl md:text-6xl font-semibold
        fade-600"
      >
          I love to build things for the web.
        </p>
        <p className="my-3 md:my-4 max-w-xl fade-800">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
    </section>
  );
}
