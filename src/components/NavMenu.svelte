<script context="module" lang="ts">
    export type Items = {
        label: string
        link: string
        color: Color
    };
</script>

<script lang="ts">
    import type { Color } from '../types.d'
    import { onMount } from 'svelte'

    export let items:Items[] = [{ label: 'Home', link: '', color: 'blue' }]
    export let current = ''
    export let mobileBreakpoint = 768

    const mobileClass = 'fixed top-0 right-0 w-full h-full z-10 flex flex-col gap-6 justify-center items-center bg-blue-900 text-2xl'
    const desktopClass = 'flex flex-row gap-4 text-lg items-center text-center h-full ml-4'
    const bgs = {
        neutral: 'bg-neutral-700',
        red: 'bg-red-700',
        blue: 'bg-blue-700',
        green: 'bg-green-700',
        yellow: 'bg-yellow-700',
        orange: 'bg-orange-700',
        pink: 'bg-pink-700',
        white: 'bg-white',
        black: 'bg-black'
    }

    let isMobile = false, isOpen = false

    function toggleMenu () { isOpen = !isOpen }

    onMount(() => {
        isMobile = window.innerWidth < mobileBreakpoint
        window.addEventListener('resize', () => { isMobile = window.innerWidth < mobileBreakpoint })
    })
</script>

<nav class="h-full">
    {#if isMobile}
        <button class="text-white z-20 relative bg-blue-900 h-full flex justify-center items-center aspect-square" on:click={toggleMenu}>
            {#if !isOpen}
            <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor">
                <line x1="0" y1="4" x2="24" y2="4" stroke-width="3"/>
                <line x1="0" y1="12" x2="24" y2="12" stroke-width="3"/>
                <line x1="0" y1="20" x2="24" y2="20" stroke-width="3"/>
            </svg>
            {:else}
            <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor">
                <line x1="1" y1="18" x2="18" y2="1" stroke-width="2"/>
                <line x1="1" y1="1" x2="18" y2="18" stroke-width="2"/>
            </svg>
            {/if}
        </button>
    {/if}

    <div class={(isMobile? mobileClass : desktopClass) + (!isOpen&&isMobile? ' hidden' : '')}>
        {#each items as item}
            {#if item.link != current}
                <a class={'mx-2 text-white rounded-md py-1 px-2 inline-block hover:scale-110 '+bgs[item.color]} href={item.link}>{item.label}</a>
            {:else}
                <span class={'mx-2 text-white rounded-md py-1 px-2 inline-block scale-110 ring-2 ring-offset-2 ring-yellow-500 '+bgs[item.color]}>{item.label}</span>
            {/if}
        {/each}
    </div>
</nav>