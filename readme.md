# Love-Matching Quiz for RP Forum

If you're not familiar with RP (role-play) forums, allow me to explain. Think of Dungeons & Dragons, but in written form. Now take that concept, put it into a web forum, and have people collaborate on stories using their original characters. That's it.

Now that that's out of the way, onto the project. 

The initial idea was to make a quick React SPA with a short quiz to determine which character from [Scripta Manent](https://scriptamanent.foroactivo.com/f2-la-cuarta-generacion) (an RP forum my friends and I are part of) would be most romantically compatible with whoever takes the test (or even their OC, no rules here). 

It started as a simple practice project while learning React, but as I kept coding, it naturally grew into a multi-page application. Nothing too complex, but I'm quite proud of how it evolved. Most importantly, I had fun making it!

So hopefully whoever finds this enjoys it too, or at least appreciates the effort of a React beginner :D


## Tech Stack

(This section is mostly for myself, to track what I’ve used and the project’s structure.)

- Vite + Basic React elements (components, useState, useEffect, useContext, etc.)
- CSS modules
- React Router (createHashRouter, Forms, Links, etc.)
- Supabase (database & authentication)
- GitHub Pages (deployment)
- i18next (EN & ES localization)


## Features

- Home Page
- Quiz system (create / retake quiz and get top 3 character matches)
- Character list system
- Character management (adding/editing) — restricted and requires authentication


## Installation

Since this was deployed through GH Pages, it doesn't require any installation. You can access my page [here](https://t4bbyp.github.io/tori-quiz/) freely. The only restrictions are the options to add new characters to the system and to edit existing ones. For security reasons, they require to be logged in and account making isn't open to the public. If you'd ever be interested in having a similar quiz done for your own things, feel free to contact me.

## Credits

Of course, I have to mention the following, for their helpful resources:
- First and foremost, MYSELF :D
- My friend Efi, for being the first to think of making a quiz like this, coming up with most of the questions/answers (which I had the freedom to adapt as I wished later on) and cheering on me while I coded everything else.
- [MagicPattern](https://www.magicpattern.design/tools/css-backgrounds) - because I got a cute background from their platform
- My friends in the forum, who created their amazing characters, which are now the love interests in my quiz!
- Any images present in my page belong only to their respective creators/artists and I claim no ownership or rights to them.
 - Home Page images: (picrew)[https://picrew.me/en/image_maker/1108773]
 - Characters' images: artist names can be found in the Characters List and in the Results page.