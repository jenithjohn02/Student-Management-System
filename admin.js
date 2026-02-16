// Admin Logic & Main Router
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminLogoutBtn = document.getElementById('admin-logout');

// Handle Admin Login
adminLoginBtn.addEventListener('click', () => {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;

    if (user === 'admin' && pass === 'admin123') {
        localStorage.setItem('currentUser', 'admin');
        renderAdminDashboard();
    } else {
        alert('Invalid Admin Credentials');
    }
});

// Render the Table of Students
function renderAdminDashboard() {
    document.getElementById('admin-login-section').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
    
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const list = document.getElementById('admin-student-list');
    list.innerHTML = '';

    students.forEach((s, index) => {
        list.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.roll}</td>
                <td>${s.email}</td>
                <td>${s.dept}</td>
                <td>${s.year}</td>
                <td><button class="btn-delete" onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;
    });
}

// Delete Logic
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem('students'));
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    renderAdminDashboard();
}

// Global Router to switch between Admin/Signup/Login sections
function showSection(type) {
    document.getElementById('admin-login-section').classList.add('hidden');
    document.getElementById('signup-container').innerHTML = '';
    document.getElementById('student-login-container').innerHTML = '';

    if (type === 'signup') {
        initSignup(); // defined in student-signup.js
    } else if (type === 'student-login') {
        initStudentLogin(); // defined in student-login.js
    }
}

adminLogoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    location.reload();
});