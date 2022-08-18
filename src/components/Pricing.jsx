/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import background from '/public/background.png'
import Image from 'next/future/image'

const pricing = {
  tiers: [
    {
      title: 'Freelancer',
      price: 24,
      frequency: '/month',
      description: 'The essentials to provide your best work for clients.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Pricing() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={background}
          alt="People working on laptops"
          unoptimized
        />
        <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-7xl py-24 px-4 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Wähle Dein Ticket
        </h2>
        <p className="text-x mx-auto mt-6 max-w-2xl">
          Dein Ticket zu dem Ort, an dem sich die Elite der Amazon Private-Label
          Händler trifft.
        </p>

        <p className="mx-auto mt-6 max-w-2xl border border-red-500 text-xl">
          <span className="text-2xl italic text-red-500 underline">
            Fast ausgeschöpft:
          </span>
          <br></br>
          Limitiertes Ticket Kontingent
        </p>

        {/* Tiers */}
        <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-main py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-white">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-white">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="h-6 w-6 flex-shrink-0 text-main"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={classNames(
                  tier.mostPopular
                    ? 'bg-main text-white hover:bg-main'
                    : 'bg-indigo-50 text-main hover:bg-indigo-100',
                  'mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
