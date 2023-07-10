import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="text-center">Ismal Zikri</h1>
          <p>
            <b>Software engineer, Frontend</b>
          </p>
        </div>
        <div className="mt-3">
          <span>Find me on</span>
          <div className="flex items-center justify-center gap-2 mt-2">
            <a href="https://github.com/ismalzikri" target="_blank">
              <Image
                src="/icons/github-icon.svg"
                width={32}
                height={32}
                alt="github-icon-svg"
              />
            </a>
            <a href="https://twitter.com/ZikriIsmal" target="_blank">
              <Image
                src="/icons/twitter-icon.gif"
                width={25}
                height={25}
                alt="github-icon-svg"
                className="rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
