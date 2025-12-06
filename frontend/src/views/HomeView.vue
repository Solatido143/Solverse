<script setup>
import TheCard from '../components/TheCard.vue'
import PressButton from '../components/PressButton.vue'
</script>

<template>
  <main class="mt-16">
    <section class="p-5 pb-10 md:p-10 bg-woodsmoke-darkest">
      <div
        class="grid grid-cols-1 md:grid-cols-2 bg-cinder-darker border border-border-soft-veil rounded-base shadow-xs md:flex-row md:items-center">

        <img class="object-fill max-h-screen w-full rounded-base py-4 md:py-0" src="../assets/solverseiconaight.png"
          alt="image">

        <div class="flex flex-col justify-center p-8 leading-normal">
          <h5 class="mb-8 text-4xl md:text-5xl font-bold tracking-tight text-heading text-text-primary-silverlight">
            Build, experiment, and grow as a developer</h5>
          <p class="mb-8 text-text-muted-ashen">Solverse is where ideas become code. A place to construct small tools,
            test new concepts, and sharpen the skills that matter in development.</p>
          <div class="flex space-x-4">
            <PressButton href="#portfolio_list_section" label="Explore" />
            <PressButton label="Read" bgColor="tickle-me-pink" stateMatter="hollow" textColorHover="woodsmoke" />
          </div>
        </div>
      </div>
    </section>



    <section id="feature_section" class="bg-cinder py-16">
      <div class="md:py-4">
        <div class="px-4 mx-auto max-w-screen-2xl text-center">
          <p class="mb-6 text-text-primary-silverlight">Discover</p>
          <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-4xl">
            <!-- Medium length section heading goes here -->Experiments crafted to elevate your coding journey
          </h1>
          <p class="text-base font-normal text-body md:px-16 xl:px-72">Each experiment targets a specific skill or
            challenge, pushing the boundaries of what can be built with clean, deliberate code.</p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-6 lg:space-x-12 space-y-6 md:space-y-0 px-4 mx-auto max-w-screen-2xl text-center">
          <div class="bg-neutral-primary-soft block max-w-sm p-6 shadow-xs">
            <a href="#">
              <img class="rounded-base" src="@/assets/wood-texture.jpg" alt="" />
            </a>
            <a href="#">
              <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">JavaScript utilities</h5>
            </a>
            <p class="mb-6 text-body">Practical tools and functions that solve real problems in modern development.</p>
          </div>
          <div class="bg-neutral-primary-soft block max-w-sm p-6 shadow-xs">
            <a href="#">
              <img class="rounded-base" src="@/assets/wood-texture.jpg" alt="" />
            </a>
            <a href="#">
              <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Frontend challenges</h5>
            </a>
            <p class="mb-6 text-body">UI components and interactions that test the limits of browser capabilities.</p>
          </div>
          <div class="bg-neutral-primary-soft block max-w-sm p-6 shadow-xs">
            <a href="#">
              <img class="rounded-base" src="@/assets/wood-texture.jpg" alt="" />
            </a>
            <a href="#">
              <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">API integrations</h5>
            </a>
            <p class="mb-6 text-body">Connecting services and data sources to build meaningful applications.</p>
          </div>
        </div>
        <div class="hidden flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
          <button type="button"
            class="text-body text-cornflower-blue hover:text-text-primary-silverlight border-box border-2 border-b rounded-full border-cornflower-blue shadow-[0_4px_0_-1px] shadow-cornflower-blue-dark hover:bg-cornflower-blue active:shadow-[0_0_0_0] active:translate-y-[4px] font-medium leading-5 text-base px-5 py-3 transition-all select-none">
            Explore
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
    </section>

    <section id="portfolio_list_section" class="bg-woodsmoke-darker py-16">
      <div class="md:py-4">
        <div class="px-4 mx-auto max-w-screen-2xl text-center">
          <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-4xl">
            Recent experiments
          </h1>
          <p class="text-base font-normal text-body md:px-16 xl:px-72">A collection of projects built to test new ideas
            and techniques.</p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-6 lg:space-x-12 space-y-6 md:space-y-0 px-4 mx-auto max-w-screen-2xl text-center p-6">
          <div class="flex justify-center">
            <div class="max-w-4xl">
              <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <TheCard title="Mudae Extractor" desription="Extract name from your $top"
                  to="/mudae-top-name-extractor" />
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
        </div>
        <div class="flex justify-center">
          <RouterLink
            class="text-body text-cornflower-blue hover:text-text-primary-silverlight border-box border-2 border-b rounded-full border-cornflower-blue shadow-[0_4px_0_-1px] shadow-cornflower-blue-dark hover:bg-cornflower-blue active:shadow-[0_0_0_0] active:translate-y-[4px] font-medium leading-5 text-base px-5 py-3 transition-all select-none">
            View All
          </RouterLink>
        </div>
      </div>
    </section>

  </main>
</template>
