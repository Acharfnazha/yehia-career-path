# Yehia's Career Path

**Student:** Achraf Nazha
**Course:** TechTalks · Ultimate Next.js 16 Course · Assignment 1 (Routing System)
**Branch:** `assignment-1-routing`

A small Next.js 16 website that turns Yehia's scattered job-search ideas into a path he can follow. Yehia is a Computer Science graduate who wants a first developer role within two months. The site keeps that goal in front of him, breaks it into a three-stage plan, lists opportunities he can compare, and gives him a dashboard to track his applications.

The project is about the App Router: six pages, a root layout, a nested dashboard layout, `Link` navigation, and one dynamic route. All data is local sample data. There is no database, authentication, or application form.

## Routes

| Route | What it shows |
| --- | --- |
| `/` | Introduces Yehia and his two-month goal, with links to the plan and the opportunities |
| `/plan` | Three milestones (Prepare, Practice, Apply), each with a description and practical actions |
| `/opportunities` | Cards for the three sample opportunities, each with a **View opportunity** link |
| `/opportunities/[id]` | Details of one opportunity, such as `/opportunities/1`. An unknown ID like `/opportunities/999` shows a friendly "Opportunity not found" message |
| `/dashboard` | Number of applications and an encouraging message |
| `/dashboard/applications` | The list of sample applications with company and status |

## Project structure

```
app/
  layout.js                  Root layout: Google Font + global navigation
  page.js                    /
  plan/page.js               /plan
  opportunities/
    page.js                  /opportunities
    [id]/page.js             /opportunities/:id (dynamic route)
    [id]/loading.js          Fallback shown while the dynamic page loads
  dashboard/
    layout.js                Nested layout: Overview / Applications navigation
    page.js                  /dashboard
    applications/page.js     /dashboard/applications
data/
  opportunities.js           Starter opportunity data
  applications.js            Sample applications (the dashboard total is calculated from this list)
```

## Run it locally

You need Node.js 20.9 or newer.

```bash
git clone https://github.com/Acharfnazha/yehia-career-path.git
cd yehia-career-path
git switch assignment-1-routing
npm install
npm run dev
```

Then open http://localhost:3000. To check the production build, run `npm run build`.

## My explanations

### Why did you use `await` when reading params?

In Next.js 15 and 16, `params` is a Promise, not a plain object. Next.js passes it this way so it can start rendering the page before the URL values are needed, which lets parts of the page be prerendered or streamed. To get the actual `id`, the page component is an `async` function and I `await params` first, then use the value. If I read `params.id` directly, I would get `undefined` because I would be reading a property of the Promise, not of the object it resolves to.

### Why is the route ID a string?

The ID comes from the URL, and everything in a URL path is text. When Yehia opens `/opportunities/2`, Next.js only knows that the `[id]` segment contains the characters `"2"`; it doesn't guess whether that should be a number. That is also why the IDs in `data/opportunities.js` are strings (`id: "1"`), so I can compare them directly with `item.id === id`. If the data used numbers, `"2" === 2` would be `false` and no opportunity would ever be found, unless I converted the value with `Number(id)` first.

### What belongs in the dashboard layout, and what belongs in each dashboard page?

The layout holds what both dashboard pages share and what should stay on screen while Yehia moves between them: the "Dashboard" heading and the Overview / Applications navigation. A layout wraps its pages through `children` and is not re-rendered when you switch between pages in the same segment, so the navigation stays put. Each page holds only its own content: `/dashboard` shows the summary (total number of applications and an encouraging message), and `/dashboard/applications` shows the full list. Both pages import the same `applications` array, so the total always matches the list.

## Notes

- All pages are Server Components. Nothing in this assignment needs `useState` or `"use client"`.
- The font is Plus Jakarta Sans, loaded with `next/font/google` in the root layout.
- The project keeps the `create-next-app@16` defaults, including Cache Components. Because of that, the dynamic page uses `generateStaticParams` to prerender IDs 1–3 at build time, and `loading.js` gives it a fallback. Unknown IDs such as `999` are still rendered on request and show the "not found" message.
- The companies, roles, and applications are fictional and only exist for this assignment.
