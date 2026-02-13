   id="header-scroll">
    document.addEventListener('DOMContentLoaded', function () {
      const header = document.querySelector('.header-nav');
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    });

   id="mobile-menu">
    document.addEventListener('DOMContentLoaded', function () {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
        });
      });
    });

 id="price-range">
    document.addEventListener('DOMContentLoaded', function () {
      const priceRange = document.getElementById('price-range');
      const priceValue = document.getElementById('price-value');
      if (priceRange && priceValue) {
        priceRange.addEventListener('input', function () {
          const value = this.value;
          priceValue.textContent = '₹' + parseInt(value).toLocaleString();
        });
      }
    });
  
  id="testimonial-slider">
    document.addEventListener('DOMContentLoaded', function () {
      const container = document.getElementById('testimonial-container');
      const slides = document.querySelectorAll('.testimonial-slide');
      const dots = document.querySelectorAll('.testimonial-dot');
      const prevBtn = document.getElementById('prev-testimonial');
      const nextBtn = document.getElementById('next-testimonial');
      let currentIndex = 0;
      const slideWidth = 100; // percentage
      function updateSlider() {
        // For mobile: show one slide at a time
        if (window.innerWidth < 768) {
          container.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }
        // For desktop: show three slides at a time
        else {
          container.style.transform = `translateX(-${currentIndex * (slideWidth / 3)}%)`;
        }
        // Update dots
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('bg-primary');
            dot.classList.remove('bg-gray-300');
          } else {
            dot.classList.remove('bg-primary');
            dot.classList.add('bg-gray-300');
          }
        });
      }
      // Initialize dots click events
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateSlider();
        });
      });
      // Initialize arrow buttons
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          updateSlider();
        });
        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % slides.length;
          updateSlider();
        });
      }
      // Auto-rotate testimonials
      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
      }, 5000);
      // Update slider on window resize
      window.addEventListener('resize', updateSlider);
      // Initialize slider
      updateSlider();
    });

   id="quick-view"
    document.addEventListener('DOMContentLoaded', function () {
      const modal = document.getElementById('quick-view-modal');
      const closeBtn = document.getElementById('close-modal');
      const quickViewBtns = document.querySelectorAll('.quick-view-btn');
      const quantityInput = document.getElementById('quantity');
      const decreaseBtn = document.getElementById('decrease-quantity');
      const increaseBtn = document.getElementById('increase-quantity');
      const sizeBtns = document.querySelectorAll('.size-btn');
      function openModal(productCard) {
        const img = productCard.querySelector('img');
        const name = productCard.querySelector('h3').textContent;
        const originalPrice = productCard.querySelector('.text-gray-400').textContent;
        const price = productCard.querySelector('.text-gray-800').textContent;
        const material = productCard.querySelector('.bg-gray-100').textContent;
        document.getElementById('modal-product-image').src = img.src;
        document.getElementById('modal-product-name').textContent = name;
        document.getElementById('modal-product-original-price').textContent = originalPrice;
        document.getElementById('modal-product-price').textContent = price;
        document.getElementById('modal-product-description').textContent =
          "This exquisite piece is handcrafted by skilled artisans using traditional techniques. Each detail is carefully crafted to bring divine beauty and spiritual energy to your sacred space. The item comes with a certificate of authenticity and is blessed according to traditional rituals.";

        document.getElementById('modal-product-material').innerHTML = `
      <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${material}</span>
    `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        quantityInput.value = 1;
        sizeBtns.forEach(btn => btn.classList.remove('border-primary', 'text-primary'));
      }
      quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const productCard = btn.closest('.product-card');
          openModal(productCard);
        });
      });
      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      decreaseBtn.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);
        if (value > 1) quantityInput.value = value - 1;
      });
      increaseBtn.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
      });
      sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          sizeBtns.forEach(b => b.classList.remove('border-primary', 'text-primary'));
          btn.classList.add('border-primary', 'text-primary');
        });
      });
    });

 id="contact-form"
    document.addEventListener('DOMContentLoaded', function () {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
          e.preventDefault();
          // Simulate form submission
          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalText = submitButton.innerHTML;
          submitButton.disabled = true;
          submitButton.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i> Sending...';
          // Simulate API call
          setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
          }, 1500);
        });
      }
    });