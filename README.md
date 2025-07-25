# Creating a full README.md file content and saving it as a downloadable markdown file.

readme_content = """# 🔐 SecureSight - CCTV Monitoring Dashboard

SecureSight is a modern and responsive CCTV incident monitoring dashboard built using **Next.js 15 App Router**, **Tailwind CSS**, and **TypeScript**. It provides security personnel with real-time incident playback, an incident list, a timeline visualization, and an interactive 24-hour video scrubber.

---

## 🚀 Features

- 📌 **Navbar** with navigation items (Dashboard, Cameras, Scenes, Incidents, Users)
- 🎥 **Incident Player** – responsive video player with sample footage
- 📋 **Incident List** – displays recent unresolved incidents
- 🕓 **24-Hour SVG Timeline** – shows incident markers on an hourly ruler
- 🔴 **Draggable Scrubber** – moves across the timeline and syncs video
- 📱 **Fully Responsive** – adapts to all screen sizes

---

## 🧰 Tech Stack

| Tech            | Description                           |
|-----------------|---------------------------------------|
| **Next.js 15**  | React framework with App Router       |
| **Tailwind CSS**| Utility-first CSS for rapid styling   |
| **TypeScript**  | Type-safe development in React        |
| **SVG/Canvas**  | Used for 24-hour timeline rendering   |

---

## 📂 Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx            # Root layout with global styles
│   └── page.tsx              # Home page with player, list & timeline
├── components/
│   ├── Navbar.tsx            # Navigation header
│   ├── IncidentPlayer.tsx    # Video playback component
│   ├── IncidentList.tsx      # List of unresolved incidents
│   └── IncidentTimeline.tsx  # 24-hour SVG timeline with scrubber
public/
└── sample.mp4                # Demo video file (place your own)
\`\`\`

---

## 📦 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/securesight-dashboard.git
cd securesight-dashboard
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`


### 3. Start the Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshot


\`\`\`
preview.JPG
\`\`\`

![Preview](preview.JPG)

---

## 📌 Roadmap / Future Enhancements

- [ ] Add playback speed controls
- [ ] Allow AI tagging of incidents
- [ ] Add a filter panel by camera/date/type
- [ ] Add backend support (Supabase, Firebase, etc.)
- [ ] Integrate WebSockets for live monitoring

---

## 🙋‍♂️ Author

**Your Name**  
🔗 [LinkedIn](https://www.linkedin.com/in/pratiksha-hindule-1372b015a/)  
📧 pratikshahindule48@gmail.com

---

