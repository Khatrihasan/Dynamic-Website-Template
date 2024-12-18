// Define the HTML for the navigation bar
const navBarHTML = `
<nav class="first-nav">
        <div class="right-nav">
            <ul>
                <li>WELCOM TO J.</li>
                <li><a href="signin.html">SIGN IN</a></li>
                <li><img src="pak-flag.webp" alt="" height="18" width="34"></li>
                <li><a href="tracking.html">TRACKING INFO</a></li>
                <li><a href="corporate.html">CORPORATE INQUIRY</a></li>
                <li><select name="" id="">
                        <option value="">PAK</option>
                        <option value="">IND</option>
                        <option value="">CAD</option>
                        <option value="">AUD</option>
                        <option value="">GBP</option>
                        <option value="">JPY</option>
                        <option value="">EUR</option>
                        <option value="">SAR</option>
                        <option value="">USD</option>
                        <option value="">AED</option>
                        <option value="">CHF</option>
                    </select></li>
            </ul>
        </div>
        <div class="left-nav">
            <img src="mdi--cart.png" alt="" height="32" width="32">
            <button><img src="search.png" alt="" height="32" width="32"><a href="">SEARCH</a></button>
        </div>
    </nav>
`;

// Insert the navigation bar into the container using querySelector
document.querySelector('#navbar-container').innerHTML = navBarHTML;


var card = ` 
        <div class="card">
            <div class="card-img">
                <img src="Screenshot (67).png" alt="Website preview" />
            </div>
            <div class="card-text">
                <h4>J. Website</h4>
                <p>
                    A responsive website built with HTML and CSS to showcase various clothes. Features include a clean design and user-friendly navigation. Perfect for a clothing market or personal portfolios.
                </p>
                <a href="https://khatrihasan.github.io/J.-Website/" class="btn">View More</a>
            </div>
        </div>`

document.querySelector(".container").innerHTML = card


var footer = `<footer class="foot">
        <div class="newsletter">
            <p>BE THE FIRST</p>
            <p>New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.</p>
            <div class="signup-form">
                <input type="email" placeholder="Enter your email address">
                <button>SIGN UP</button>
            </div>
        </div>
        <div class="footer-container">
            <div class="footer-section">
                <h4>NEED HELP?</h4>
                <p>24/7 @ +91 (0) 124 4195900 (10am - 6pm - Sun)</p>
                <p>shop@jyoungsters.com</p>
            </div>

            <div class="footer-section">
                <h4>CUSTOMER SERVICE</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>Delivery & Orders</li>
                    <li>Returns & Exchanges</li>
                    <li>Payment Methods</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Payment Guide</li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>COMPANY</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Store Addresses</li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>FOLLOW US</h4>
                <div class="social-icons">
                    <a href="https://www.facebook.com/j.junaidjamshed"><img src="logos--facebook.png" alt="" height="32"
        width="32"></a>
<a href="https://www.instagram.com/junaidjamshed/"><img src="skill-icons--instagram.png" alt="" height="32"
width="32"></a>
<a href="https://twitter.com/_JunaidJamshed"><img src="logos--twitter.png" alt="" height="32"
width="32"></a>
<a href="https://www.youtube.com/@junaidjamshed"><img src="logos--youtube-icon.png" alt="" height="32"
width="32"></a>
<a href="https://www.pinterest.com/junaidjamshed/"><img src="logos--pinterest.png" alt="" height="32"
width="32"></a>
<a href="https://www.linkedin.com/in/junaidjamshed/"><img src="skill-icons--linkedin.png" alt="" height="32"
width="32"></a> 
                </div>
            </div>
        </div>

    </footer>`

document.querySelector(".foot").innerHTML = footer