# 1. Create the project
npm create vite@latest vishal-portfolio -- --template react-ts
cd vishal-portfolio

# 2. Install dependencies
npm install
npm install three @react-three/fiber @react-three/drei framer-motion
npm install -D tailwindcss postcss autoprefixer @types/three

# 3. Init Tailwind
npx tailwindcss init -p

# 4. Copy all files from the structure above into the project

# 5. Add assets to /public:
#    - Vishal_Tayade_FullStack_Developer.pdf
#    - profile.jpg  (your professional photo)

# 6. Run
npm run dev

-------------------------------------------------------------------

# 1. Stop anything running, then downgrade Vite
npm install -D vite@^7.0.0

# 2. Now install the runtime deps
npm install three @react-three/fiber @react-three/drei framer-motion

# 3. And the dev deps
npm install -D tailwindcss postcss autoprefixer @types/three
