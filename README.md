# Spiritual Sundays Website

A beautiful, magazine-style website with elegant parallax scrolling for Spiritual Sundays events.

## 📁 File Structure

```
spiritual-sundays/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Parallax effects and interactions
├── README.md           # This file
│
└── slides/             # Create this folder
    ├── Slide_1.png
    ├── Slide_2.png
    ├── Slide_3.png
    ├── ...
    └── Slide_14.png
```

## 🚀 Setup Instructions

### 1. Create Project Folder
1. Create a new folder called `spiritual-sundays`
2. Place `index.html`, `styles.css`, and `script.js` in this folder

### 2. Add Your Images
1. Create a folder called `slides` inside your project folder
2. Export your 14 Figma slides as PNG files
3. Name them exactly: `Slide_1.png`, `Slide_2.png`, etc.
4. Place all 14 images in the `slides` folder

### 3. Test Locally in VS Code
1. Open the project folder in VS Code
2. Install "Live Server" extension (if you haven't already)
3. Right-click on `index.html` and select "Open with Live Server"
4. Your site will open in your browser!

### 4. Version Control with GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Spiritual Sundays website"

# Create a new repository on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### 5. Deploy to Cloudflare
1. Go to Cloudflare Pages
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy!

## ✨ Features

- **Parallax Scrolling**: Smooth, elegant transitions between slides
- **Responsive Design**: Works on mobile, tablet, and desktop
- **RSVP Integration**: Button on Slide 13 links to Google Form
- **Contact Button**: Fixed navbar with email link
- **Keyboard Navigation**: Use arrow keys to navigate slides
- **Smooth Animations**: Fade-in effects as you scroll

## 🔄 Adding New Issues (Monthly Updates)

When you need to add Issue 02 next month:

1. Create your new slides in Figma (e.g., Slide_15.png, Slide_16.png, etc.)
2. Export and add them to the `slides` folder
3. Open `index.html` and add new slide sections following this template:

```html
<!-- Slide 15: New Issue Cover -->
<section class="slide slide-15" data-slide="15">
    <div class="slide-content">
        <img src="slides/Slide_15.png" alt="Issue 02 Cover" class="slide-image">
    </div>
</section>
```

4. Open `styles.css` and add background gradient for new slides:

```css
.slide-15 { background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%); }
```

5. Test locally, commit to GitHub, and deploy!

## 🎨 Customization Tips

### Change Colors
Edit the gradient backgrounds in `styles.css`:
```css
.slide-1 { background: linear-gradient(135deg, #newcolor1 0%, #newcolor2 100%); }
```

### Adjust Parallax Speed
In `script.js`, change this line:
```javascript
const parallaxSpeed = 0.3; // Lower = slower, Higher = faster
```

### Modify Button Styles
Edit `.rsvp-btn` and `.contact-btn` in `styles.css`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Images not loading?**
- Check that the `slides` folder exists
- Verify image names match exactly: `Slide_1.png` (capital S, underscore, no spaces)

**Parallax not working?**
- Make sure `script.js` is linked correctly in `index.html`
- Check browser console for JavaScript errors

**RSVP button not clickable?**
- Verify the Google Form link is set to "viewform" not "edit"
- Check z-index in CSS if other elements are covering it

## 📧 Contact

For questions: info@spiritualsundays.club

---

Built with ❤️ for Spiritual Sundays community
