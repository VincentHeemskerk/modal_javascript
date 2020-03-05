(() => {
  const lightbox = document.querySelector('.lightbox-container');
  lightbox.addEventListener('click', event => {
    console.log('lightbox clicked');
    lightbox.classList.toggle('show');
  });

  const items = document.querySelectorAll('.store-item');
  items.forEach(item => {
    item.addEventListener('click', event => {
      // console.log('item clicked');
      // console.log(item);
      // console.log(item.getElementsByTagName('img')[0].src);
      let bground = item.getElementsByTagName('img')[0].src;
      console.log(bground);
      lightbox.querySelector('.lightbox-item').setAttribute('style', 'background: url("' + bground + '") center/cover fixed no-repeat');
      lightbox.classList.add('show');
    })
  })
})();