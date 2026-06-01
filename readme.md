# Love-Matching Quiz for RP Forum

## Live Demo

https://t4bbyp.github.io/tori-quiz/

## About the Project

If you're not familiar with RP (role-play) forums, allow me to explain. Think of collaborative storytelling, like Dungeons & Dragons, but in written form. Now take that concept, put it into a web forum, and have people write stories together using their original characters. That's it.

Now that that's out of the way, onto the project. 

It started as a small React SPA with a short quiz to determine which character from [Scripta Manent](https://scriptamanent.foroactivo.com/f2-la-cuarta-generacion) (an RP forum my friends and I are part of) would be best romantic match for the user.

At first it was just a simple practice project while learning React, but as I kept working on it, it naturally grew into a multi-page application. Nothing too complex, but I'm quite proud of how it evolved in such a short time. Most importantly, I had fun making it!

So hopefully whoever finds this enjoys it too, or at least appreciates the effort that went into building it :D


## Tech Stack

(This section is mostly for myself, to track what I’ve used and the project’s structure.)

### Frontend
- React (Vite)
- React Router
- CSS Modules
- JavaScript

### Backend / Services
- Supabase (database & authentication)

### Other Tools
- i18next
- GitHub Pages deployment


## Features

- Home Page
- Personality/compatibility quiz system
- Top 3 matching characters
- Character list page
- Character management (adding/editing) — restricted and requires authentication
- Authentication-protected admin functionality
- English & Spanish localization
- Responsive design

## Installation

```bash
git clone https://github.com/t4bbyp/tori-quiz.git
cd tori-quiz
npm install
npm run dev
```

## What I Learned

This project helped me practice and better understand the following:
- React component architecture
- effects, state, context and portals
- Client-side routing with React Router
- state-driven UI rendering
- localization workflows
- integrating external services with SupaBase
- deploying React apps through GitHub Pages
- Understanding the limitations of static hosting and using createHashRouter for compatibility

## Credits

- My friend Efi, for coming up with the quiz idea, helping with many quiz questions/answers and supporting the project
- The members of Scripta Manent for creating the characters featured here
- [MagicPattern](https://www.magicpattern.design/tools/css-backgrounds) - because I got a cute background from their platform
- All character artwork belongs to their respective artists
 - Home Page images: [picrew](https://picrew.me/en/image_maker/1108773)

   <video src="https://github.com/t4bbyp/tori-quiz/releases/download/v1/video.mp4" controls width="600"></video>
