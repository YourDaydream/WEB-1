document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const eyeIcon = togglePasswordBtn.querySelector('.icon-eye');
    const eyeOffIcon = togglePasswordBtn.querySelector('.icon-eye-off');
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');
    const toast = document.getElementById('toast');

    let isPasswordHidden = true;

    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
        isPasswordHidden = !isPasswordHidden;
        passwordInput.type = isPasswordHidden ? 'password' : 'text';
        eyeIcon.classList.toggle('hidden', !isPasswordHidden);
        eyeOffIcon.classList.toggle('hidden', isPasswordHidden);
    });

    // Toast notification
    let toastTimeout;
    function showToast(message) {
        clearTimeout(toastTimeout);
        toast.textContent = message;
        toast.classList.add('show');
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showToast('Please fill in both email and password.');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Signing in...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Sign in';
            showToast('Signed in successfully.');
        }, 1000);
    });

    // Forgot password demo
    document.getElementById('forgotLink').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Password reset link sent to your email.');
    });
});
