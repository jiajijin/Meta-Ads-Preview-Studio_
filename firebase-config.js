/* Firebase web app settings (not secrets; data is protected by firestore.rules). */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCq-Rv3x7YUOuTX2FCG_t_4FK18F382DaE",
  authDomain: "ad-preview-studio.firebaseapp.com",
  projectId: "ad-preview-studio",
  storageBucket: "ad-preview-studio.firebasestorage.app",
  messagingSenderId: "309313912684",
  appId: "1:309313912684:web:99f52e9c42805b538ffd49"
};
/* Emails that can see the Feedback tab (lowercase). Also set in firestore.rules. */
window.ADMIN_EMAILS = ["jinjiaji20040228@gmail.com"];
/* true: visitors must sign in (shared view links still open without signing in). */
window.REQUIRE_SIGN_IN = true;
