

export default function hero() {


  return (
    <section>


      <div class="relative py-12 bg-black sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div class="absolute inset-0 hidden lg:block">
          <img class="  object-right-bottom h-full w-full " src="https://cdn.pixabay.com/photo/2015/10/31/14/35/dark-1015828_960_720.jpg" alt="" />
        </div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            <h1 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">Descubre un nuevo mundo, al alcance de un click.</h1>
            <p class="mt-8 text-base font-normal leading-7 text-white lg:max-w-md xl:pr-0 lg:pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.</p>

            <div class="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
              <a
                href="#"
                title=""
                class="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            sm:px-6
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                            hover:bg-gray-200
                        "
                role="button"

              >
                Subscribite para estar al tanto de lo nuevo!
              </a>

            </div>
          </div>
        </div>

        <div class="mt-8 lg:hidden">
          <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png" alt="" />
        </div>
      </div>
    </section>
  )
}
