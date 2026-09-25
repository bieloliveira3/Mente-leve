const countdownScript = `
(function () {
  var KEY = "mente-leve-offer-timer";
  var DAY = 24 * 60 * 60 * 1000;
  function localDay(date) {
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }
  function readDeadline() {
    var today = localDay(new Date());
    var now = Date.now();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var stored = JSON.parse(raw);
        if (stored.day === today && stored.endsAt > now) return stored.endsAt;
      }
    } catch (error) {}
    var fresh = { day: today, endsAt: now + DAY };
    try { localStorage.setItem(KEY, JSON.stringify(fresh)); } catch (error) {}
    return fresh.endsAt;
  }
  function pad(value) { return String(value).padStart(2, "0"); }
  function tick() {
    var total = Math.max(0, Math.floor((readDeadline() - Date.now()) / 1000));
    var text = pad(Math.floor(total / 3600)) + ":" + pad(Math.floor((total % 3600) / 60)) + ":" + pad(total % 60);
    var header = document.getElementById("offer-countdown");
    var urgency = document.getElementById("urgency-countdown");
    if (header) header.textContent = text;
    if (urgency) urgency.textContent = text;
  }
  tick();
  document.addEventListener("DOMContentLoaded", tick);
  setInterval(tick, 1000);
})();
`;

export function OfferCountdownBar() {
  return (
    <div className="bg-primary px-3 py-1.5 text-center text-xs font-semibold text-primary-foreground sm:text-sm">
      A oferta acaba em{" "}
      <span id="offer-countdown" className="tabular-nums">
        24:00:00
      </span>
      <script dangerouslySetInnerHTML={{ __html: countdownScript }} />
    </div>
  );
}
