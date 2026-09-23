/**
 * Safe external navigation helper that works reliably inside iframes and sandboxes
 * without triggering window.open popup restrictions.
 */
export const openSafeLink = (url: string) => {
  try {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch {
    window.location.href = url;
  }
};
