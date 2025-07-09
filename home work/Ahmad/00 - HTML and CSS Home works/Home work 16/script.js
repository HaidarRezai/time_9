document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const hasPlus = counter.innerText.trim().endsWith('+'); // check if "+" is wanted
      counter.innerText = '0';
  
      const updateCount = () => {
        const current = +counter.innerText.replace('+', '');
        const increment = Math.ceil(target / 100);
  
        if (current < target) {
          counter.innerText = `${current + increment}`;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = hasPlus ? `${target}+` : `${target}`;
        }
      };
  
      updateCount();
    });
  });