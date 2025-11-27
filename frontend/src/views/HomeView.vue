<script setup>
import TheCard from '../components/TheCard.vue'
import PressButton from '../components/PressButton.vue'
</script>

<template>
  <main class="mt-16">
    <section class="p-5 pb-10 md:p-10 bg-woodsmoke-darkest">
      <div
        class="grid grid-cols-1 md:grid-cols-2 bg-cinder-darker border border-border-soft-veil rounded-base shadow-xs md:flex-row">

        <img class="object-fill max-h-screen w-full rounded-base mb-4 md:mb-0" src="../assets/solverseiconaight.png"
          alt="image">

        <div class="flex flex-col justify-center p-8 leading-normal">
          <h5 class="mb-8 text-5xl font-bold tracking-tight text-heading text-text-primary-silverlight">Explore digital
            creativity through interactive tools</h5>
          <p class="mb-8 text-text-muted-ashen">Solverse transforms curiosity into digital experiences. We build
            experimental web tools that challenge imagination and push technological boundaries.</p>
          <div class="flex space-x-4">
            <PressButton label="Explore" />
            <PressButton label="Learn" bgColor="tickle-me-pink" stateMatter="hollow" textColorHover="woodsmoke" />
          </div>
        </div>
      </div>
    </section>



    <section id="feature_section" class="bg-cinder">
      <div class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16">
        <p class="mb-6 text-text-primary-silverlight">Discover</p>
        <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">Latest experimental
          <span class="text-melrose">web tools</span>
        </h1>
        <p class="mb-8 text-base font-normal text-body md:text-xl md:px-16 xl:px-72">Innovative digital experiences that
          push the boundaries of what's possible. Each tool is crafted to spark curiosity and challenge traditional
          thinking.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
          <button type="button"
            class="text-body text-cornflower-blue hover:text-text-primary-silverlight border-box border-2 border-b rounded-full border-cornflower-blue shadow-[0_4px_0_-1px] shadow-cornflower-blue-dark hover:bg-cornflower-blue active:shadow-[0_0_0_0] active:translate-y-[4px] font-medium leading-5 text-base px-5 py-3 transition-all select-none">
            Browse
          </button>

          <RouterLink to="/"
            class="inline-flex items-center justify-center text-text-primary-silverlight hover:underline box-border border border-transparent font-medium text-base px-5 py-3 transition-all select-none">
            Details
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ms-1.5 -me-0.5" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </RouterLink>
        </div>
      </div>
      <div class="flex justify-center text-sm font-medium text-center text-body">
        <ul class="flex flex-wrap -mb-px">
          <li class="me-2">
            <button type="button" class="inline-block cursor-pointer p-4 border-b border-border-soft-veil rounded-t-base active">Web tools
            </button>
          </li>
          <li class="me-2">
            <button type="button" class="inline-block cursor-pointer p-4 border-b border-transparent rounded-t-base hover:border-brand">Hobby
              apps
            </button>
          </li>
          <li class="me-2">
            <button type="button" class="inline-block cursor-pointer p-4 border-b border-transparent rounded-t-base hover:border-brand">Mini
              projects
            </button>
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
              <img class="object-contain max-h-screen w-full rounded-base mb-4 md:mb-0" src="../assets/wood-texture.jpg"
                alt="image">
              <div class="flex flex-col justify-center p-8 leading-normal">
                <p class="mb-6 text-text-primary-silverlight">Explore</p>
                <h5 class="mb-8 text-5xl font-bold tracking-tight text-heading text-text-primary-silverlight">Unleash
                  your digital creativity</h5>
                <p class="mb-8 text-text-muted-ashen">Dive into a world where technology meets imagination. Transform
                  complex ideas into interactive experiences.</p>
                <div class="flex space-x-2">
                  <PressButton label="Start" stateMatter="hollow" textColorHover="start" />
                  <RouterLink to="/"
                    class="inline-flex items-center w-auto text-text-primary-silverlight hover:underline font-medium leading-5 text-sm px-4 py-2.5 transition-all select-none">Learn<svg
                      xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ms-1.5 -me-0.5" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </RouterLink>
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


    <section class="max-h-screen p-10 bg-woodsmoke-darkest">
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
