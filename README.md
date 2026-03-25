# JAR Farm Website

**Live URL:** https://[your-username].github.io/jarfarm/

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Account
Go to https://github.com and sign up (free).

### Step 2: Create a New Repository
1. Click the **+** button → **New repository**
2. Name it: `jarfarm`
3. Set to **Public**
4. Click **Create repository**

### Step 3: Upload the Files
1. Click **uploading an existing file**
2. Drag all these files and folders into the upload area:
   - `index.html`
   - `about.html`
   - `products.html`
   - `contact.html`
   - `css/` folder
   - `js/` folder
   - `staff/` folder
3. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

### Step 5: Your website is live!
After 2–3 minutes, visit: `https://[your-github-username].github.io/jarfarm/`

---

## 🌐 Adding a Custom Domain (e.g. jarfarm.rw)

Once you buy your domain:
1. Create a file named `CNAME` in this folder with just your domain: `jarfarm.rw`
2. In your domain registrar's DNS settings, add:
   - Type: `A`, Value: `185.199.108.153`
   - Type: `A`, Value: `185.199.109.153`
   - Type: `A`, Value: `185.199.110.153`
   - Type: `A`, Value: `185.199.111.153`
3. In GitHub Pages settings, enter your custom domain
4. Check **Enforce HTTPS**

---

## 👨‍💼 Staff Portal

Staff can log in at `/staff/` with:
- Any username
- Password: `jar2025` (change this by editing `staff/index.html`)

### Staff Portal Features:
- ✅ Dashboard with KPIs and activity feed
- ✅ Inventory management (add/update stock)
- ✅ Orders & sales tracking
- ✅ Outgrower farmer management
- ✅ Team group chat (shared across all staff)
- ✅ Reports & logs (with email to management)

---

## 📧 Setting Up Real Email (Recommended)

For contact forms to actually send emails:
1. Sign up at https://formspree.io (free)
2. Create a form and get your form ID
3. Replace form `action` attributes with your Formspree endpoint

---

## 🔒 For Production (Future Upgrade)

The staff portal currently uses browser localStorage for data.
For a production setup with a real database, consider:
- **Firebase** (free tier) — for real-time chat + data sync across devices
- **Supabase** (free tier) — for database + authentication
- **Google Sheets API** — simple data store for small teams

These upgrades can be added without changing the visual design.
