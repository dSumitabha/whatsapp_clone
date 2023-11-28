let elem = document.getElementById('actions');
let elem_state = 0;
document.querySelector('.nav-icon').addEventListener('click', function() {
  if (elem_state == 0) {
	elem.style.display = 'block';
	elem_state = 1;
  }
  else {
	elem.style.display = 'none';
	elem_state = 0;
  }
});