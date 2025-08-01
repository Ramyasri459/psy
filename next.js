const res = await fetch('/api/events');
const events = await res.json();
// Render event cards based on event.tier_requirement
