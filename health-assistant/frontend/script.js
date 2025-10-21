document.addEventListener('DOMContentLoaded', () => {
    const appointmentsList = document.getElementById('appointments-list');
    const remindersList = document.getElementById('reminders-list');

    // Fetch and display appointments
    fetch('/api/appointments')
        .then(response => response.json())
        .then(appointments => {
            appointmentsList.innerHTML = ''; // Clear existing list
            appointments.forEach(appointment => {
                const li = document.createElement('li');
                li.className = 'flex items-center py-3';
                li.innerHTML = `
                    <img src="https://img.icons8.com/color/48/000000/user-female-circle.png" alt="Doctor" class="h-12 w-12 rounded-full">
                    <div class="ml-4">
                        <p class="font-semibold">Dr. ${appointment.doctor}</p>
                        <p class="text-sm text-gray-500">${appointment.specialty}</p>
                        <p class="text-sm text-gray-500">${new Date(appointment.date).toLocaleDateString()}  ${appointment.time}</p>
                    </div>
                `;
                appointmentsList.appendChild(li);
            });
        });

    // Fetch and display reminders
    fetch('/api/reminders')
        .then(response => response.json())
        .then(reminders => {
            remindersList.innerHTML = ''; // Clear existing list
            reminders.forEach(reminder => {
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between py-3 border-b';
                li.innerHTML = `
                    <div class="flex items-center">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/clock.png" alt="Clock" class="h-6 w-6">
                        <div class="ml-3">
                            <p class="font-semibold">${reminder.medicine}</p>
                            <p class="text-sm text-gray-500">${reminder.dosage}</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-sm text-gray-500 mr-4">${reminder.time}</span>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/checkmark.png" alt="Checkmark" class="h-6 w-6 text-green-500">
                    </div>
                `;
                remindersList.appendChild(li);
            });
        });
});
