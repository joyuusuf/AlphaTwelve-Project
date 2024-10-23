// SideBar Button Easeout and In
let btn = document.querySelector("#btn")
let sideBar = document.querySelector(".sidebar")

btn.onclick = function () {
    sideBar.classList.toggle("active")
};



//let toggleIcon = document.getElementById('toggle-icon');
// let body = document.body;
// let sidebar = document.querySelector('.sidebar');
// let mainContent = document.querySelector('.main-content');

// Check and apply the saved theme mode from localStorage
// if (localStorage.getItem('theme') === 'dark') {


//     body.classList.add('dark-mode');
//     sidebar.classList.add('dark-mode');
//     mainContent.classList.add('dark-mode');
//     toggleIcon.classList.remove('fa-toggle-off');
//     toggleIcon.classList.add('fa-toggle-on');
// } else {
//     body.classList.add('light-mode');
//     sidebar.classList.add('light-mode');
//     mainContent.classList.add('light-mode');
// }

// // Function to toggle dark/light mode
// toggleIcon.addEventListener('click', () => {


//     if (body.classList.contains('dark-mode')) {
//         // Switch to light mode
//         body.classList.remove('dark-mode');
//         sidebar.classList.remove('dark-mode');
//         mainContent.classList.remove('dark-mode');

//         body.classList.add('light-mode');
//         sidebar.classList.add('light-mode');
//         mainContent.classList.add('light-mode');

//         toggleIcon.classList.remove('fa-toggle-on');
//         toggleIcon.classList.add('fa-toggle-off');
//         localStorage.setItem('theme', 'light'); // Save light mode in localStorage
//     } else {
//         // Switch to dark mode
//         body.classList.remove('light-mode');
//         sidebar.classList.remove('light-mode');
//         mainContent.classList.remove('light-mode');

//         body.classList.add('dark-mode');
//         sidebar.classList.add('dark-mode');
//         mainContent.classList.add('dark-mode');

//         toggleIcon.classList.remove('fa-toggle-off');
//         toggleIcon.classList.add('fa-toggle-on');
//         localStorage.setItem('theme', 'dark'); // Save dark mode in localStorage
//     }
// });

// JavaScript to handle dark mode toggle and store preference in localStorage
document.getElementById("toggle-icon").addEventListener("click", function() {
    const toggleIcon = document.getElementById("toggle-icon");
    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    // Toggle the icon between light and dark mode
    toggleIcon.classList.toggle("fa-toggle-on");
    toggleIcon.classList.toggle("fa-toggle-off");

    // Check if dark mode is on
    if (toggleIcon.classList.contains("fa-toggle-on")) {
        // Apply dark mode background colors
        body.style.backgroundColor = "rgb(57, 54, 69)";
        sidebar.style.backgroundColor = "rgb(72, 69, 84)";
        mainContent.style.backgroundColor = "rgb(72, 69, 84)";

        // Save dark mode preference in localStorage
        localStorage.setItem("darkMode", "enabled");
    } else {
        // Revert to light mode background colors
        body.style.backgroundColor = "";  // Or set your light mode color
        sidebar.style.backgroundColor = "";  // Or set your light mode color
        mainContent.style.backgroundColor = "";  // Or set your light mode color

        // Remove dark mode preference from localStorage
        localStorage.setItem("darkMode", "disabled");
    }
});

// Check localStorage for dark mode preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
    document.getElementById("toggle-icon").classList.add("fa-toggle-on");
    document.getElementById("toggle-icon").classList.remove("fa-toggle-off");
    document.body.style.backgroundColor = "rgb(57, 54, 69)";
    document.querySelector(".sidebar").style.backgroundColor = "rgb(72, 69, 84)";
    document.querySelector(".main-content").style.backgroundColor = "rgb(72, 69, 84)";
}


// Modal
let modal = document.getElementById("modal");

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};


document.getElementById("showModalBtn").addEventListener("click", function () {
    showModal();
})

let editBtn = document.getElementById("editBtn");
let deleteBtn = document.getElementById("deleteBtn");

editBtn.addEventListener("click", function () {
    alert("Edit button clicked!");
    closeModal();
});

deleteBtn.addEventListener("click", function () {
    alert("Delete button clicked!");
    closeModal();
});


window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

document.getElementById("showModalBtn").addEventListener("click", function() {
    showModal();
});





// Chart

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('eventChart').getContext('2d');
    const eventChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Registrations',
                data: [800, 700, 900, 650, 850, 720, 900, 880, 950, 800, 880, 940],
                backgroundColor: '#7B61FF'
            }]
        },
        options: {
            responsive: true
        }
    });



    // Event Table data fetched dynamically via predefined array
    const eventData = [
        { name: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'John Doe', status: 'Completed' },
        { name: 'Blockchain Revolution', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr Aisha Malik', status: 'Completed' },
        {name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed'},
        {name: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed'},
        {name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof Alan Green', status: 'Completed'},
        {name: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevins Adams', status: 'In Progress'},
        {name: 'Cybersecuriy for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'Completed'},
        {name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr Maria Hernandez', status: 'In Progress'},
        {name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Gues Panel', status: 'In Progress'},
    ];

    const eventTableBody = document.getElementById('eventTableBody');
    eventData.forEach(event => {
        const row = document.createElement('tr');
        let statusClass = '';
        
        if (event.status === 'Completed') {
            statusClass = 'status-completed';
        } else if (event.status === 'In Progress') {
            statusClass = 'status-inprogress';
        }

        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.speaker}</td>
            <td class="${statusClass}">
                <ul><li>${event.status}</li></ul>
            </td>
        `;
        eventTableBody.appendChild(row);
    });
});


