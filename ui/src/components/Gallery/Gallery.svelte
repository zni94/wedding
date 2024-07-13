<script>
    import image_1 from '$lib/images/wedding/image_1.jpg'
    import image_2 from '$lib/images/wedding/image_2.jpg'
    import image_3 from '$lib/images/wedding/image_3.jpg'
    import image_4 from '$lib/images/wedding/image_4.jpg'
    import image_5 from '$lib/images/wedding/image_5.jpg'
    
    import './gallery.css'
    import LeftArrow from "$lib/images/svg/LeftArrow.svelte";
    import RightArrow from "$lib/images/svg/RightArrow.svelte";
    import Close from "$lib/images/svg/Close.svelte";
    import Plus from "$lib/images/svg/Plus.svelte";
    import {onMount} from "svelte";
    
    $: imageContainer = null;
    
    $: isOpen = false;
    $: isToggle = false;
    $: isMove = false;
    $: idx = 1;
    
    $: startClientX = null;
    $: endClientX = null;
    
    const galleryHandler = {
        open: () => {
            isOpen = !isOpen
        },
        toggle: () => {
            if(!isOpen) return
            
            isToggle = !isToggle
            
            body.style.overflow = isToggle ? 'hidden' : 'auto'
            
            // eventListener
            if (isToggle) {
                imageContainer.addEventListener('touchstart', galleryHandler.touchstart)
                imageContainer.addEventListener('touchmove', galleryHandler.touchmove)
                imageContainer.addEventListener('touchend', galleryHandler.touchend)
            } else {
                imageContainer.removeEventListener('touchstart', galleryHandler.touchstart)
                imageContainer.removeEventListener('touchmove', galleryHandler.touchmove)
                imageContainer.removeEventListener('touchend', galleryHandler.touchend)
            }
        },
        prev: () => {
            if (idx === 1) return idx = 9
            
            idx--
        },
        next: () => {
            if (idx === 9) return idx = 1
            
            idx++
        },
        touchstart: (evt) => {
            startClientX = evt.changedTouches[0].clientX
        },
        touchmove: () =>{
            isMove = true;
        },
        touchend: (evt) => {
            if(!isMove) return;
            
            endClientX = evt.changedTouches[0].clientX
            startClientX - endClientX > 0 ? galleryHandler.next() : galleryHandler.prev()
            isMove = false;
        }
    }
</script>

<div class="gallery-preview-component">
    <div class="image-preview-container" class:open={isOpen} on:click={galleryHandler.toggle}>
        <div class="shader"></div>
        <img alt="1" src={image_1} style="grid-area: image_1; aspect-ratio: 16 / 20">
        <img alt="2" src={image_2} style="grid-area: image_2; aspect-ratio: 16 / 10; object-position: center;">
        <img alt="3" src={image_3} style="grid-area: image_3; aspect-ratio: 16 / 10">
        <img alt="4" src={image_4} style="grid-area: image_4; aspect-ratio: 16 / 10">
        <img alt="5" src={image_5} style="grid-area: image_5; aspect-ratio: 16 / 20">
        <img alt="6" src={image_1} style="grid-area: image_6; aspect-ratio: 16 / 10">
        <img alt="7" src={image_2} style="grid-area: image_7; aspect-ratio: 16 / 20">
        <img alt="8" src={image_3} style="grid-area: image_8; aspect-ratio: 16 / 20">
        <img alt="9" src={image_4} style="grid-area: image_9; aspect-ratio: 16 / 10">
    </div>
    
    <button
            on:click={galleryHandler.open}
            style='display: {isOpen ? "none" : "grid"}'
            color="18"
            font="small"
            weight="semibold">
        More Photos
    </button>
</div>

<div class="gallery-component" class:toggle={isToggle}>
    <div class="carousel">
        <div class="carousel-toolbar" style="justify-content: flex-end">
            <button on:click={galleryHandler.toggle}>
                <svelte:component this={Close}/>
            </button>
        </div>
        <div class="image-container" bind:this={imageContainer}>
            <img alt="1" class:view={idx === 1} src={image_1}>
            <img alt="2" class:view={idx === 2} src={image_2}>
            <img alt="3" class:view={idx === 3} src={image_3}>
            <img alt="4" class:view={idx === 4} src={image_4}>
            <img alt="5" class:view={idx === 5} src={image_5}>
            <img alt="6" class:view={idx === 6} src={image_1}>
            <img alt="7" class:view={idx === 7} src={image_2}>
            <img alt="8" class:view={idx === 8} src={image_3}>
            <img alt="9" class:view={idx === 9} src={image_4}>
        </div>
        <div class="carousel-toolbar" style="justify-content: center">
            <button on:click={galleryHandler.prev}>
                <svelte:component this={LeftArrow}/>
            </button>
            <button on:click={galleryHandler.next}>
                <svelte:component this={RightArrow}/>
            </button>
        </div>
    </div>
</div>