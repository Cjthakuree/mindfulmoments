document.addEventListener('DOMContentLoaded', function() {

    // 1. Mobile Menu Toggle
    const toggleButton = document.querySelector('.toggle-menu');
    const navMenu = document.querySelector('nav ul');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Form validation for signup page
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match!');
    }
});

// You can add additional validation for login or any other forms if needed


    // 3. Simple Form Validation for Sign-In and Sign-Up Forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('input-error');
                } else {
                    input.classList.remove('input-error');
                }
            });

            if (!valid) {
                event.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    });

    // Highlight invalid fields (CSS class `input-error` can be styled to highlight error inputs)
    const inputFields = document.querySelectorAll('input[required]');
    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.trim()) {
                input.classList.remove('input-error');
            }
        });
    });

});
// Show and Load Overview Content
document.getElementById('showOverview').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Load the overview content
    const overviewContent = `
        <p>Our product, Mindful Moments, offers a range of features designed to support mental well-being. 
        From mindfulness techniques and stress management guides to peer support and professional counseling, 
        Mindful Moments is your go-to platform for improving mental health. Our easy-to-use interface and 
        tailored resources make mindfulness accessible for everyone.</p>
        <ul>
            <li>Mindfulness Meditation</li>
            <li>Stress Management Techniques</li>
            <li>Peer Support Forums</li>
            <li>Professional Counseling Services</li>
        </ul>
    `;

    // Insert the content into the #overview-content div
    document.getElementById('overview-content').innerHTML = overviewContent;

    // Display the overview section
    document.getElementById('product-overview').style.display = 'block';
});

// Close Overview Section
document.getElementById('close-overview').addEventListener('click', function() {
    document.getElementById('product-overview').style.display = 'none';
});

// Show and Load Pricing Content
document.getElementById('showPricing').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Pricing content to display
    const pricingContent = `
        <ul>
            <li><strong>Free Plan:</strong> $0/month - Access to basic mindfulness resources and community forums.</li>
            <li><strong>Premium Plan:</strong> $19.99/month - Includes guided meditation sessions, expert advice, and peer support forums.</li>
            <li><strong>Enterprise Plan:</strong> $49.99/month - Tailored mindfulness programs, dedicated support, and access to professional counseling services.</li>
        </ul>
    `;

    // Insert pricing content into the pricing-content div
    document.getElementById('pricing-content').innerHTML = pricingContent;

    // Display the Pricing section
    document.getElementById('pricing-section').style.display = 'block';
});

// Close Pricing Section
document.getElementById('close-pricing').addEventListener('click', function() {
    document.getElementById('pricing-section').style.display = 'none';
});

// Show and Load Features Content
document.getElementById('showFeatures').addEventListener('click', function(event) {
    event.preventDefault();
    
    const featuresContent = `
        <h2>Product Features</h2>
        <ul>
            <li>Feature 1: Detailed stress management resources</li>
            <li>Feature 2: Guided mindfulness meditation exercises</li>
            <li>Feature 3: Community support forums for peer interaction</li>
            <li>Feature 4: Access to licensed professional counselors</li>
        </ul>
    `;
    document.getElementById('overview-content').innerHTML = featuresContent;
    document.getElementById('product-overview').style.display = 'block';
});
// Show and Load Blog Content
document.getElementById('showBlog').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Blog content to display
    const blogContent = `
        <h3>Mindful Eating: How to Practice Mindfulness with Food</h3>
        <p>Mindful eating is the practice of being fully present and aware of your eating experience...</p>
        <a href="blog_post_1.html">Read More</a>

        <h3>The Benefits of Daily Meditation for Mental Health</h3>
        <p>Daily meditation has profound effects on mental health...</p>
        <a href="blog_post_2.html">Read More</a>

        <h3>Stress Management Techniques: A Guide to Coping with Stress</h3>
        <p>Stress is a common part of life, but it doesn’t have to control you...</p>
        <a href="blog_post_3.html">Read More</a>
    `;

    // Insert blog content into the blog-content div
    document.getElementById('blog-content').innerHTML = blogContent;

    // Display the blog section
    document.getElementById('blog-section').style.display = 'block';
});

// Close Blog Section
document.getElementById('close-blog').addEventListener('click', function() {
    document.getElementById('blog-section').style.display = 'none';
});
// Show and Load About Us Content
document.getElementById('showAboutUs').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // About Us content to display
    const aboutUsContent = `
        <p>At Mindful Moments, we are dedicated to providing a platform that supports mental health 
        and well-being. Our mission is to make mindfulness practices and mental health resources 
        accessible to everyone, helping people manage stress, anxiety, and improve their overall mental health.</p>
        
        <p>Our team consists of mental health professionals, mindfulness experts, and passionate 
        individuals who believe in the power of community support and professional counseling to 
        create lasting, positive change in people's lives.</p>
        
        <p>Join us on our journey to improve mental well-being through mindfulness, support, 
        and professional guidance.</p>
    `;

    // Insert the content into the about-us-content div
    document.getElementById('about-us-content').innerHTML = aboutUsContent;

    // Display the About Us section
    document.getElementById('about-us-section').style.display = 'block';
});

// Close About Us Section
document.getElementById('close-about-us').addEventListener('click', function() {
    document.getElementById('about-us-section').style.display = 'none';
});
// Show and Load Free Plan Content
document.getElementById('showFreePlan').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Free Plan content to display
    const freePlanContent = `
        <h3>Free Plan</h3>
        <p>With the Free Plan, you get access to the following:</p>
        <ul>
            <li>Access to mindfulness resources and articles</li>
            <li>Join community peer support forums</li>
            <li>Basic stress management and meditation guides</li>
        </ul>
        <p>Start improving your mental well-being for free today!</p>
    `;

    // Insert free plan content into the free-plan-content div
    document.getElementById('free-plan-content').innerHTML = freePlanContent;

    // Display the Free Plan section
    document.getElementById('free-plan-section').style.display = 'block';
});

// Close Free Plan Section
document.getElementById('close-free-plan').addEventListener('click', function() {
    document.getElementById('free-plan-section').style.display = 'none';
});
