import { META_PIXEL_ID } from "@/lib/meta-pixel";

const pixelScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
document.addEventListener('click', function (event) {
  var node = event.target && event.target.nodeType === 1 ? event.target : event.target && event.target.parentElement;
  if (!node || !node.closest) return;
  var link = node.closest('a');
  if (!link) return;
  var href = link.getAttribute('href') || '';
  if (href.indexOf('pay.cakto.com.br') === -1) return;
  if (window.__metaIc) return;
  window.__metaIc = true;
  setTimeout(function () { window.__metaIc = false; }, 0);
  fbq('track', 'InitiateCheckout');
}, true);
`;

export function MetaPixel() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: pixelScript }} />
      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
