function initStudentLogin() {
    const container = document.getElementById('student-login-container');
    container.innerHTML = `
        <div id="login-form-box" class="card login-card">
            <h2>Student Login</h2>
            <input type="email" id="sl-email" placeholder="Email">
            <input type="password" id="sl-pass" placeholder="Password">
            <button class="btn btn-login" id="login-submit">Login</button>
        </div>
        <div id="student-profile" class="dashboard hidden student-dash">
            <h2>Welcome, <span id="prof-name"></span></h2>
            <div class="profile-details">
                <p><strong>Roll No:</strong> <span id="prof-roll"></span></p>
                <p><strong>Dept:</strong> <span id="prof-dept"></span></p>
                <p><strong>Year:</strong> <span id="prof-year"></span></p>
                <p><strong>Email:</strong> <span id="prof-email"></span></p>
            </div>
            <button class="btn btn-logout" onclick="location.reload()">Logout</button>
        </div>
    `;

    document.getElementById('login-submit').addEventListener('click', handleStudentLogin);
}

function handleStudentLogin() {
    const email = document.getElementById('sl-email').value;
    const pass = document.getElementById('sl-pass').value;

    const students = JSON.parse(localStorage.getItem('students')) || [];
    const user = students.find(s => s.email === email && s.pass === pass);

    if (user) {
        document.getElementById('login-form-box').classList.add('hidden');
        const dash = document.getElementById('student-profile');
        dash.classList.remove('hidden');

        document.getElementById('prof-name').innerText = user.name;
        document.getElementById('prof-roll').innerText = user.roll;
        document.getElementById('prof-dept').innerText = user.dept;
        document.getElementById('prof-year').innerText = user.year;
        document.getElementById('prof-email').innerText = user.email;
    } else {
        alert("Invalid Email or Password");
    }
}