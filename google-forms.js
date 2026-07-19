/* EOS Laboratories — form backend integration (Google Apps Script)
 *
 * Deployed Apps Script Web App endpoint (live). No server, GitHub Pages compatible.
 * Submissions are appended to the linked Google Spreadsheet by the Apps Script.
 *
 * Payload shapes (formType drives the sheet/branch server-side):
 *   contact  : { formType:'contact',  name, company, email, phone, country, message }
 *   quote    : { formType:'quote',    company, contactPerson, email, phone, productName, productCode, category, quantity, message }
 *   document : { formType:'document', company, contactPerson, email, productName, productCode, documentRequired, message }
 */
window.EOS_API_URL = "https://script.google.com/macros/s/AKfycbzfgvVa-Gdl5MxDD2AWZfp3UVKpyZWih1A4fxWUwzkmNLClQ5972iZCOlBMl-lYUe4Z/exec";

/* Validation helpers ------------------------------------------------------ */
window.EOSValidate = {
  email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim()); },
  phone: function (v) { return /^[+()\-\s\d]{6,20}$/.test(String(v || "").trim()); },
  numeric: function (v) { return v === "" || v == null || /^\d+$/.test(String(v).trim()); },
  required: function (v) { return String(v == null ? "" : v).trim().length > 0; }
};

/* submitToEOS(formData) -> Promise
 * Posts JSON to the Apps Script endpoint. Apps Script web apps do not return
 * CORS headers for a normal fetch, so we send as a "simple" request
 * (text/plain content-type avoids the CORS preflight the endpoint can't answer)
 * and treat a resolved fetch as success. Errors are logged to the console.
 */
window.submitToEOS = function (formData) {
  return fetch(window.EOS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(formData)
  }).then(function (res) {
    return res;
  }).catch(function (err) {
    console.error("[EOS] form submission failed:", err);
    throw err;
  });
};
