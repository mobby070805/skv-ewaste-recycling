# Website leads → Google Sheet

Every enquiry submitted on the website's contact form is added as a new row in a Google Sheet. The website saves the row first, then opens the visitor's email app or WhatsApp as before, so a lead is recorded even if the visitor never sends the message.

Setup takes about 10 minutes and is done once, using the Google account that should own the leads.

## 1. Create the sheet

1. Go to [sheets.new](https://sheets.new) and name it, for example **SKV Website Leads**.
2. Share it with anyone on the team who should see leads (Share button, top right).

## 2. Add the script

1. In the sheet, open **Extensions → Apps Script**.
2. Delete everything in the editor and paste in the whole of [`leads.gs`](leads.gs).
3. Make up a long random password for the secret, or generate one in a terminal with `openssl rand -hex 24`.
4. Replace `PASTE-THE-SAME-SECRET-AS-THE-WEBSITE` (line 16) with it, keeping the quotes.
5. Click **Save** (the disk icon).

## 3. Publish the script as a web app

1. Click **Deploy → New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
   - "Anyone" only means the website can reach the script. Without the secret, the script refuses to add rows, and the sheet itself stays private.
4. Click **Deploy**. When Google asks, authorise access with the same account. If you see "Google hasn't verified this app", click **Advanced → Go to (project) (unsafe)**: it's your own script.
5. Copy the **Web app URL**. It ends in `/exec`.
6. To check it, open that URL in a browser. You should see `{"ok":true,"service":"SKV leads"}`.

## 4. Connect the website

Add two environment variables where the website is hosted (Railway → the SKV service → **Variables**), then redeploy:

| Variable | Value |
|---|---|
| `LEADS_WEBHOOK_URL` | The Web app URL from step 3 (ends in `/exec`) |
| `LEADS_WEBHOOK_SECRET` | The same secret you put in the script |

To run the site locally with leads switched on, put the same two lines in a file named `.env.local` in the project folder. It's git-ignored, so it is never committed.

## 5. Test

Submit the contact form on the live site. Within a few seconds a **Leads** tab appears in the sheet with headings and your test row.

| Column | Contents |
|---|---|
| Received (IST) | Date and time, India time |
| Name, Company, Phone, Email, Service, Location, Requirements | What the visitor entered |
| Sent via | Email or WhatsApp (the button they pressed) |
| Page | The page the form was on |
| Status | Starts as "New"; change it as you follow up (e.g. Contacted, Quoted, Won, Lost) |

## Good to know

- **Changing the script later:** use **Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. This keeps the same URL. A "New deployment" would give a new URL that you'd have to put into Railway again.
- **Changing the secret:** update it in both the script (then redeploy as above) and Railway.
- **Spam protection:** the form has a hidden field that only bots fill in, and those submissions are dropped silently. Each visitor can submit at most 5 times in 10 minutes.
- **If rows stop appearing:** the form still opens email/WhatsApp, so no enquiry is lost. Check the Railway logs for lines starting with `[leads]`, and open the `/exec` URL to make sure the script is still deployed.
