/* Paste your Firebase web app settings here (Firebase console > Project settings > Your apps).
   These values are not secrets; your data is protected by firestore.rules. */
window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  appId: "YOUR_APP_ID"
};
/* Emails that can see the Feedback tab (lowercase). Also add them in firestore.rules. */
window.ADMIN_EMAILS = ["jinjiaji20040228@gmail.com"];
/* true: visitors must sign in (shared view links still open without signing in).
   false: visitors can try the tool without signing in; saving and sharing need sign-in. */
window.REQUIRE_SIGN_IN = true;
