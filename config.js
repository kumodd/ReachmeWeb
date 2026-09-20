/*
 * MyReach site configuration
 *
 * Edit the values below once. The page reads them for every app, WhatsApp,
 * and contact link, so you do not need to edit the HTML for those details.
 */
const MYREACH_CONFIG = {
  // Place the APK in this path. Paths are relative to index.html.
  appLink: 'assets/myreach-tv.apk',
  appFileName: 'myreach-tv.apk',

  // WhatsApp number with country code, digits only. Example: 919876543210
  whatsappNumber: '9135086955',

  // Contact email used by the email fallback in the contact section.
  contactEmail: 'kumod353@gmail.com',

  // Message used when someone clicks a direct WhatsApp button.
  whatsappDefaultMessage: 'Hi MyReach, I would like to know more. about MyReach',

  // Optional display details for the contact section.
  contactName: 'MyReach team',
  contactAvailability: 'Usually replies within a few hours'
};

export default MYREACH_CONFIG;
