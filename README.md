# Links & DM - React + Firebase App

The Ultimate Link-in-Bio solution for creators, with smart DM sorting and Firebase persistence.

## 🚀 Features

- ✅ Beautiful gradient themes (12 options)
- ✅ Smart DM sorting and inbox management
- ✅ All social handles in one place
- ✅ Email, contact, and website management
- ✅ Portfolio & projects showcase
- ✅ Charity/cause link support
- ✅ Priority contacts (Friends & Family)
- ✅ Firebase Firestore for message storage
- ✅ Real-time message sync

## 📋 Prerequisites

- Node.js 16+ installed
- GitHub account
- Netlify account (free)

## 🔧 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/links-dm-app.git
cd links-dm-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```
The app will open at `http://localhost:3000`

## 🌐 Deploy to Netlify

### Method 1: Automatic (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click **"New site from Git"**
4. Select GitHub and authorize
5. Choose your repository
6. Netlify auto-detects:
   - Build command: `npm run build`
   - Publish directory: `build`
7. Click **Deploy Site**
8. ✅ Your app is live in 2-3 minutes!

### Method 2: Manual (via Netlify Drop)
1. Run: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build` folder onto the page
4. ✅ Get a live URL instantly!

## 🔐 Firebase Configuration

Firebase credentials are already configured in `src/firebase.js`:
- Project: `links-dm-pro`
- Firestore is enabled
- Messages are stored in the `messages` collection

**Important:** These credentials are public-safe (web app credentials). Never commit sensitive backend credentials.

## 📝 How It Works

### Screens:
1. **Landing** - Hero page with CTA
2. **Editor** - Customize profile, links, and settings
3. **Preview** - Live preview of your link-in-bio
4. **Inbox** - View and manage all incoming messages

### Data Storage:
- **Profile & Settings** → React State (local)
- **Messages** → Firebase Firestore (cloud sync)

### Message Types:
- 📅 Book a Meeting
- 💬 Let's Connect
- 🤝 Collab Request
- ❤️ Support a Cause

## 🛠️ Build for Production
```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 📱 Responsive Design

- Mobile-first design (works on all devices)
- Optimized for iOS & Android
- Desktop preview support

## 🎨 Customization

All styles are in `src/App.js` using:
- Tailwind CSS (inline classes)
- Custom gradients
- Drop shadows and effects

To modify themes, edit the `themes` array in `App.js`.

## 🐛 Troubleshooting

### "npm: command not found"
→ Install Node.js from [nodejs.org](https://nodejs.org)

### Build fails on Netlify
→ Check `package.json` dependencies are correct
→ Verify no ESLint errors: `npm test`

### Firebase not connecting
→ Check internet connection
→ Verify Firebase credentials in `src/firebase.js`

### Messages not persisting
→ Open browser DevTools → Application → Firebase logs
→ Check Firestore rules in Firebase Console

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Firebase Docs](https://firebase.google.com/docs)
- [Netlify Deployment](https://docs.netlify.com)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 License

MIT License - feel free to use and modify!

## 🚀 Next Steps

1. Upload files to GitHub
2. Connect to Netlify
3. Deploy in 1 click
4. Share your unique link-in-bio URL

**Need help?** Check Netlify deployment logs or Firebase Console for real-time debugging.
