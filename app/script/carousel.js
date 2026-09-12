document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const slides = track.querySelectorAll('img');
    const btnLeft = container.querySelector('.carousel-button.left');
    const btnRight = container.querySelector('.carousel-button.right');
    let index = 0;
  
    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        btnLeft.style.display = index === 0 ? 'none' : 'block';
        btnRight.style.display = index === slides.length - 1 ? 'none' : 'block';
    }
  
    btnLeft.addEventListener('click', () => {
        if (index > 0) index--;
            updateCarousel();
    });
  
    btnRight.addEventListener('click', () => {
      if (index < slides.length - 1) index++;
        updateCarousel();
    });
  
    updateCarousel();
});
  