
// sidebar
//  



  document.addEventListener('DOMContentLoaded', function () {
    const modalImage = document.getElementById('modalImage');
    const container = document.querySelector('.container');
    let isContainerMoved = false;
  
    modalImage.addEventListener('click', function () {
      if (!isContainerMoved) {
        container.classList.add('container-right');
        isContainerMoved = true;
      } else {
        container.classList.remove('container-right');
        isContainerMoved = false;
      }
    });
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
        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.speaker}</td>
            <td>${event.status}</td>
        `;
        eventTableBody.appendChild(row);
    });
});
