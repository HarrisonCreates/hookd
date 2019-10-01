let container = document.querySelector('.container');
let center_cont = document.querySelector('.container > .center_container');

center_width = center_cont.offsetWidth;

center_cont.style.height = center_width + 'px';
/*
counter = 0;

container.addEventListener('click', function(e) {
  if(counter > 1){
    counter = 0;
    center_cont.style.display = "flex";
  } else {
    counter += 1;
    center_cont.style.display = "none";
  }

  new_view = "url('../assets/view_" + counter + ".png')";
  container.style.backgroundImage = new_view;
});
*/
