# Ad Preview Studio: put it online (about 20 minutes)

You need a free Google account. Firebase's free plan is enough to start.

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and click **Add project**. Name it, skip Analytics.
2. **Build > Firestore Database > Create database**. Choose production mode and a region near your users.
3. **Build > Authentication > Get started**. On **Sign-in method** turn on **Google** and **Email/Password**.
   - **Apple** (optional): needs a paid Apple Developer account. Turn it on and follow Firebase's prompts. Hide the Apple button by deleting the `auap` button line in `index.html` if you skip it.
4. **Project settings (gear) > Your apps > Web (</>)**. Register an app and copy the `firebaseConfig` values.

## 2. Fill in the config
- Open `firebase-config.js`. Paste the four values, and put your own email in `ADMIN_EMAILS`.
- Open `firestore.rules`. Replace `you@example.com` in `isAdmin()` with the same email(s).

## 3. Deploy
```
npm install -g firebase-tools
firebase login
firebase use --add        # pick your project
firebase deploy
```
Firebase prints your site address (`https://YOUR_PROJECT.web.app`).

## 4. Check it
1. Open the address. You should see the sign-in screen. Create an account, then add your first ad account.
2. Save a page, create a view link, and open it in a private window. It should open without signing in.
3. Authentication > Settings > **Authorized domains**: add your own domain if you connect one.

## Notes
- Ad account details lock for 30 days after saving (enforced in `firestore.rules`).
- Edit links need sign-in. View links are public to anyone who has the link.
- Instagram login is not included. It needs a Meta developer app and review; the tool uses a typed handle and logo instead.
