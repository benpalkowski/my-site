import Image from "next/image";

export default function HomePage() {
  return (
    <main className="space-y-20">

      <section className="space-y-8 pt-12">

        <div className="space-y-4">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Benjamin Palkowski
          </p>

          <h1 className="text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Estate planning, charitable giving and campaign finance.
          </h1>

        </div>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Miscellaneous updates, analysis and commentary from an attorney, CPA, nonprofit consultant and lifelong New Englander.
        </p>

      </section>

      <section className="space-y-6">

  <Image
    src="/images/photo.jpg"
    alt="Homepage image"
    width={700}
    height={400}
    className="rounded-3xl w-full max-w-2xl mx-auto"
  />

  <div className="max-w-2xl mx-auto space-y-4">

    <h2 className="text-3xl font-bold text-center">
      Benjamin Palkowski
    </h2>

    <div className="space-y-4">

  <p>
    Benjamin Palkowski is a dual-licensed attorney-CPA and co-owner of Old Colony Law, a Massachusetts law office that focuses on estate planning, with emphasis upon estate tax minimization planning and asset protection planning.
  </p>

  <p>
    Previously, Ben worked as a lobbyist, focusing primarily on tax and health care issues, first for a labor union, and then for a large northern New England law firm, representing Fortune 500 corporations and trade associations, facilitating negotiation between lawmakers from both political parties.
  </p>

  <p> 
    Ben has also worked in numerous capacities for nonprofit organizations, and advises in the areas of planned giving, campaign finance, and nonprofit fund accounting.
  </p>

  <p>
Please feel welcome to contact me to start a conversation.
  </p>

</div>

  </div>

</section>
    </main>
  );
}