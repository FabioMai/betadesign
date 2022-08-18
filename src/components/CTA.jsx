/* This example requires Tailwind CSS v2.0+ */
export function CTA() {
  return (
    <div className="bg-main">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">CTA</span>
        </h2>
        <p className="mt-4 text-lg leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          nobis esse nesciunt quidem quas sequi ex error praesentium ratione
          quae modi corporis, id animi, eius voluptatem placeat. Et, vitae quo!
        </p>
        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-main hover:bg-indigo-50 sm:w-auto"
        >
          CTA!
        </a>
      </div>
    </div>
  )
}
