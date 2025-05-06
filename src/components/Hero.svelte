<script>
  let isHovered = false;
</script>

<div class="grid md:grid-cols-2 gap-8 items-center">
  <div class="space-y-6">
    <div class="space-y-4">
      <h1 class="text-6xl md:text-7xl lg:text-8xl font-display font-bold">
        <span class="block">Creative</span>
        <span class="block text-neo-pink">Developer</span>
      </h1>
      <p class="text-xl md:text-2xl font-body">
        Crafting digital experiences with bold & brutalist design
      </p>
    </div>

    <div class="flex flex-wrap gap-4">
      <a 
        href="#projects"
        class="neo-button bg-neo-pink text-white hover:bg-neo-pink/90"
      >
        View Projects
      </a>
      <a 
        href="#contact"
        class="neo-button"
      >
        Get in Touch
      </a>
    </div>
  </div>

  <div 
    class="relative"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    role="presentation"
    aria-label="Interactive decorative element"
  >
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-40 h-40 bg-neo-yellow border-neo border-neo-black -z-10 
                transform translate-x-4 -translate-y-4 transition-transform duration-300"
         class:rotate-12={isHovered}>
    </div>
    
    <!-- Main image/avatar container -->
    <div class="neo-card aspect-square">
      <div class="w-full h-full bg-neo-blue border-neo border-neo-black flex items-center justify-center">
        <span class="text-6xl">
          <i class="fas fa-user-astronaut"></i>
        </span>
      </div>
    </div>

    <!-- Additional geometric shape -->
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-neo-green border-neo border-neo-black -z-10 
                transform -translate-x-4 translate-y-4 transition-transform duration-300"
         class:-rotate-12={isHovered}>
    </div>
  </div>
</div>

<!-- Floating shapes -->
<div class="absolute top-20 left-10 w-16 h-16 bg-neo-blue border-neo border-neo-black 
            animate-bounce hidden md:block" style="animation-delay: 0.2s">
</div>
<div class="absolute bottom-20 right-10 w-20 h-20 bg-neo-pink border-neo border-neo-black 
            animate-bounce hidden md:block" style="animation-delay: 0.5s">
</div>
