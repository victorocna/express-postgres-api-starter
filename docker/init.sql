SELECT 'CREATE DATABASE tutorial'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'tutorial')\gexec