# Dr. Khalid Khan Zadran — Portfolio

A responsive React + Vite portfolio with separate pages for Home, About, Qualifications, Services, Gallery, Education & Documents, Contact, and an online appointment request form. It includes an English/Dari toggle and Framer Motion page transitions.

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. In the terminal, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite.

## Important before publishing
- Verify all biography and qualification details with the doctor before publishing. The supplied doctor image URL has been used in place of the generic portrait; verify it is the correct person before publishing.
- The Dari toggle translates navigation and common labels and sets RTL direction. Review all page copy in Dari before public launch.
- The Education & Documents page contains empty placeholders only; add real approved files later.
- Replace any externally hosted images with approved, properly licensed images.
- The appointment form is a front-end demonstration: it validates fields and opens an email draft through the visitor's email app. For real online submissions, connect a secure backend or form service and configure it before launch.
- Verify the clinic's exact address and official Facebook URL before adding a map or social link.

## Deploy to Vercel
Push the project to a public GitHub repository, import it at Vercel, keep the default Vite settings, and deploy. Build command: `npm run build`; output directory: `dist`.


## Motion effects
This project uses React Bits-inspired animation patterns in editable source: blur-to-clear hero text, staggered hero entrance, scroll-triggered content reveals, animated service cards, and a subtle spotlight hover effect. These effects are implemented with the project's existing Framer Motion dependency and CSS, keeping the medical portfolio lightweight and responsive. See [React Bits](https://www.reactbits.dev/) for the component library and examples.
