import { ctaAttributes } from "@/lib/analytics/definitions";
import { supportWhatsApp } from "@/lib/content";

const placeScript = `
(function () {
  function overlaps(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }
  function place() {
    var button = document.getElementById("whatsapp-support");
    if (!button) return;
    var gap = 14;
    var bar = document.getElementById("checkout-bar");
    var bottom = gap;
    if (bar) {
      var barBox = bar.getBoundingClientRect();
      if (barBox.top < window.innerHeight - 8) bottom = Math.round(window.innerHeight - barBox.top) + gap;
    }
    button.style.right = "12px";
    button.style.left = "auto";
    button.style.top = "auto";
    button.style.bottom = bottom + "px";
    var blockers = document.querySelectorAll("a, button");
    for (var step = 0; step < 6; step++) {
      var box = button.getBoundingClientRect();
      var blockTop = null;
      for (var i = 0; i < blockers.length; i++) {
        var el = blockers[i];
        if (el === button) continue;
        var rect = el.getBoundingClientRect();
        if (rect.width < 8 || rect.height < 8) continue;
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        if (overlaps(box, rect)) blockTop = rect.top;
      }
      if (blockTop == null) break;
      bottom += Math.round(box.bottom - blockTop) + gap;
      if (bottom > window.innerHeight * 0.72) break;
      button.style.bottom = bottom + "px";
    }
  }
  place();
  document.addEventListener("DOMContentLoaded", place);
  window.addEventListener("scroll", place, { passive: true });
  window.addEventListener("resize", place);
  setInterval(place, 400);
})();
`;

export function WhatsAppSupport() {
  return (
    <>
      <a
        {...ctaAttributes("whatsapp_support")}
        id="whatsapp-support"
        href={supportWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Suporte no WhatsApp"
        className="fixed right-3 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.2 9.2 0 1 1 12 20.2zm5.1-6.9c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.4c-.1-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4.1c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
      <script dangerouslySetInnerHTML={{ __html: placeScript }} />
    </>
  );
}
