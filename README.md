# Spiritual Sundays Website

A mobile-first website for Spiritual Sundays events, featuring a homepage, guest list page, and password-protected speakers page.

## Recent Updates

### RSVP Buttons Added
- **Guest List Page**: RSVP button added to Slide_13 (positioned at the bottom of the slide)
- **Speakers Page**: RSVP button added to S5 (positioned at the bottom of the slide)
- Both buttons link to: https://docs.google.com/forms/d/1nNLp8GuTUlw3h31GhGmlYEzvxCY18a5S5-EUlejTsQ4/edit
- Buttons open in a new tab for user convenience

## Project Structure

```
spiritual-sundays/
├── index.html          # Homepage with navigation
├── guest-list.html     # Guest list page with slides
├── speakers.html       # Password-protected speakers page
├── styles.css          # All styling (mobile-first design)
├── script.js           # Password protection & interactions
└── README.md           # This file
```

## Features

### Homepage (index.html)
- Clean, centered design featuring the Spiritual Sundays logo
- Two navigation buttons:
  - **Guest List** - Leads to the guest information slides
  - **Speakers** - Leads to password-protected speaker information

### Guest List Page (guest-list.html)
- Displays slides 1-14 in sequential order
- Each slide is fully visible (no cropping)
- Mobile-first responsive design
- **NEW: RSVP button on Slide_13** - Links to Google Forms
- Contact button on Slide_14 (info@spiritualsundays.club)
- Back to Home button at the bottom

### Speakers Page (speakers.html)
- Password protected (Password: "Jesusisking")
- Displays speaker slides S1-S5 in order
- **NEW: RSVP button on S5** - Links to Google Forms
- Session-based authentication (remains unlocked during browser session)
- Same responsive design as guest list page

## Design Details

### Color Palette
- Primary Beige: `#EFE4D4`
- Primary Green: `#536B5C`
- Accent Sage: `#B8C4B8`
- Dark Text: `#1A1A1A`
- Light Text: `#FFFFFF`

### Button Styles
- **Primary buttons** (Guest List, Speakers, RSVP): Green background with white text
- **Secondary buttons** (Back to Home): Sage green with dark text
- **Contact button**: Green background with white text
- All buttons include hover effects and smooth transitions

### Responsive Design
- **Mobile-first** approach
- Optimized for phones (default)
- Tablet optimization at 768px+
- Desktop optimization at 1024px+
- Full images visible at all screen sizes

## Technical Features

### Password Protection
- Client-side password verification
- Session storage maintains authentication
- Enter key support for password submission
- Shake animation on incorrect password
- Case-sensitive password matching

### Image Overlays
- **Slide_13**: RSVP button overlay
- **Slide_14**: Contact button overlay
- **S5**: RSVP button overlay
- Buttons positioned at bottom of respective slides
- Responsive positioning across all screen sizes

### Animations
- Fade-in effects on page load
- Slide-up animations for images
- Intersection Observer for progressive loading
- Smooth scroll behavior
- Shake animation for password errors

## Installation & Usage

1. **Download all files** to your project folder
2. **Add your images** to the same folder:
   - Homepage.png (logo for homepage)
   - Slide_1.png through Slide_14.png (guest list slides)
   - S1.png through S5.png (speaker slides)
3. **Open index.html** in a web browser or deploy to your hosting service

## Password Information

**Speakers Page Password**: `Jesusisking`
- Case-sensitive
- No spaces
- Remains active during browser session

## External Links

- **RSVP Form**: https://docs.google.com/forms/d/1nNLp8GuTUlw3h31GhGmlYEzvxCY18a5S5-EUlejTsQ4/edit
- **Contact Email**: info@spiritualsundays.club

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Requirements

Ensure all image files are in PNG format and named correctly:
- Homepage.png
- Slide_1.png - Slide_14.png
- S1.png - S5.png

## Customization

To change the password, edit the `CORRECT_PASSWORD` variable in `script.js`:
```javascript
const CORRECT_PASSWORD = "YourNewPassword";
```

To change button colors, modify CSS variables in `styles.css`:
```css
:root {
    --primary-green: #536B5C;  /* Change this for button color */
}
```

## Support

For questions or issues, contact: info@spiritualsundays.club

## Version History

**v1.1** (Latest)
- Added RSVP button to Slide_13 (Guest List page)
- Added RSVP button to S5 (Speakers page)
- Both RSVP buttons link to Google Forms
- Enhanced button styling and positioning

**v1.0**
- Initial release
- Homepage with navigation
- Guest list page with 14 slides
- Password-protected speakers page
- Contact button on Slide_14
- Mobile-first responsive design
