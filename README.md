# Muhammad Fikri - Portfolio

Portfolio website built with Vite + React. Minimalist, responsive design with smooth animations.

![Portfolio Preview](https://muhammadfikri.web.id)

## 🚀 Features

- **Responsive Design** - Works on Mobile, Tablet, and Desktop
- **Smooth Animations** - Hamburger menu, nav underline, hover effects
- **Modern UI/UX** - Clean, minimalist design
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Fast Performance** - Vite build tool, optimized assets
- **No Focus Ring** - Clean interaction without default browser outlines
- **Disabled Context Menu** - Right-click disabled for protection

## 📋 Sections

1. **About** - Profile avatar, name, status, and typing quote animation
2. **Skills** - Progress bars showing skill levels
3. **Certificates** - Certificate images grid
4. **Music** - Spotify embed player
5. **Contact** - Social media links (Telegram, Instagram, WhatsApp)

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/whofik/Portofolio.git
   cd Portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Deployment (Vercel)

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 3: Manual Deploy

```bash
npm run build
vercel --prod
```

## 📁 Project Structure

```
porto/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Music.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Certificates.css
│   │   ├── Music.css
│   │   └── Contact.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

## ⚙️ Configuration

### Customize Profile

Edit `src/components/About.jsx`:
```jsx
// Change name
<h1 className="name">Your Name</h1>

// Change status
<p className="status">Your Status</p>

// Change quote
const quote = "Your favorite quote"
```

### Customize Skills

Edit `src/components/Skills.jsx`:
```jsx
const skillData = [
  { name: 'Skill Name', percent: 50 },
  // Add more skills
]
```

### Customize Contact Links

Edit `src/components/Contact.jsx`:
```jsx
const contacts = [
  {
    name: 'Your Platform',
    href: 'https://your-link.com',
    className: 'your-class',
    icon: <path d="..."/>
  }
]
```

### Customize Colors

Edit CSS files in `src/styles/`:
```css
/* Primary blue */
#0066ff

/* Background */
#fafafa

/* Text */
#111111
```

## 🎨 Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#0066ff` | Links, accents, progress bars |
| Background | `#fafafa` | Page background |
| White | `#ffffff` | Cards, sections |
| Black | `#111111` | Headings |
| Gray | `#666666` | Body text |
| Light Gray | `#eaeaea` | Borders |

## 📱 Responsive Breakpoints

| Device | Width |
|--------|-------|
| Mobile | ≤ 480px |
| Tablet | 481px - 768px |
| Desktop | ≥ 769px |

## 🔧 Customization Tips

1. **Change Avatar** - Replace URL in `src/components/About.jsx`
2. **Change Favicon** - Replace URL in `index.html`
3. **Add Certificates** - Add images to `src/components/Certificates.jsx`
4. **Change Spotify Track** - Update embed URL in `src/components/Music.jsx`
5. **Update SEO** - Edit meta tags in `index.html`

## 👤 Author
- Contact: [Telegram](https://FikXzXmodsTzy.t.me) | [Instagram](https://www.instagram.com/fmds_whps)

---
 using Vite + React
