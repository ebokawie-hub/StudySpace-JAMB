# StudySpace JAMB 2027 — Offline-first PWA

## What's included
- In-app syllabus checklists for 14 subjects, including eight recently added subjects, History and Home Economics
- Local progress persistence in browser storage
- Study planner and personal notes
- Small starter CBT practice bank
- Export/import JSON backup for moving progress between devices
- PWA manifest and service worker for offline app shell

## Run locally
A PWA service worker requires localhost or HTTPS; opening index.html directly as a file will not enable offline installation.
1. Install Python 3 if needed.
2. In this folder run: `python -m http.server 8000`
3. Open `http://localhost:8000` in Chrome or Edge.

## Install
- Android Chrome: open the hosted HTTPS address, use the browser menu, choose **Install app** or **Add to Home screen**.
- Laptop Chrome/Edge: open the hosted HTTPS address and use the install icon in the address bar or browser menu.

## Put it online
Upload the contents of this folder to a static HTTPS host (for example, GitHub Pages, Netlify, or Cloudflare Pages). Keep all files in the same folder. The app then works online and its cached shell/data work offline after the first successful load.

## Progress and cross-device use
The app saves progress, notes and tasks locally on the current browser/device. Use **⇧** in the top bar to export a JSON backup; choose import to restore it on another device. This is a manual transfer, not automatic cloud synchronisation. Automatic sync requires a cloud database and account/configuration, which are intentionally not preconfigured.

## Important syllabus note
The syllabus content is a structured checklist summary of the syllabus currently published on JAMB IBASS when this starter package was prepared. It is not a JAMB-issued 2027 publication. Re-check the official IBASS portal and prescribed Use of English text for any 2027 updates:
https://ibass.jamb.gov.ng/e-syllabus

## CBT note
The included question bank is a small sample for demonstrating the practice feature. It is not a complete official JAMB past-question bank.


## Subject selection update
- Choose Use of English plus three other UTME subjects from the My four subjects screen.
- The app retains the original Mathematics, Physics, Chemistry and Use of English topic checklists and progress keys.
- Subjects without an in-app checklist are labelled as not yet added; the app does not send students to an external syllabus page. Topic-by-topic local checklists and CBT questions for those subjects are still pending.
- Subject groups are browsing aids only. Confirm the required combination for your course and institution with the JAMB IBASS eligibility checker: https://eligibility.jamb.gov.ng/.
Syllabus update: History (42 topics), Home Economics (25 topics), Agriculture (46 topics), Biology (24 topics), Economics (23 topics) and French (4 topics) are included in the in-app checklist, alongside the earlier subject checklists. Seven selectable subjects still need their syllabus checklists added. Existing saved progress remains stored under the same local storage key.
