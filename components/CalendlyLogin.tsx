const CLIENT_ID = process.env.NEXT_PUBLIC_CALENDLY_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_CALENDLY_REDIRECT_URI;

export default function CalendlyLogin() {
  const loginUrl = `https://auth.calendly.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;

  return (
    <a href={loginUrl} className="px-4 py-2 bg-blue-600 text-white rounded-md">
      Se connecter à Calendly
    </a>
  );
}
