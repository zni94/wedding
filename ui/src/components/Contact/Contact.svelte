<script>
    import './contact.css'
    import {onMount} from "svelte";
    import {PUBLIC_API_HOST} from "$env/static/public";
    
    $: name = ''
    $: type = ''
    
    onMount(() => {
        let searchParams = new URLSearchParams(location.href);
        console.log('location.href', location.href)
        console.log('searchParams', searchParams)
        
        type = searchParams.has('type') && Number(searchParams.get('type'))
        console.log('type', type)
        
        switch (type) {
            case 1:
                name = '송준영';
                break;
            case 2:
                name = '송재준';
                break;
            case 3:
                name = '무량스님';
                break;
            default:
                name = '송준영';
                break;
        }
    })
</script>

<div class="contact-component">
    <div class="contact-image-container">
        <img src={`${PUBLIC_API_HOST}/images/BSH08781.jpg`} alt="no image"/>
    </div>
    
    <div class="contact-info">
        <div name="parents" font="plain" color="18" weight="semibold" style="grid-template-columns: 1fr auto 1fr;">
            <span>권선두</span>
            <span>·</span>
            <span>김경아</span>
        </div>
        <div name="familyTitle" font="small" color="54" weight="regular">
            <span>의</span>
            <span>차남</span>
        </div>
        <div font="plain" color="18" weight="semibold">
            <span>영진</span>
        </div>
    </div>
    
    <div class="contact-info">
        <div name="parents" font="plain" color="18" weight="semibold" style="grid-template-columns: 1fr">
            <span>{name}</span>
        </div>
        <div name="familyTitle" font="small" color="54" weight="regular">
            <span>의</span>
            <span>장녀</span>
        </div>
        <div font="plain" color="18" weight="semibold">
            <span>민교</span>
        </div>
    </div>
</div>
