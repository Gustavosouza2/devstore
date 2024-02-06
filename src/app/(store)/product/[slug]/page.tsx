import Image from 'next/image'

const sizes = ['P', 'M', 'G', 'GG']

export default function ProductPage() {
  return (
    <div>
      <div className="relative grid max-h-[860px] grid-cols-3">
        <div className="col-span-2 overflow-hidden ">
          <Image
            src="/moletom-never-stop-learning.png"
            height={1000}
            quality={100}
            width={1000}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center px-12 ">
          <h1 className="text-3xl font-bold leading-tight">
            Moletom Never Stop Learning
          </h1>

          <p className="mt-2 leading-relaxed text-zinc-400">
            Moletom fabricado com 88% de algodão e 12% de poliéster.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="inline-block  rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
              R$123
            </span>
            <span className="text-sm text-zinc-400">Em 12x sem juros</span>
          </div>

          <div className="mt-8 space-y-4">
            <span className="block font-semibold">Tamanhos</span>
            <div className="flex gap-2 ">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full 
                    border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:scale-105 transition-transform duration-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
            Adicionar Item ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
