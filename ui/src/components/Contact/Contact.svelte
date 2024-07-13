<script>
    import './contact.css'
    import {onMount} from "svelte";
    import src from '$lib/images/wedding/image_1.jpg'
    
    $: isToggle = false
    
    $: name = ''
    $: type=''
    $: mode = ''
    
    const modalHandler = () => {
        isToggle = !isToggle;
        
        body.style.overflow = isToggle ? 'hidden' : 'auto'
    }
    
    onMount(() => {
        let searchParams = new URLSearchParams(location.href);
        
        type = searchParams.has('type') && Number(searchParams.get('type'))
        mode = searchParams.has('mode') && Number(searchParams.get('mode'))
        
        switch (type) {
            case 1:
                name = '송준영';
                break;
            case 2:
                name = '송재준';
                break;
            default:
                name = '송준영';
                break;
        }
    })
</script>

<div class="contact-component">
    <div class="contact-image-container">
        <img {src} alt="no image"/>
    </div>
    
    <div class="contact-info">
        <div name="parents" font="plain" color="18" weight="semibold" style="grid-template-columns: 1fr auto 1fr;">
            <span>권선두</span>
            <span>·</span>
            <span>김경아</span>
        </div>
        <div name="familyTitle" font="sub" color="54" weight="regular">
            <span>의</span>
            <span>차남</span>
        </div>
        <div font="plain" color="18" weight="semibold">
            <span>영진</span>
        </div>
    </div>
    
    <div class="contact-info">
        <div name="parents" font="plain" color="18" weight="semibold" style="grid-template-columns: 1fr auto 1fr">
            <span>{name}</span>
            <span>&nbsp;</span>
            <span>{mode === 1 ? '(무량)' : ''}</span>
        </div>
        <div name="familyTitle" font="sub" color="54" weight="regular">
            <span>의</span>
            <span>장녀</span>
        </div>
        <div font="plain" color="18" weight="semibold">
            <span>민교</span>
        </div>
    </div>
    
    <button on:click={modalHandler}
        color="18"
        font="small"
        weight="semibold">
        Contact
    </button>
</div>

<dib class="contact-modal" class:toggle={isToggle}>
    <label for="ModalCloseBtn">
    
    <input type="button" id="ModalCloseBtn" on:click={modalHandler}>
    contact modal
    </label>
</dib>
