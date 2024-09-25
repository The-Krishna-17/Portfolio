// code for menu-btn i.e used to display the menu in small screen when clicked

// Defining variables
const menuBtn = document.querySelector('#menu-btn');
const menuItems = document.querySelector('#menu-list');
const menuIcons = document.querySelector('#menu-icon');


menuBtn.addEventListener('click', function(){
     // Toggle the 'hidden' class to show/hide the menu
    menuItems.classList.toggle('hidden');

    // Toggle between menu bars and cross icon
    if(menuItems.classList.contains('hidden')){
        menuIcons.classList.add('fa-bars');
        menuIcons.classList.remove('fa-times');
    }else{
        menuIcons.classList.add('fa-times');
        menuIcons.classList.remove('fa-bars');
    } 
});

// code for achivement section when user click the more information get displayed

// Defining variables

// Select all 'Know More' buttons and descriptions
const knowMoreBtns = document.querySelectorAll('.know-more-btn');
const descriptions = document.querySelectorAll('.description');

// Loop through each button and add event listener
knowMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        // Toggle the 'hidden' class on the corresponding description
        descriptions[index].classList.toggle('hidden');

        // Change the button text accordingly
        if (descriptions[index].classList.contains('hidden')) {
            btn.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Know More';
        } else {
            btn.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Know Less';
        }
    });
});

//displaing cv  code

const seeMyCV = document.getElementById('cv');

// Add event listener with a check to ensure the file exists
seeMyCV.addEventListener('click', function(){
    const fileUrl = 'Final CV.pdf'; // Assuming the file is in the same directory
    fetch(fileUrl)
        .then(response => {
            if (response.ok) {
                window.open(fileUrl, '_blank');
            } else {
                alert('Sorry, the CV could not be found.');
            }
        })
        .catch(() => {
            alert('Error loading the CV.');
        });
});


//project section 

const projectDescriptionBtn = document.querySelectorAll('.description-btn');
const projectDescription = document.querySelectorAll('.project-description');

projectDescriptionBtn.forEach((btn, index) =>{
        btn.addEventListener('click', function(){
            projectDescription[index].classList.toggle('hidden');
        })
});


//hero section text animation
const text = document.getElementById('my-text').textContent;
document.getElementById('my-text').textContent = ''; // Clear the original text
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById('my-text').innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // Speed of typing
  }
}

type(); // Start the typing animation


// form alert msg
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you! Your message has been sent successfully.',
                showConfirmButton: false,
                timer: 2000
            });
            form.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Oops! There was a problem submitting your form. Please try again.',
            });
        }
    });
});
