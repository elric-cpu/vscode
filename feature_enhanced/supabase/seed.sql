-- Demo seed data for local development (idempotent).
-- Uses auth.users to satisfy FK constraints.

insert into auth.users (
  id,
  instance_id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_user_meta_data
)
values (
  '11111111-1111-1111-1111-111111111111',
  '00000000-0000-0000-0000-000000000000',
  'authenticated',
  'authenticated',
  'client@example.com',
  crypt('change-me', gen_salt('bf')),
  now(),
  '{"role":"client","full_name":"Client Example"}'
)
on conflict do nothing;

insert into public.client_profiles (
  id, full_name, phone, address, city, state, zip
)
values (
  '11111111-1111-1111-1111-111111111111',
  'Client Example',
  '+1 (555) 000-0000',
  '123 Main St',
  'Salem',
  'OR',
  '97301'
)
on conflict do nothing;
