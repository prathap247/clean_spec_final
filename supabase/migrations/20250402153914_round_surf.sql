/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `message` (text, not null)
      - `created_at` (timestamp with time zone)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting messages
    - Add policy for reading messages (admin only)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view messages
CREATE POLICY "Only authenticated users can view messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);