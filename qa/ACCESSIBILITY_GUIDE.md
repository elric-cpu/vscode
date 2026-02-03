# Accessibility Guide (WCAG 2.1 AA)

## Targets
- WCAG 2.1 AA for public pages.
- Keyboard-only navigation for all flows.
- Screen reader compatibility for forms and nav.

## Automated Rules (Axe)
- Allowed: minor color-contrast warnings during design review.
- Blocker: missing labels, invalid ARIA, keyboard traps, duplicate IDs.
- Review Required: color contrast, heading order, landmark structure.

## Rule Allow/Deny List
- Allowlist: color-contrast (warn only), region, landmark-one-main.
- Denylist: label, aria-required-attr, aria-allowed-attr, duplicate-id, tabindex.

## Remediation Playbook
- Labels: use native label elements or aria-label for inputs.
- Buttons/links: ensure accessible name and role.
- Focus: visible focus ring and no focus loss after actions.
- Forms: announce errors with aria-live or inline text.
- Images: provide meaningful alt text or empty alt for decorative.
- Modals: trap focus, return focus on close.

## Manual Checks
- Tab through page without mouse.
- VoiceOver/NVDA quick scan for headings and landmarks.
- Zoom to 200% and check layout.

## Test Config Notes
- Axe rules are in `feature_enhanced/tests/a11y`.
- Add data-testid attributes for elements with unstable text.
