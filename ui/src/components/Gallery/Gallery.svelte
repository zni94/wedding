<script>
    
    import './gallery.css'
    import LeftArrow from "$lib/images/svg/LeftArrow.svelte";
    import RightArrow from "$lib/images/svg/RightArrow.svelte";
    import Close from "$lib/images/svg/Close.svelte";
    
    import {PUBLIC_API_HOST} from "$env/static/public";
    
    const imageList = [
        {imgName: 'BSH08104.jpg', imgSize: 'large'},
        {imgName: 'BSH08218.jpg', imgSize: 'small'},
        {imgName: 'BSH08370.jpg', imgSize: 'small'},
        {imgName: 'BSH09655.jpg', imgSize: 'large'},
        {imgName: 'BSH09498.jpg', imgSize: 'small'},
        {imgName: 'BSH09651.jpg', imgSize: 'small'},
        {imgName: 'BSH09687.jpg', imgSize: 'large'},
    ]
    
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
            if (!isOpen) return
            
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
            if (idx === 1) return idx = 7
            
            idx--
        },
        next: () => {
            if (idx === 7) return idx = 1
            
            idx++
        },
        touchstart: (evt) => {
            startClientX = evt.changedTouches[0].clientX
        },
        touchmove: () => {
            isMove = true;
        },
        touchend: (evt) => {
            if (!isMove) return;
            
            endClientX = evt.changedTouches[0].clientX
            startClientX - endClientX > 0 ? galleryHandler.next() : galleryHandler.prev()
            isMove = false;
        }
    }
</script>

<div class="gallery-preview-component">
    <div class="image-preview-container" class:open={isOpen} on:click={galleryHandler.toggle}>
        <div class="shader"></div>
        {#each imageList as image, i}
            <img class={image.imgSize} alt={i+1} src={`${PUBLIC_API_HOST}/images/${image.imgName}`}
                 style={`grid-area:image_${i+1};`}>
        {/each}
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
            {#each imageList as image, i}
                <img class:view={idx === i+1} alt={i+1} src={`${PUBLIC_API_HOST}/images/${image.imgName}`}>
            {/each}
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