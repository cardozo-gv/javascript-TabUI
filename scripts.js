window.addEventListener('load', function () {
  //your code right here;
  document.querySelectorAll('.controls button')
  .forEach(button => {
    button.addEventListener("click",(ev) => {
      const parent = button.parentNode; // clase controls
      const grandParent = parent.parentNode; // clase Tabs
      const container = grandParent.querySelector('.tabs-container'); //clase tabs-container
      console.log(container);
      const childrenList = Array.from(parent.children);
      const index = childrenList.indexOf(button);
      container.style.transform = `translatex(-${index*100}%)`;
    })
  })
}, false);
