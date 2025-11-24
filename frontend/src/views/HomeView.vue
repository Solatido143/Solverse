<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="mt-16 bg-gradient-to-b from-cinder to-woodsmoke">
    <section class="p-5 pb-10 md:p-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 bg-cinder-darker border border-border-soft-veil rounded-base shadow-xs md:flex-row">

        <img class="object-fill max-h-screen w-full rounded-base mb-4 md:mb-0" src="../assets/solverseicon.png"
          alt="image">

        <div class="flex flex-col justify-center p-8 leading-normal">
          <h5 class="mb-8 text-5xl font-bold tracking-tight text-heading text-text-primary-silverlight">Explore digital
            creativity through interactive
            tools</h5>
          <p class="mb-8 text-text-muted-ashen">Solverse transforms curiosity into digital experiences. We build
            experimental web tools that challenge imagination and push technological boundaries.</p>
          <div class="flex space-x-4">
            <button type="button"
              class="inline-flex items-center w-auto text-text-primary-silverlight bg-cornflower-blue box-border border border-border-soft-veil hover:bg-cornflower-blue-dark hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Explore
            </button>
            <button type="button"
              class="inline-flex items-center w-auto text-text-primary-silverlight box-border border border-melrose hover:bg-melrose-darkest hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Learn
            </button>
          </div>
        </div>
      </div>
    </section>



    <section id="feature_section" class=" border-t border-b border-border-soft-veil shadow-xs">
      <div class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16">
        <p class="mb-6 text-text-primary-silverlight">Discover</p>
        <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">Latest experimental
          web tools</h1>
        <p class="mb-8 text-base font-normal text-body md:text-xl md:px-16 xl:px-72">Innovative digital experiences that
          push the boundaries of what's possible. Each tool is crafted to spark curiosity and challenge traditional
          thinking.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
          <button type="button"
            class="text-body box-border border border-cornflower-blue hover:bg-cornflower-blue-darker transition focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Browse</button>
          <button type="button"
            class="inline-flex items-center justify-center text-text-primary-silverlight hover:bg-melrose-darkest transition box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
            Details
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ms-1.5 -me-0.5" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>


      <div class="flex justify-center text-sm font-medium text-center text-body">
        <ul class="flex flex-wrap -mb-px">
          <li class="me-2">
            <a href="#" class="inline-block p-4 border-b border-border-soft-veil rounded-t-base active">Web tools
            </a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block p-4 border-b border-transparent rounded-t-base hover:border-brand">Hobby
              apps
            </a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block p-4 border-b border-transparent rounded-t-base hover:border-brand">Mini
              projects
            </a>
          </li>
        </ul>
      </div>


      <div class="mt-8 px-4 mx-auto max-w-screen">
        <!-- Carousel wrapper -->
        <div class="relative rounded-base px-5 pb-10 md:px-10">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out">
            <div
              class="grid grid-cols-1 md:grid-cols-2 bg-starry-night-void/80 border border-border-soft-veil rounded-base shadow-xs md:flex-row">
              <img class="object-contain max-h-screen w-full rounded-base mb-4 md:mb-0" src="../assets/solverseicon.png"
                alt="image">
              <div class="flex flex-col justify-center p-8 leading-normal">
                <p class="mb-6 text-text-primary-silverlight">Explore</p>
                <h5 class="mb-8 text-5xl font-bold tracking-tight text-heading text-text-primary-silverlight">Unleash
                  your digital creativity</h5>
                <p class="mb-8 text-text-muted-ashen">Dive into a world where technology meets imagination. Transform
                  complex ideas into interactive experiences.</p>
                <div class="flex space-x-2">
                  <button type="button"
                    class="inline-flex items-center w-auto text-text-primary-silverlight bg-cornflower-blue box-border border border-border-soft-veil hover:bg-cornflower-blue-dark hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Start
                  </button>
                  <button type="button"
                    class="inline-flex items-center w-auto text-text-primary-silverlight hover:bg-melrose-darkest hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Learn<svg
                      xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ms-1.5 -me-0.5" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out">
            <img src="../assets/wood-texture.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out">
            <img src="../assets/wood-texture.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
        </div>
      </div>


    </section>


    <section class="max-h-screen p-10">
      <div class="flex justify-center">
        <div class="max-w-4xl">
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <TheCard title="Mudae Extractor" desription="Extract name from your $top" to="/mudae-top-name-extractor" />
            <TheCard title="Tiypaniki"
              desription="A world where hidden powers shape fate — and family ties are more dangerous than any curse."
              to="/tiypaniki" />
            <TheCard title="Coordinates Converter"
              desription="Convert your minecraft coordinates from overworld to nether or nether to overworld"
              to="/coor-convert" />
            <TheCard title="Sample API Implementation"
              desription="Books API implementation using Laravel Restful API and Vue 3" to="/books" />
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
