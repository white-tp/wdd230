const images = document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
};
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');};
};

if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);}
    });
  }, imgOptions);
  images.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  images.forEach((img) => {
    loadImages(img);
  });
}