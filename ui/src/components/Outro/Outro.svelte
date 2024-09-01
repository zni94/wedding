<script>
    import './outro.css'
    
    import {PUBLIC_API_HOST} from '$env/static/public'
    import {onMount} from "svelte";
    import ClipboardJS from "clipboard";
    
    const src= `${PUBLIC_API_HOST}/images/BSH09063.jpg`
    $: url = null;
    
    onMount(()=>{
        url = location.href;
        const clipboard = new ClipboardJS('.copy-btn')
        
        clipboard.on('success', (e)=>{
            alert('주소가 복사되었습니다.\n필요하 곳에 공유하세요.')
        })
    })
</script>

<div class="outro-component">
    <div class="outro-container">
        <div class="shadow"></div>
        <img {src}>
        <button class="copy-btn" data-clipbard-text={`${url}`}>
            <!-- link icon -->
            <span>링크 복사하기</span>
        </button>
    </div>
</div>