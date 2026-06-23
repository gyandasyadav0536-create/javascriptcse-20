document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple interaction for Book buttons
    const bookBtns = document.querySelectorAll('.book-btn');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Booking feature coming soon! Please login to continue.');
        });
    });

    // Navbar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5,5,17,0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'linear-gradient(180deg, rgba(5,5,17,0.8) 0%, rgba(5,5,17,0) 100%)';
            header.style.boxShadow = 'none';
        }
    });
});

// Generic Form Handler (for Login/Register)
async function handleAuth(event, endpoint) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Processing...';
    btn.disabled = true;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            window.location.href = 'index.html';
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        // Fallback for demo/simulation if server is down
        alert('Server unreachable (Demo Mode): Operation successful!');
        if (endpoint.includes('login') || endpoint.includes('register')) {
            window.location.href = 'index.html';
        }

    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// Contact Form Handler
async function handleContact(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Sending...';
    btn.disabled = true;

    // Simulate network request
    setTimeout(() => {
        alert('Message sent successfully! We will get back to you soon.');
        event.target.reset();
        btn.innerText = originalText;
        btn.disabled = false;
    }, 1500);
}
