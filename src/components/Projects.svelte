<script>
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      color: "bg-neo-pink",
      icon: "fa-shopping-cart"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      tags: ["Vue.js", "D3.js", "Firebase"],
      color: "bg-neo-blue",
      icon: "fa-chart-line"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application",
      tags: ["React Native", "GraphQL", "AWS"],
      color: "bg-neo-green",
      icon: "fa-dumbbell"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio website generator",
      tags: ["Svelte", "Tailwind", "Netlify"],
      color: "bg-neo-yellow",
      icon: "fa-code"
    }
  ];
</script>

<div class="container mx-auto">
  <h2 class="section-title">
    Projects<span class="text-neo-pink">.</span>
  </h2>

  <div class="grid md:grid-cols-2 gap-8">
    {#each projects as project}
      <div class="group">
        <div class="neo-card hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <!-- Project Header -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-display font-bold">{project.title}</h3>
            <div class="{project.color} p-4 border-neo border-neo-black">
              <i class="fas {project.icon} text-2xl"></i>
            </div>
          </div>

          <!-- Project Description -->
          <p class="text-lg mb-6">{project.description}</p>

          <!-- Project Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            {#each project.tags as tag}
              <span class="neo-button !py-1 !px-3 text-sm">
                {tag}
              </span>
            {/each}
          </div>

          <!-- Project Links -->
          <div class="flex gap-4">
            <a 
              href={`https://example.com/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} 
              class="neo-button bg-neo-black text-white hover:bg-neo-black/90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-eye mr-2"></i> View Project
            </a>
            <a 
              href={`https://github.com/username/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              class="neo-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github mr-2"></i> Code
            </a>
          </div>
        </div>

        <!-- Decorative shape that moves on hover -->
        <div class="absolute -z-10 {project.color} border-neo border-neo-black w-full h-full 
                    top-0 left-0 transform translate-x-4 translate-y-4 
                    group-hover:translate-x-6 group-hover:translate-y-6 
                    transition-transform duration-300">
        </div>
      </div>
    {/each}
  </div>

  <!-- View More Button -->
  <div class="text-center mt-12">
    <a 
      href="https://github.com/username?tab=repositories" 
      class="neo-button inline-flex items-center gap-2 bg-neo-black text-white hover:bg-neo-black/90"
      target="_blank"
      rel="noopener noreferrer"
    >
      View More Projects
      <i class="fas fa-arrow-right"></i>
    </a>
  </div>

  <!-- Decorative Elements -->
  <div class="absolute left-4 -bottom-8 w-16 h-16 bg-neo-pink border-neo border-neo-black -z-20 
              transform -rotate-12"></div>
  <div class="absolute right-8 -top-8 w-20 h-20 bg-neo-blue border-neo border-neo-black -z-20 
              transform rotate-12"></div>
</div>
