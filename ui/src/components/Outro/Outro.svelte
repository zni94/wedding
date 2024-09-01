<script>
    import './outro.css'
    
    import {PUBLIC_API_HOST} from '$env/static/public'
    import {onMount} from "svelte";
    import ClipboardJS from "clipboard";
    import Link from "$lib/images/svg/Link.svelte"
    import Text from "@components/Text/Text.svelte";
    
    const src= `${PUBLIC_API_HOST}/images/BSH09063.jpg`
    $: url = null;
    
    onMount(()=>{
        url = location.href;
        const clipboard = new ClipboardJS('.share-btn')
        
        clipboard.on('success', (e)=>{
            alert('주소가 복사되었습니다.\n필요하 곳에 공유하세요.')
        })
    })
</script>

<div class="outro-component">
    <div class="outro-container">
        <div class="shadow">
            <button class="share-btn" data-clipboard-text={`${url}`}>
                <Link/>
                <span>링크 복사하기</span>
            </button>
            <Text font="sub" weight="light" textAlign="center" color="ff">
                &copy; 2024. Youngjin Kwon. All right reserved.
            </Text>
        </div>
        <img {src}>
        
    </div>
</div>