<script>
  let isMenuOpen = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const menuItems = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact' }
  ];
</script>

<nav class="fixed w-full bg-neo-white border-b-neo border-neo-black z-50 py-4">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center">
      <a href="#hero" class="text-2xl font-display font-bold hover:text-neo-pink transition-colors">
        Portfolio
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        {#each menuItems as item}
          <a 
            href={item.href}
            class="font-display font-bold hover:text-neo-pink transition-colors"
          >
            {item.text}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden neo-button !px-3 !py-2"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden absolute top-full left-0 w-full bg-neo-white border-b-neo border-neo-black">
        <div class="container mx-auto px-4 py-4">
          {#each menuItems as item}
            <a 
              href={item.href}
              class="block py-2 font-display font-bold hover:text-neo-pink transition-colors"
              on:click={toggleMenu}
            >
              {item.text}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>
