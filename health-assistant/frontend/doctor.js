// JavaScript for the Doctor Dashboard
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/doctor/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-patients').textContent = data.totalPatients;
            document.getElementById('total-bookings').textContent = data.totalBookings;
        });

    fetch('/api/doctor/progress')
        .then(response => response.json())
        .then(data => {
            document.getElementById('progress-completed').textContent = data.completed;
            document.getElementById('progress-pending').textContent = data.pending;
        });

    fetch('/api/doctor/reminders')
        .then(response => response.json())
        .then(data => {
            const remindersList = document.getElementById('reminders-list');
            data.forEach(reminder => {
                const li = document.createElement('li');
                li.textContent = reminder.text;
                remindersList.appendChild(li);
            });
        });

    fetch('/api/doctor/schedule')
        .then(response => response.json())
        .then(data => {
            const options = {
                chart: {
                    type: 'line',
                    height: 350,
                },
                series: [{
                    name: 'Patients',
                    data: data.data
                }],
                xaxis: {
                    categories: data.labels
                }
            };

            const chart = new ApexCharts(document.querySelector("#monitoring-chart"), options);
            chart.render();
        });
});
