# Ad Preview Studio

A free, browser-based tool that shows how a Meta (Facebook / Instagram) ad will look in each placement before it goes live. Upload images, videos or carousels, type your copy, headline, CTA and link, and preview the ad across Feed, Stories, Reels and more. It includes an instant-form preview, sign-in, saved pages, and share links.

It is a plain static website (one `index.html`, no build step). Sign-in and saved pages use a free Firebase project.

## What you can do
- Preview one ad across Facebook, Instagram, Messenger and Audience Network placements
- Add up to 5 variants each of primary text, headline and description, and download all copies as a Word file
- Set up your own ad account (logo, Facebook page name, Instagram handle)
- Save pages, and share them with a view link or an edit link
- Switch to the Instant form tab to preview lead forms

## Run your own copy (about 15 minutes, free)

You need a Google account and a GitHub account.

**1. Get the files.** Click **Fork** at the top of this page.

**2. Create a Firebase project** at https://console.firebase.google.com
- **Add project**, name it, and skip Analytics.
- **Authentication > Get started**: turn on **Google** and **Email/Password**.
- **Firestore Database > Create database**: pick a location and **production mode**.
- **Firestore > Rules**: replace the contents with the text of `firestore.rules` from this repo, then **Publish**.
- **Project settings > Your apps > Web (`</>`)**: register an app (leave Hosting unchecked) and copy the `firebaseConfig` values.

**3. Add your settings.** In your fork, open `firebase-config.js`, click the pencil icon, replace the values with yours, and commit. These values are not secrets; the database rules protect your data.

**4. Publish it.** Pick one:
- **Vercel:** at https://vercel.com/new import your fork and click **Deploy** (no settings needed).
- **GitHub Pages:** in your fork go to **Settings > Pages**, choose the `main` branch, and save.

**5. Allow your address for sign-in.** In Firebase, **Authentication > Settings > Authorized domains > Add domain**. Enter your site address without `https://` (for example `yourname.vercel.app` or `yourname.github.io`).

Open your site, create an account, and set up your first ad account.

## Optional
- **Feedback tab for yourself:** sign in once, copy your User UID from Firebase **Authentication > Users**, then in Firestore create a collection `admins` with a document whose ID is that UID.
- **Let visitors try it without signing in:** set `window.REQUIRE_SIGN_IN = false` in `firebase-config.js`. Saving and sharing still need an account.
- **Apple sign-in:** needs a paid Apple Developer account; enable it in Authentication if you have one.

## Notes
- Ad account details lock for 30 days after saving.
- Edit links need sign-in. View links open for anyone who has the link.
- Previews are an approximation of Meta's layouts and may differ slightly from the real Ads Manager.
- Not affiliated with or endorsed by Meta.
