export default function ContactPage() {
  return (
    <main className="space-y-10">

      <section className="space-y-4">

        <h1 className="text-5xl font-bold">
          Contact Ben Palkowski
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Please get in touch or schedule a consultation with Ben:
        </p>

      </section>

      <section className="space-y-8">

        <div className="space-y-2">

          <h2 className="text-2xl font-semibold">
            Mailing Address
          </h2>

          <div className="text-lg leading-relaxed">

            <p>
              Benjamin Palkowski
            </p>

            <p>
              P.O. Box 772
            </p>

            <p>
              Hadley, MA 01035
            </p>

          </div>

        </div>

        <div className="space-y-2">

          <h2 className="text-2xl font-semibold">
            Office Location
          </h2>

          <div className="text-lg leading-relaxed">

            <p>
              245 Russell Street Unit 14
            </p>

            <p>
              Hadley, Massachusetts
            </p>

            <p className="text-gray-600 italic">
              <a
  href="https://go.oncehub.com/benpalkowski"
  target="_blank"
  rel="noopener noreferrer"
>
  By appointment only.
</a>
            </p>

          </div>

        </div>

         <div className="space-y-2">

          <h2 className="text-2xl font-semibold">
            Virtual Office
          </h2>

          <div className="text-lg leading-relaxed">

            <p>
              Zoom
            </p>

            <p className="text-gray-600 italic">
              <a
  href="https://go.oncehub.com/benpalkowski"
  target="_blank"
  rel="noopener noreferrer"
>
  By appointment only.
</a>
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}