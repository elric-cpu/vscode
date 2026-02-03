# QA Checklist

## Functionality
- [ ] Home page loads without console errors.
- [ ] Global navigation links route correctly (no broken links).
- [ ] Footer links, phone/email links, and social links resolve correctly.
- [ ] Contact form fields validate (required, format) and submit.
- [ ] Service pages render key sections and CTAs.
- [ ] Resource pages render long-form content and calculators.
- [ ] Blog index and blog post routes render.
- [ ] Dynamic service area route renders for valid params.
- [ ] 404 handling verified (unknown route shows friendly fallback or 404).
- [ ] Redirects verified (http->https, trailing slash if used).
- [ ] Media assets load (images, icons, videos) with correct aspect ratio.
- [ ] Forms prevent duplicate submits and show success/failure states.
- [ ] Auth-related elements behave (if present): login/logout, protected pages.
- [ ] Cookies/localStorage used only as expected; consent banner works.
- [ ] API integrations return expected data (real or mocked).

## Usability / UX
- [ ] Visual hierarchy and CTAs are clear on key pages.
- [ ] No clipped text or overflow at breakpoints.
- [ ] Interactive elements are discoverable and have hover/focus states.
- [ ] Forms have inline error messages and helpful hints.
- [ ] Loading states are visible and not blocking indefinitely.

## Compatibility / Responsive
- [ ] Chrome, Firefox, Safari, Edge (latest 2 versions) pass smoke.
- [ ] Breakpoints: 360, 768, 1024, 1280, 1440 verified.
- [ ] Touch targets are usable on mobile.
- [ ] Landscape mobile and tablet layouts look intentional.

## Performance
- [ ] LCP <= 2.5s (p75) on key pages.
- [ ] CLS <= 0.1 and no layout jank on load.
- [ ] TBT <= 200ms or acceptable for content heavy pages.
- [ ] Lighthouse score >= 80 for Performance on key pages.
- [ ] Images are optimized and served in modern formats if possible.

## Accessibility (WCAG 2.1 AA)
- [ ] Page has one H1 and logical heading order.
- [ ] All inputs have accessible labels.
- [ ] Color contrast meets AA for text.
- [ ] Keyboard navigation is possible for all interactive elements.
- [ ] Focus visible and not trapped.
- [ ] Landmarks (header/main/footer) present.
- [ ] Forms have accessible error messaging.

## Security Baseline
- [ ] No mixed content on HTTPS.
- [ ] CSP headers present (or documented exceptions).
- [ ] ZAP baseline scan clean or triaged.
- [ ] Dependencies have no known critical vulnerabilities.
- [ ] No PII in logs or error traces on staging.
