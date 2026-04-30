# Prof. Dr. Abebe Geletu — Academic Website

Modern, responsive academic website for Prof. Dr. D.Sc. Abebe Geletu, German Research Chair at AIMS–RIC Rwanda.

## 📁 File Structure

```
prof-abebe-site/
├── index.html          ← Professor profile & main page
├── lab.html            ← Autonomous Systems Lab page
├── news.html           ← News, events & community posts
├── asset/
│   ├── css/
│   │   └── main.css    ← Complete shared design system
│   ├── js/
│   │   └── main.js     ← Nav, animations, scroll behavior
│   ├── photos/         ← Place all images here
│   │   ├── cover.jpg          (hero photo)
│   │   ├── cover2.png         (logo/nav image)
│   │   ├── 287A1014.jpg       (about photo)
│   │   ├── 287A0180.jpg       (conference photo)
│   │   ├── Last day (24).JPG  (lab team)
│   │   ├── Last day (29).JPG  (lab session)
│   │   ├── 5.JPG
│   │   └── 8.JPG
│   ├── videos/         ← Place video files here
│   └── docs/
│       └── CV_AbebeGeletu.pdf  ← Place CV PDF here
└── README.md
```

## 🚀 Deploying to GitHub Pages

1. **Create a GitHub repository** named `Prof.AbebeGeletu` (or whatever you prefer)
2. **Upload all files** keeping the folder structure intact
3. Go to **Settings → Pages**
4. Set source to: `main` branch, `/ (root)` folder
5. Click **Save** — your site will be live at:
   `https://kbsha.github.io/Prof.AbebeGeletu/`

### Quick deploy with Git:
```bash
git init
git add .
git commit -m "Initial site launch"
git branch -M main
git remote add origin https://github.com/kbsha/Prof.AbebeGeletu.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings.

---

## 📸 Adding Your Photos

Replace placeholder images by placing your actual photos in `asset/photos/`:

| File | Used in |
|------|---------|
| `cover.jpg` | Hero section (professor portrait) |
| `cover2.png` | Navigation logo & lab header |
| `287A1014.jpg` | About section photo |
| `Last day (24).JPG` | Lab gallery + team card |
| `Last day (29).JPG` | Lab gallery |
| `5.JPG`, `8.JPG`, `287A0180.jpg` | Gallery |

---

## ✏️ Customizing Content

### Update contact info
In `index.html`, search for:
- `abebe.geletu@aims.ac.rw` → replace with actual email
- `+250 78 000 0000` → replace with phone
- Formspree form ID `xbdoyyab` → replace with your form ID

### Add/edit publications
In `index.html`, find `<section id="publications">` and edit the `.pub-item` blocks.

### Add team members
In `lab.html`, find `<section id="team">` and duplicate a `.team-card` div.

### Add news
In `news.html`, add new `<article class="news-card">` blocks with the appropriate `data-category` attribute.

---

## 🎨 Design System

Colors:
- Navy: `#0a1628`
- Amber: `#d4883e`
- Cream: `#faf7f2`

Fonts:
- Display: Playfair Display (headings)
- Body: DM Sans (text)
- Mono: DM Mono (code)

---

## 💡 Contact Form

The contact form uses [Formspree](https://formspree.io). Update the form `action` attribute in `index.html` with your Formspree endpoint, or replace with any form backend you prefer.

---

© 2026 Prof. Dr. Abebe Geletu · AIMS–RIC Rwanda
