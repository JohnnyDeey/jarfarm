// Shared nav HTML - call renderNav(activeLink) on each page
function renderNav(active = '') {
  const isStaff = window.location.pathname.includes('/staff/');
  const base = isStaff ? '../' : '';
  document.getElementById('nav-placeholder').innerHTML = `
  <nav class="navbar">
    <a href="${base}index.html" class="nav-logo">
      <img src="${base}logo.png" alt="JohnyRose Agrospring Rwanda Ltd" style="height:48px;width:auto;"/>
      <div style="margin-left:.5rem;line-height:1.2">
        <div style="font-family:Playfair Display,serif;font-size:1rem;font-weight:700;color:#0f2818">JohnnyRose Agrospring</div>
        <div style="font-size:.72rem;color:#1a5c2e;font-weight:600;letter-spacing:.04em">Rwanda Ltd &nbsp;·&nbsp; Trading as JAR Farm</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="${base}index.html" class="${active==='home'?'active':''}">Home</a></li>
      <li><a href="${base}products.html" class="${active==='products'?'active':''}">Products</a></li>
      <li><a href="${base}about.html" class="${active==='about'?'active':''}">About Us</a></li>
      <li><a href="${base}contact.html" class="${active==='contact'?'active':''}">Contact</a></li>
      <li><a href="${base}staff/index.html" class="nav-staff-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Staff Portal
      </a></li>
      <li><a href="${base}contact.html#partner" class="nav-cta">Partner With Us</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>`;
}

function renderFooter() {
  const isStaff = window.location.pathname.includes('/staff/');
  const base = isStaff ? '../' : '';
  document.getElementById('footer-placeholder').innerHTML = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="margin-bottom:14px">
          <img src="${base}logo.png" alt="JAR Farm" style="height:56px;width:auto;"/>
        </div>
        <div style="margin-bottom:4px">
          <span style="color:white;font-weight:700;font-size:1rem">JohnnyRose Agrospring Rwanda Limited</span>
        </div>
        <p style="margin-bottom:4px;font-size:.82rem">Trading as <strong style="color:rgba(255,255,255,.85)">JAR Farm</strong></p>
        <p style="font-size:.8rem;color:rgba(255,255,255,.5);margin-bottom:16px">
          COI: 147136187 &nbsp;|&nbsp; S. No.: 1627463
        </p>
        <div style="margin-top:8px">
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            KK711 Street, Kigarama, Kicukiro, Kigali, Rwanda
          </div>
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            johndamilola328@gmail.com
          </div>
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.12 2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
            +250 793 594 038
          </div>
        </div>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="${base}index.html">Home</a></li>
          <li><a href="${base}about.html">About JAR Farm</a></li>
          <li><a href="${base}about.html#mission">Our Mission</a></li>
          <li><a href="${base}about.html#team">Our Team</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Produce</h5>
        <ul>
          <li><a href="${base}products.html">All Products</a></li>
          <li><a href="${base}products.html#export">Export Grade</a></li>
          <li><a href="${base}products.html#local">Local Market</a></li>
          <li><a href="${base}contact.html#order">Place an Order</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Partners</h5>
        <ul>
          <li><a href="${base}contact.html#partner">Partner With Us</a></li>
          <li><a href="${base}contact.html#farmer">Join as Farmer</a></li>
          <li><a href="${base}contact.html">Buyers (EU/UAE/UK)</a></li>
          <li><a href="${base}staff/index.html">Staff Login</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 JohnnyRose Agrospring Rwanda Limited. All rights reserved.</span>
      <span>Built with 🌿 for Rwandan farmers</span>
    </div>
  </footer>`;
}
