function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    const context = this;
    const args = arguments;

    // The function to be called after debounce time has elapsed
    const later = function () {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not in the beginning
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period - returns true
    timeout = setTimeout(later, wait);

    // Call immediately if you're doing a leading end execution
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(scrollHandler))

function scrollHandler(e){
  let imgs = document.querySelectorAll(".slide-and-scroll img");
  let imgArray = Array.from(imgs);
  // console.log(imgArray[0].getBoundingClientRect());

  imgArray.forEach( img => {
    // console.log(img.getBoundingClientRect());
    let posData = img.getBoundingClientRect();
    let change = (posData.bottom + posData.top) / 2;
    if (window.innerHeight > change && (change > 0)){
      img.classList.add("active");
    } else{
      img.classList.remove("active");
    }
    // 
  })
}