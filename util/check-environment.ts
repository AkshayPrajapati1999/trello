export default function checkEnvironment(): string {
  const envUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://trello-appunik-demo-z3hn3.ondigitalocean.app';

  return envUrl;
}
