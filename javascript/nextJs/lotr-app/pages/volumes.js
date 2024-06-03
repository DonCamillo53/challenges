import Head from "next/head";
import Link from "next/link";
import data from "../resources/lib/data";

export function Volumes() {
  const volumes = data;
  return (
    <>
      <Head>
        <title>Volumes</title>
      </Head>
      <main>
        {volumes.map((volume) => {
          return (
            <Link href={`./volumes/${volume.slug}`} key={volume.slug}>
              <button>{volume.name}</button>
            </Link>
          );
        })}
      </main>
    </>
  );
}
