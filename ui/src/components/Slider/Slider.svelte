<script>
    import './slider.css'
    
    export let key, data;
    
    const user = {
        groom: '신랑측 계좌번호',
        bride: '신부측 계좌번호',
    }
    
    $:toggle = false
    
    const sliderHandler = {
        toggle: () => {
            toggle = !toggle;
        }
    }
</script>

<div class="slider-component" class:toggle={toggle}>
    <button class="slider-expander" on:click={sliderHandler.toggle}>
        <p text-align="left">{user[key]}</p>
        <i text-align="right"><!-- icon -->icon</i>
    </button>
    {#each data as item}
        <div class="slider-contents">
            <div name="account">{item.bank} | {item.account}</div>
            <div name="name">{item.name}</div>
            <button name="copy" text-align="right">copy</button>
        </div>
    {/each}
</div>