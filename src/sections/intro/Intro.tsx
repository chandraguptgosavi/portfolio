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
        I always get things done.
      </p>
      <div className="my-3 md:my-4 max-w-xl fade-800">
        <p>
        I am a skilled Software Engineer with 2 years of experience, specializing in Full-Stack Development with a strong problem-solving mindset.
        </p>
        <p>
        Throughout my career, I have tackled challenging problems and consistently delivered the most efficient solutions. In my free time, I enjoy solving complex algorithmic problems.
        </p>
      </div>
    </section>
  );
}
