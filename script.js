document.addEventListener("DOMContentLoaded", function() {
  var accordions = document.querySelectorAll(".accordion");
  accordions.forEach(function(accordion) {
    accordion.addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
  document.addEventListener('DOMContentLoaded', () => {
    const services = {
      emergency: {
        title: "Emergency Care",
        description: "Our Emergency Department provides 24/7 urgent medical attention for all kinds of emergencies. Equipped with the latest technology and staffed by experienced professionals, we ensure rapid and effective care."
      },
      cardiology: {
        title: "Cardiology",
        description: "Our Cardiology Department offers comprehensive heart care services, including diagnosis, treatment, and prevention of heart diseases. Our team of specialists is dedicated to providing personalized care."
      },
      maternity: {
        title: "Maternity Services",
        description: "Our Maternity Services provide comprehensive care for expecting mothers, from prenatal care to postnatal support. We offer a comfortable and safe environment for both mother and baby."
      },
      orthopedics: {
        title: "Orthopedics",
        description: "Our Orthopedics Department specializes in the treatment of bones, joints, and muscles. We offer both surgical and non-surgical treatments for a wide range of orthopedic conditions."
      },
      pediatrics: {
        title: "Pediatrics",
        description: "Our Pediatrics Department provides healthcare services for children and adolescents. Our pediatricians are committed to ensuring the health and well-being of your child."
      },
      oncology: {
        title: "Oncology",
        description: "Our Oncology Department offers advanced cancer diagnosis and treatment. We provide personalized care plans to meet the unique needs of each patient, using the latest therapies and technologies."
      }
    };
  
    const modal = document.getElementById("service-modal");
    const modalBody = document.getElementById("modal-body");
  
    window.openModal = function(serviceKey) {
      const service = services[serviceKey];
      if (service) {
        modalBody.innerHTML = `<h2>${service.title}</h2><p>${service.description}</p>`;
        modal.style.display = "block";
      }
    };
  
    window.closeModal = function() {
      modal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
  });
  // Filter Departments
function filterDepartments(department) {
  const cards = document.querySelectorAll('.department-card');
  if (department === 'all') {
    cards.forEach(card => {
      card.style.display = 'block';
    });
  } else {
    cards.forEach(card => {
      if (card.classList.contains(department)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
}

// Open Modal
function openModal(department) {
  const modal = document.getElementById('department-modal');
  const title = document.getElementById('modal-title');
  const description = document.getElementById('modal-description');

  const departmentInfo = {
    cardiology: {
      title: 'Cardiology',
      description: 'Our cardiology department offers comprehensive heart care and treatments with state-of-the-art facilities. Our team of experienced cardiologists is dedicated to providing the highest quality care to our patients, utilizing the latest advancements in medical technology.'
    },
    pediatrics: {
      title: 'Pediatrics',
      description: 'Our pediatrics department provides specialized care for children, ensuring their healthy development. Our pediatricians are committed to offering compassionate care and treatment for a wide range of childhood illnesses and conditions.'
    },
    orthopedics: {
      title: 'Orthopedics',
      description: 'Our orthopedics department offers advanced treatments for joint and bone issues, including surgeries. Our orthopedic surgeons are experts in joint replacement, sports injuries, and other musculoskeletal conditions.'
    },
    neurology: {
      title: 'Neurology',
      description: 'Our neurology department provides comprehensive care for neurological disorders and conditions, utilizing advanced diagnostic and treatment techniques.'
    },
    gynecology: {
      title: 'Gynecology',
      description: 'Our gynecology department specializes in women\'s health and reproductive systems, offering a wide range of services from routine check-ups to advanced treatments.'
    },
    dermatology: {
      title: 'Dermatology',
      description: 'Our dermatology department offers advanced treatments for skin conditions and diseases, utilizing the latest medical technology to provide effective care.'
    },
    oncology: {
      title: 'Oncology',
      description: 'Our oncology department provides comprehensive cancer care and treatment options, with a dedicated team of specialists committed to offering personalized care to each patient.'
    },
    radiology: {
      title: 'Radiology',
      description: 'Our radiology department offers advanced imaging services for accurate diagnosis and treatment planning. Our team of expert radiologists use state-of-the-art equipment to provide detailed and precise imaging.'
    }
    // Add more departments as needed
  };

  title.textContent = departmentInfo[department].title;
  description.textContent = departmentInfo[department].description;

  modal.style.display = 'block';
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('department-modal');
  modal.style.display = 'none';
}

// Doctors functionality

function toggleMenu() {
  var sideNav = document.getElementById("sideNav");
  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
  } else {
    sideNav.style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

function navigateTo(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      navigateTo(sectionId);
    });
  });
});

function showDoctorDetails(name, imgSrc, specialty, experience, email) {
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalSpecialty').textContent = specialty;
  document.getElementById('modalExperience').textContent = experience;
  document.getElementById('modalEmail').textContent = email;
  document.getElementById('doctorModal').style.display = "block";
}

function closeModal() {
  document.getElementById('doctorModal').style.display = "none";
}

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('doctorModal')) {
    closeModal();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const department = document.getElementById('department').value;
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !department || !doctor || !date || !time) {
    alert('Please fill out all required fields.');
    return;
  }

  // Displaying a response message
  const formResponse = document.getElementById('form-response');
  formResponse.textContent = `Thank you, ${name}! Your appointment with ${doctor} in the ${department} department has been scheduled for ${date} at ${time}.`;

  // Resetting the form
  document.getElementById('appointment-form').reset();
});

