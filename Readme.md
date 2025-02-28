# Pokémon Explorer 🕵️‍♂️🎮

A responsive and visually appealing Pokémon Explorer web app built with **Next.js 15**, fetching data from the **PokéAPI**. Users can **search for Pokémon** and view their **detailed stats, abilities, and moves**.

---

## 🚀 Features
- ✅ **Homepage**: Lists Pokémon with a **search function**.
- ✅ **Detail Page**: Displays **image, abilities, type, stats, and moves**.
- ✅ **Dynamic Routing**: Uses `app/pokemon/[id]/page.tsx` for each Pokémon.
- ✅ **Performance Optimization**: Uses **Static Site Generation (SSG)**.
- ✅ **Styled UI**: Built with **Tailwind CSS** & Chakra UI.

---

## 🛠️ Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **PokéAPI** (https://pokeapi.co)

---

## 🔧 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/pokemon-explorer.git
cd pokemon-explorer
2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

📝 Folder Structure
pokemon-explorer/
│── app/
│   ├── page.tsx         # Homepage (Lists Pokémon)
│   ├── pokemon/
│   │   ├── [id]/
│   │   │   ├── page.tsx # Pokémon Detail Page
│── components/          # Reusable UI components
│── lib/                 # API helper functions
│── styles/              # Global styles (Tailwind)
│── public/              # Static assets
│── README.md            # Project Documentation
│── package.json         # Dependencies & scripts
