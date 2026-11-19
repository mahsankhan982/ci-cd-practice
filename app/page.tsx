
export default function Home() {
  const appName = process.env.MY_APP_NAME;

  return (
    <main>
      <h1>{appName}</h1>

      <h2>My First Successful CI Test!</h2>

      <p>
        My code is pushed to GitHub,
        checked by GitHub Actions,
        and deployed automatically by Vercel.
      </p>
    </main>
  );
}
