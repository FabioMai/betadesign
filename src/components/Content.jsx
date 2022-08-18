/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/future/image'
import { UsersIcon } from '@heroicons/react/outline'

export function Content() {
  return (
    <div className="relative border-b-8 border-main bg-gray-200">
      <div className="h-56 bg-main sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
          width="1600"
          height="1600"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-main text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Die Location des AdWork ScaleDay:
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
            omnis, molestiae esse placeat, exercitationem magnam quod molestias
            quia aspernatur deserunt voluptatibus.
          </p>
        </div>
      </div>
    </div>
  )
}
