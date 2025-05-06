<script>
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-neo-pink",
      skills: [
        { name: "HTML5", icon: "fa-html5", level: 90 },
        { name: "CSS3", icon: "fa-css3-alt", level: 85 },
        { name: "JavaScript", icon: "fa-js", level: 88 },
        { name: "React", icon: "fa-react", level: 82 },
        { name: "Svelte", icon: "fa-code", level: 75 }
      ]
    },
    {
      title: "Design",
      color: "bg-neo-blue",
      skills: [
        { name: "UI Design", icon: "fa-palette", level: 85 },
        { name: "Responsive", icon: "fa-mobile-alt", level: 90 },
        { name: "Figma", icon: "fa-figma", level: 80 },
        { name: "Typography", icon: "fa-text-height", level: 75 },
        { name: "Animation", icon: "fa-film", level: 70 }
      ]
    },
    {
      title: "Tools",
      color: "bg-neo-green",
      skills: [
        { name: "Git", icon: "fa-git-alt", level: 85 },
        { name: "VS Code", icon: "fa-code", level: 90 },
        { name: "Terminal", icon: "fa-terminal", level: 80 },
        { name: "NPM", icon: "fa-npm", level: 85 },
        { name: "Webpack", icon: "fa-box-open", level: 75 }
      ]
    }
  ];
</script>

<div class="container mx-auto">
  <h2 class="section-title">
    Skills<span class="text-neo-green">.</span>
  </h2>

  <div class="grid md:grid-cols-3 gap-8">
    {#each skillCategories as category}
      <div class="neo-card relative overflow-hidden group">
        <!-- Category Header -->
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-display font-bold">{category.title}</h3>
          <div class="{category.color} p-3 border-neo border-neo-black">
            <i class="fas fa-star text-xl"></i>
          </div>
        </div>

        <!-- Skills List -->
        <div class="space-y-4">
          {#each category.skills as skill}
            <div class="neo-card !border-2 hover:-translate-x-1 hover:-translate-y-1 
                        transition-transform duration-200">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 {category.color} border-2 border-neo-black 
                            flex items-center justify-center">
                  <i class="fab {skill.icon}"></i>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-display font-bold">{skill.name}</span>
                    <span class="text-sm">{skill.level}%</span>
                  </div>
                  <div class="h-2 bg-gray-200 border-2 border-neo-black">
                    <div class="{category.color}" style="width: {skill.level}%"></div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Decorative Background Pattern -->
        <div class="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300">
          <div class="absolute inset-0 {category.color} opacity-10"></div>
          <div class="absolute top-0 left-0 w-full h-full">
            {#each Array(5) as _, i}
              <div class="absolute border-2 border-neo-black rotate-45 
                          transform -translate-x-1/2 -translate-y-1/2"
                   style="width: {100 + i * 50}px; height: {100 + i * 50}px; 
                          top: 50%; left: 50%; opacity: 0.05;">
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Decorative Elements -->
  <div class="absolute -left-4 top-1/2 w-24 h-24 bg-neo-yellow border-neo 
              border-neo-black -z-10 transform -rotate-12"></div>
  <div class="absolute -right-4 bottom-1/4 w-16 h-16 bg-neo-pink border-neo 
              border-neo-black -z-10 transform rotate-12"></div>
</div>
