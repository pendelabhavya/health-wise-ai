document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/profile')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fullName').value = data.fullName;
            document.getElementById('villageCity').value = data.villageCity;
            document.getElementById('gender').value = data.gender;
            document.getElementById('languagePreference').value = data.languagePreference;
            document.getElementById('bloodGroup').value = data.bloodGroup;
            document.getElementById('emergencyContactPhone').value = data.emergencyContactPhone;
            document.getElementById('emergencyContactName').value = data.emergencyContactName;
            document.getElementById('medicalConditions').value = data.medicalConditions;
            document.getElementById('allergies').value = data.allergies;
            document.getElementById('memberSince').textContent = data.memberSince;
            document.getElementById('healthRecords').textContent = data.healthRecords;
        })
        .catch(error => console.error('Error fetching profile data:', error));
});
