<script>
  const skills = [
    { icon: 'fa-code', text: 'Frontend Development' },
    { icon: 'fa-paint-brush', text: 'UI/UX Design' },
    { icon: 'fa-mobile-alt', text: 'Responsive Design' },
    { icon: 'fa-rocket', text: 'Performance Optimization' }
  ];
</script>

<div class="container mx-auto">
  <h2 class="section-title">
    About<span class="text-neo-blue">.</span>
  </h2>

  <div class="grid md:grid-cols-2 gap-12">
    <!-- Left column with text -->
    <div class="space-y-6">
      <div class="neo-card">
        <p class="text-xl leading-relaxed">
          Hi! I'm a creative developer passionate about building unique digital experiences. 
          I combine clean code with bold design to create memorable websites and applications.
        </p>
      </div>

      <div class="neo-card bg-neo-yellow">
        <p class="text-lg">
          "The best way to predict the future is to create it."
        </p>
        <p class="font-display mt-2">- Peter Drucker</p>
      </div>
    </div>

    <!-- Right column with skills -->
    <div class="grid grid-cols-2 gap-4">
      {#each skills as skill}
        <div class="neo-card hover:bg-neo-pink hover:text-white transition-colors duration-300 
                    flex flex-col items-center text-center p-6">
          <i class="fas {skill.icon} text-3xl mb-4"></i>
          <span class="font-display font-bold">{skill.text}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Decorative elements -->
  <div class="relative mt-12">
    <div class="neo-card bg-neo-green p-8">
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 class="text-4xl font-bold mb-2">3+</h3>
          <p class="font-display">Years Experience</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold mb-2">50+</h3>
          <p class="font-display">Projects Completed</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold mb-2">100%</h3>
          <p class="font-display">Client Satisfaction</p>
        </div>
      </div>
    </div>

    <!-- Decorative shapes -->
    <div class="absolute -top-4 -right-4 w-24 h-24 bg-neo-blue border-neo border-neo-black -z-10"></div>
    <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-neo-pink border-neo border-neo-black -z-10"></div>
  </div>
</div>
