function initSignup() {
    const container = document.getElementById('signup-container');
    container.innerHTML = `
        <div class="card signup-card">
            <h2>Student Signup</h2>
            <input type="text" id="s-name" placeholder="Full Name">
            <input type="email" id="s-email" placeholder="Email">
            <input type="password" id="s-pass" placeholder="Password">
            <input type="text" id="s-roll" placeholder="Roll Number">
            <input type="text" id="s-dept" placeholder="Department">
            <input type="number" id="s-year" placeholder="Year (1-4)">
            <button class="btn btn-signup" id="signup-submit">Register</button>
            <p onclick="location.reload()" style="cursor:pointer; margin-top:10px; color:#27ae60">Back to Admin Login</p>
        </div>
    `;

    document.getElementById('signup-submit').addEventListener('click', handleSignup);
}

function handleSignup() {
    const name = document.getElementById('s-name').value;
    const email = document.getElementById('s-email').value;
    const pass = document.getElementById('s-pass').value;
    const roll = document.getElementById('s-roll').value;
    const dept = document.getElementById('s-dept').value;
    const year = document.getElementById('s-year').value;

    if (!name || !email || !pass || !roll || !dept || !year) {
        return alert("Please fill all fields");
    }

    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Check for duplicates
    if (students.find(s => s.email === email || s.roll === roll)) {
        return alert("Email or Roll Number already exists!");
    }

    const newStudent = { name, email, pass, roll, dept, year };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    alert("Registration Successful!");
    showSection('student-login');
}