/* Simple interactivity: set aria-current, share + add-to-calendar helpers */
const setActive = () => {
  const path = location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('nav a[data-file]').forEach(a => {
    if (a.getAttribute('data-file') === path) a.setAttribute('aria-current','page')
  })
}
setActive()

// Calendar helpers
function buildICS({uid, title, start, end, tz='America/Indiana/Indianapolis', location='', url='', description=''}) {
  // start/end: 'YYYYMMDDTHHMMSS'
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//KAA Improved//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${start}
DTSTART;TZID=${tz}:${start}
DTEND;TZID=${tz}:${end}
SUMMARY:${title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${location}
URL:${url}
END:VEVENT
END:VCALENDAR`
}

function downloadICS(opts, filename='event.ics') {
  const blob = new Blob([buildICS(opts)], {type:'text/calendar;charset=utf-8'})
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  document.body.appendChild(a); a.click(); a.remove()
}

// Share helpers
function share(url, title, text) {
  if (navigator.share) {
    navigator.share({ title, text, url })
  } else {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
  }
}

// Expose globally
window.KAA = { downloadICS, share }
