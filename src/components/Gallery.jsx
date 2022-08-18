/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/future/image'
const images = [
  {
    imageUrl: 'http://placekitten.com/200/300',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export function Gallery() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="mx-auto space-y-5 text-center sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Das Amazon FBA Event des Jahres
            </h2>
            <p className="mx-auto max-w-2xl py-6 text-2xl text-gray-300">
              Während die Welt sich verändert und es auf Amazon immer
              schwieriger wird, kommen hier die Köpfe der Unternehmen zusammen,
              die bisher bei jeder Marktveränderung Bestseller geblieben sind
              und auch jedes neue Produkt an die Spitze bringen…
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-4xl grid-cols-3 gap-x-8 gap-y-4"
          >
            {[1, 2, 3, 4, 5, 6].map((person) => (
              <li key="">
                <Image
                  className="border border-white"
                  src="http://placekitten.com/300/200"
                  alt=""
                  width="300"
                  height="200"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
