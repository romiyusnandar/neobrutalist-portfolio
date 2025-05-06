<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import Skills from './components/Skills.svelte';
  import Contact from './components/Contact.svelte';
</script>

<main class="relative">
  <Navbar />
  
  <div class="container mx-auto px-4">
    <section id="hero" class="min-h-screen flex items-center">
      <Hero />
    </section>

    <section id="about" class="py-20">
      <About />
    </section>

    <section id="projects" class="py-20 bg-neo-yellow">
      <Projects />
    </section>

    <section id="skills" class="py-20">
      <Skills />
    </section>

    <section id="contact" class="py-20 bg-neo-pink">
      <Contact />
    </section>
  </div>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
