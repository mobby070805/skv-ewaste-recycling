# Image sources

All photographs on the homepage are temporary, illustrative stock images from
Unsplash (free Unsplash License). **None of them show SKV's own facilities,
staff or vehicles.** The Infrastructure & operations section notes that its photography is representative.

The images on SKV's current website gallery were reviewed and are not used:
they are manufacturer product shots, third-party stock and AI-generated
composites, not photographs of SKV operations.

To replace a photo with genuine SKV photography, overwrite the file in
`src/assets/images/` keeping the same name (any aspect ratio works; images
are cropped with `object-fit: cover`), then update its `alt` text.

| File (src/assets/images) | Used in | Unsplash source |
|---|---|---|
| hero-circuit-boards.webp | Hero | Cropped from the client-approved hero design reference (supplied by the client, Nov 2026); not an Unsplash photo. Replace with an original high-resolution file when available. |
| process-hall.webp | Infrastructure & operations | photo-1496247749665-49cf5b1022e9 |
| alt-boards-pile.webp | What we recycle | photo-1746013426060-adbf530817c3 |
| handle-laptops.webp | Core services — IT Asset Recovery | photo-1654782360217-158d9b8aab89 |
| handle-computers.webp | What we recycle | photo-1648127549632-9232f0c36549 |
| handle-servers.webp | What we recycle | photo-1695668548342-c0c1ad479aee |
| ops-boards.webp | Core services — E-Waste Recycling | photo-1630163219451-13a7cff121d0 |
| handle-components.webp | Not used | photo-1717667745934-53091623e8ee |
| handle-batteries.webp | Not used | photo-1637773339519-679b29199c18 |
| handle-printers.webp | What we recycle | photo-1650094980833-7373de26feb6 |
| handle-network.webp | What we recycle | photo-1783683783819-e6cb806bba69 |
| handle-infrastructure.webp | What we recycle | photo-1558494949-ef010cbdcc31 |
| hero-ewaste-scrap.webp | Complete services | photo-1582748298043-0c0d31aa506e |
| service-office.webp | Not used | photo-1497366811353-6870744d04b2 |
| service-hdd.webp | Core services — HDD Degaussing | photo-1597852074816-d933c7d2b988 |
| svc-blancco.webp | Not used | photo-1577375729152-4c8b5fcda381 |
| svc-sanitization.webp | Process — Dismantling | photo-1721333088976-33173bdc59a2 |
| itam-workstations.webp | Core services — IT Office Demolition | photo-1748256622734-92241ae7b43f |
| svc-buyback.webp | IT asset management (inset) | photo-1721333089351-353c85f2b34a |
| itam-server-tech.webp | IT asset management | photo-1753964724380-2c5ae02512a8 |
| process-collection.webp | Process — Collection | photo-1740914994657-f1cdffdc418e |
| about-technicians.webp | Not used | photo-1742416180133-cd9ab0816259 |
| process-segregation.webp | Process — Segregation | photo-1612965110667-4175024b0dcc |
| sustain-copper.webp | Process — Recycling & Recovery | photo-1753771145085-d71e89c23092 |
| data-hdd-dark.webp | Data destruction | photo-1581725645226-92ad3b4c16d8 |
| data-hdd-open.webp | Not used | photo-1602493054445-4a0b4fa7fdd6 |
| gallery-recovered.webp | Infrastructure & operations | photo-1528323273322-d81458248d40 |
| ind-corporate.webp | Industries | photo-1531973576160-7125cd663d86 |
| ind-itpark.webp | Industries | photo-1602419521193-e62f11155a17 |
| ind-bank.webp | Industries | photo-1763917009545-522ae5263954 |
| ind-manufacturing.webp | Industries | photo-1717386255773-1e3037c81788 |
| ind-datacentre.webp | Industries | photo-1578410169170-021c8c9c1554 |
| ind-education.webp | Industries | photo-1576495199011-eb94736d05d6 |
| ind-government.webp | Industries | photo-1760872645959-98d5fdb49287 |
| gallery-collection.webp | About | photo-1589792923962-537704632910 |
| gallery-sorting.webp | Infrastructure & operations | photo-1606718220923-fcb2abd9a778 |
| cta-yard.webp | Infrastructure & operations | photo-1722695694560-f452b0919d3a |
| gallery-dismantling.webp | Not used | photo-1602469011629-37c6414c006a |
| ops-conveyor.webp | Infrastructure & operations | photo-1684695747561-9372850cf165 |
| gallery-it.webp | Track record banner | photo-1584169417032-d34e8d805e8b |
| ops-shredded.webp | Not used | photo-1775673301786-aff05a381744 |
| ops-team.webp | Why SKV | photo-1772299121503-cd62a57e3a26 |
| cta-rack.webp | Final enquiry banner | photo-1639066648921-82d4500abf1a |

Unused, kept for later: `ind-it.webp` (photo-1629904853716-f0bc54eea481).
Rows marked "Not used" are also spare.

Full URLs take the form `https://images.unsplash.com/<id>`.

`skv-logo.webp` and `src/app/icon.png` are derived from the logo on
skvewasterecycling.com.

`cert-iso14001.webp`, `cert-iso9001.webp`, `cert-r2.webp` and `cert-tnpcb.webp`
(About section certification row) are the certification logos shown on
skvewasterecycling.com (`/static/img/`), downloaded 2026-11-21.

`pickup-team.webp` (Why choose SKV) was supplied by the client on 2026-11-21 as a
style reference; the background was lightened to pure white. It is an
illustration, not a photo of SKV staff.

`about-ewaste-woman.webp` (About section) was supplied by the client on 2026-11-21
(same image as e-waste-1.png on skvewasterecycling.com), cropped to the figure.
`gallery-collection.webp` is no longer used on the homepage.

`hero-skv-recycle.webp` (hero) is client-supplied SKV artwork, approved 2026-11-21.
`hero-circuit-boards.webp` is no longer used.

2026-11-21: `process-step-1..4`, `why-visual`, `why-leaf` and `about-ewaste-woman` were
cut from client mockups at low resolution and upscaled x4 with OpenCV EDSR, then
saved as WebP q95. Replace with the client originals if they become available.
Served images: AVIF/WebP via next/image at quality 85 (next.config.ts).
