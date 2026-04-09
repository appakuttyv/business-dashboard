# 🚀 Vortex Business Dashboard: Project Showcase

The **Vortex Business Dashboard** is a premium SaaS administration interface built with **Angular (Standalone)**. It features a modern, responsive design based on the **TailAdmin** Indigo/Slate palette, offering high-fidelity data visualization and complex user interaction patterns.

---

## 🏗️ Technical Architecture

We implemented a **Modular Core/Shared/Features** architecture to ensure maximum scalability and maintainability.

### Key Technical Modules:
- **Core Library**:
  - `ThemeService`: Handles global indigo/slate palette switching using Angular Signals.
  - `NavigationService`: Manages a data-driven sidebar supporting dynamic routes and badges.
- **Shared Primitives**:
  - Reusable `Card`, `Breadcrumb`, and `Chart` mockup components.
- **Business Features**:
  - **Dashboards**: Multiple specialized views (e-Commerce, Analytics, Marketing, CRM).
  - **Communication**: Full Inbox and Real-time Chat (Messages) mockups.
  - **Utilities**: Advanced UI showcase (Tabs, Accordion, Progress).

---

## 🛰️ Project Structural Deployment

We have successfully initialized and synchronized the full project planetary structure:

```bash
business-dashboard/
│── frontend/        # 🚀 Angular Premium UI
│── backend/         # 🛰️ Python API Module
│── assets/          # 🌌 Static Resources
│── docs/            # 📜 Documentation Orbit
│── .github/         # ⚙️ CI/CD (GitHub Pages Deploy)
└── README.md        # 🗺️ Mission Manual
```

---

## ⚙️ Automated CI/CD

The project features a [GitHub Actions Workflow](.github/workflows/deploy.yml) that automatically:
1. Installs Angular dependencies.
2. Performs a production build with proper base-href.
3. Fixes SPA routing (index.html -> 404.html).
4. Deploys to **GitHub Pages**.

---

**Author:** Appakutty V
**Design Palette:** Indigo (#3C50E0) / Slate (#1C2434)
**Status:** ✅ Mission Complete
