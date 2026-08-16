<template>
  <div class="text-cont black-red">
    <h2 class="heading-h2">
      Moses Laurence
    </h2>

    <SubSect title="About">
      <p>
        I am a software developer with a strong focus on user experience. I specialize in building
        scalable UI architecture and accessible design systems resulting in applications that are
        easy to use and enjoyable to interact with.
      </p>

      <p>
        I obsess over middle earth, listen to music and read blogs in my free time.
        I love to build and experiment.
      </p>
    </SubSect>

    <SubSect title="Work Profile">
      <p>
        Self-taught, resourceful, eager to improve.
      </p>

      <p>
        As a freelance developer, I've collaborated with brands and startups
        to create innovative and user-friendly experiences.
      </p>
      <p>
        I'm primarily interested in full-time work, but I'm open to freelance
        opportunities that are a good fit.
      </p>
      <div class="flex flex-wrap items-center gap-3">
        <ZeButton text="Hire Me" link="/contact" small />
        <ZeButton
          text="View Resume" link="/resume" external small
          @click="umTrackView('/resume')"
        />
      </div>
    </SubSect>
  </div>
</template>
