// === Get elements ===
const carousel_parent = document.querySelector('.carouselparent');
const latest_work = document.querySelector('.latest-work');
const latest_work_part = document.querySelectorAll('.latest-work-part');

const button_back = document.getElementById('button1');
const button_forward = document.getElementById('button2');

const circles = [
  document.getElementById('circle1'),
  document.getElementById('circle2'),
  document.getElementById('circle3'),
  document.getElementById('circle4'),
  document.getElementById('circle5')
];

let projects_order = 2; 
const total_projects = latest_work_part.length;


function updateCarousel() {
  
  latest_work_part.forEach((item) => item.classList.remove("active"));
  latest_work_part[projects_order].classList.add("active");

 
  circles.forEach((c) => c.classList.remove("CA"));
  circles[projects_order].classList.add("CA");

 
  const slideWidth = 430; 
  const parentWidth = 1100;
  const offset = -(projects_order * slideWidth) + (parentWidth / 0.785 - slideWidth / 0.785);

  
  latest_work.style.transform = `translateX(${offset}px)`;
  latest_work.style.transition = 'transform 0.6s ease';
}


button_back.addEventListener('click', function () {
  projects_order--;
  if (projects_order < 0) projects_order = total_projects - 1;
  updateCarousel();
});

button_forward.addEventListener('click', function () {
  projects_order++;
  if (projects_order >= total_projects) projects_order = 0;
  updateCarousel();
});


setInterval(() => {
  projects_order = (projects_order + 1) % total_projects;
  updateCarousel();
}, 7000);
