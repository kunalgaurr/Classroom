const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdownMenu');
const dropdownItem = document.querySelectorAll('.dropdownItem');

dropdown.addEventListener('mouseover', () => {
  dropdownMenu.style.display = 'block';
  dropdown.style.cursor = 'pointer';
});

dropdown.addEventListener('mouseout', () => {
  dropdownMenu.style.display = 'none';
});

dropdownItem[0].addEventListener('onclick', () => {
  document.getElementById('dropdown').innerHTML = 'Student';
});
dropdownItem[1].addEventListener('onclick', () => {
  document.getElementById('dropdown').innerHTML = 'Faculty';
});

let phoneNumber = document.getElementById('phoneNumber').value;
if (phoneNumber.length !== 10) {
  alert('Please enter a valid phone number');
} else {
  alert('Welcome to the Classroom');
}
