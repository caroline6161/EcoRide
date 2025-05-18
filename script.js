// script.js

// For this project, many pages are static or have inline scripts.
// This file can be used for future shared JavaScript functionalities.

// Example: smooth scroll for internal anchors (if any)
document.addEventListener('DOMContentLoaded', () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if(target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
      });
    });
  });
  
  // Additional shared JS logic can be added here as needed.
  
  