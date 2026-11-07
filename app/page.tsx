import Image from "next/image";

export default function HomePage() {
  return (
    <main className="space-y-20">

      <section className="space-y-8 pt-12">

        <div className="space-y-4">

          <h1 className="text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Benjamin Palkowski
          </h1>

        </div>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Ben Palkowski is a dual-licensed attorney and CPA, serving Western Massachustts in connection with estate planning, tax, trust administration and IRA planning. Please visit <a href="https://www.oldcolonylaw.com">Old Colony Law</a> for more about Ben's estate planning legal services or <a href="https://www.fiscalhighlands.com">the Fiscal Highlands website</a> to learn more about his accounting, campaign fianance, and nonprofit consulting services.
        </p>

      </section>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    alignItems: "center",
  }}
>
   <a
    href="https://www.oldcolonylaw.com"
    target="_blank"
    rel="noopener noreferrer"
  >
  <Image
    src="/images/old-colony-law-logo-ben-palkowkski.png"
    alt="Logo 1"
    width={150}
    height={150}
  />
  </a>
  <a
    href="https://www.fiscalhighlands.com"
    target="_blank"
    rel="noopener noreferrer"
  >    
  <Image
    src="/images/fiscal-highlands-logo-ben-palkowksi.png"
    alt="Logo 2"
    width={150}
    height={150}
  />
  </a>
</div>

      <section className="space-y-6">

  <Image
    src="/images/photo.jpg"
    alt="Homepage image"
    width={700}
    height={400}
    className="rounded-3xl w-full max-w-xl mx-auto"
  />

  <div className="max-w-2xl mx-auto space-y-4">

    <h2 className="text-3xl font-bold text-center">
      About Benjamin Palkowski
    </h2>

    <div className="space-y-4">

  <p>
    Benjamin Palkowski is a dual-licensed attorney-CPA and co-owner of Old Colony Law, a Massachusetts law office that focuses on estate planning, with emphasis upon estate tax minimization planning and asset protection planning.
  </p>

  <p>
    Previously, Ben worked as a lobbyist, focusing primarily on tax and health care issues, first for a labor union, and then for a large northern New England law firm, representing Fortune 500 corporations and trade associations, facilitating negotiation between lawmakers from both political parties.
  </p>

  <p> 
    Ben has also previously worked in various capacities for numerous nonprofit organizations, and continues to advise nonprofits in the areas of planned giving, campaign finance, and nonprofit fund accounting.
  </p>

  <p>
Ben's office is located in Hadley, Massachusetts.
  </p>

  <p>
    ben@OldColonyLaw.com
  </p>

  <p>
    (802) 279 - 2719
  </p>

</div>

  </div>

</section>
    </main>
  );
}