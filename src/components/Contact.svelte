<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    formData = {
      name: '',
      email: '',
      message: ''
    };
  };
</script>

<div class="container mx-auto relative">
  <h2 class="section-title text-white">
    Contact<span class="text-neo-yellow">.</span>
  </h2>

  <div class="grid md:grid-cols-2 gap-12">
    <!-- Contact Info -->
    <div class="space-y-6">
      <div class="neo-card bg-white">
        <h3 class="text-2xl font-display font-bold mb-4">Let's Connect!</h3>
        <p class="text-lg mb-6">
          Have a project in mind? Let's create something amazing together.
        </p>
        
        <div class="space-y-4">
          <a href="mailto:hello@example.com" 
             class="neo-button flex items-center gap-3 w-full">
            <i class="fas fa-envelope"></i>
            <span>hello@example.com</span>
          </a>
          
          <a href="tel:+1234567890" 
             class="neo-button flex items-center gap-3 w-full">
            <i class="fas fa-phone"></i>
            <span>+1 (234) 567-890</span>
          </a>

          <a href="https://maps.google.com/?q=New+York,+NY" 
             class="neo-button flex items-center gap-3 w-full"
             target="_blank"
             rel="noopener noreferrer">
            <i class="fas fa-map-marker-alt"></i>
            <span>New York, NY</span>
          </a>
        </div>
      </div>

      <!-- Social Links -->
      <div class="neo-card bg-neo-yellow">
        <h3 class="text-xl font-display font-bold mb-4">Follow Me</h3>
        <div class="flex gap-4">
          <a 
            href="https://github.com/username" 
            class="neo-button !p-3 hover:bg-neo-pink hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i class="fab fa-github text-xl"></i>
          </a>
          <a 
            href="https://linkedin.com/in/username" 
            class="neo-button !p-3 hover:bg-neo-blue hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i class="fab fa-linkedin text-xl"></i>
          </a>
          <a 
            href="https://twitter.com/username" 
            class="neo-button !p-3 hover:bg-neo-green hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a 
            href="https://instagram.com/username" 
            class="neo-button !p-3 hover:bg-neo-pink hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <i class="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="neo-card bg-white">
      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block font-display font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            class="neo-input"
            required
          />
        </div>

        <div>
          <label for="email" class="block font-display font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            class="neo-input"
            required
          />
        </div>

        <div>
          <label for="message" class="block font-display font-bold mb-2">Message</label>
          <textarea
            id="message"
            bind:value={formData.message}
            class="neo-input min-h-[150px]"
            required
          ></textarea>
        </div>

        <button type="submit" class="neo-button bg-neo-black text-white w-full 
                                   hover:bg-neo-black/90">
          <i class="fas fa-paper-plane mr-2"></i>
          Send Message
        </button>
      </form>
    </div>
  </div>

  <!-- Decorative Elements -->
  <div class="absolute top-0 right-0 w-32 h-32 bg-neo-yellow border-neo 
              border-neo-black -z-10 transform translate-x-1/4 -translate-y-1/4 rotate-12">
  </div>
  <div class="absolute bottom-0 left-0 w-24 h-24 bg-neo-blue border-neo 
              border-neo-black -z-10 transform -translate-x-1/4 translate-y-1/4 -rotate-12">
  </div>
</div>

<footer class="mt-20 py-6 border-t-neo border-neo-black">
  <div class="container mx-auto px-4 text-center">
    <p class="font-display">
      © {new Date().getFullYear()} • Built with 
      <i class="fas fa-heart text-neo-pink"></i> and 
      <i class="fab fa-svelte text-neo-blue"></i>
    </p>
  </div>
</footer>
