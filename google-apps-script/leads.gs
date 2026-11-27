/**
 * SKV website leads → Google Sheet.
 *
 * Paste this into the Google Sheet's Apps Script editor (Extensions → Apps
 * Script), set SECRET to the same value as LEADS_WEBHOOK_SECRET on the
 * website's server, then Deploy → New deployment → Web app (Execute as: Me,
 * Who has access: Anyone). Put the deployment's /exec URL in
 * LEADS_WEBHOOK_URL. Full steps: google-apps-script/README.md.
 *
 * Every enquiry submitted on the website is added as a new row on the
 * "Leads" tab (created with headings on the first lead). The "Status" column
 * starts as "New" for the sales team to update.
 */

const SECRET = "PASTE-THE-SAME-SECRET-AS-THE-WEBSITE";
const SHEET_NAME = "Leads";
const TIMEZONE = "Asia/Kolkata";

const HEADERS = [
  "Received (IST)",
  "Name",
  "Company",
  "Phone",
  "Email",
  "Service",
  "Location",
  "Requirements",
  "Sent via",
  "Page",
  "Status",
];
const FIELDS = ["name", "company", "phone", "email", "service", "location", "message", "channel", "page"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents);
    if (!SECRET || body.secret !== SECRET) return reply({ ok: false, error: "unauthorised" });

    const sheet = leadsSheet();
    const lead = body.lead || {};
    const received = Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm");
    sheet.appendRow([received].concat(FIELDS.map((k) => cell(lead[k]))).concat(["New"]));
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Opening the /exec URL in a browser shows this, which confirms the deployment works. */
function doGet() {
  return reply({ ok: true, service: "SKV leads" });
}

function leadsSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#e5f3d7");
    sheet.setColumnWidth(8, 360);
  }
  return sheet;
}

/** Plain text only: a leading = + - @ would otherwise run as a formula. */
function cell(value) {
  const text = String(value == null ? "" : value).slice(0, 2000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
