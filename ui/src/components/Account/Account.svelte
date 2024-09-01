<script>
    import './account.css'
    
    import DownArrow from "$lib/images/svg/DownArrow.svelte";
    import Text from "@components/Text/Text.svelte";
    import {onMount} from "svelte";
    import ClipboardJS from "clipboard";
    
    const eventHandler = {
        toggle: (e) => {
            const button = e.currentTarget;
            const container = button.closest('.account-container')
            
            container.classList.toggle('toggle');
        },
    }
    
    onMount(() => {
        let clipboard = new ClipboardJS('.copy-btn')
        
        clipboard.on('success', (e) => {
            const text = e.text
            
            alert(`계좌번호(${text})가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`)
        })
    })
</script>

<div class="account-component">
    <div class="account-container">
        <div class="toggle-button" on:click={eventHandler.toggle}>
            <Text color="18" font="plain" weight="semibold" textAlign="center">
                신랑 측 계좌번호
            </Text>
            <i style="display:grid; place-items: center">
                <DownArrow/>
            </i>
        </div>
        <ul class="account-info">
            <li>
                <div class="account-own">
                    <Text color="36" font="plain" weight="regular" textAlign="center">
                        국민은행 | 60901-0214-100
                    </Text>
                    <button class="copy-btn" data-clipboard-text="609010214100">
                        복사
                    </button>
                </div>
                <div>
                    <Text color="36" font="plain" weight="regular" textAlign="left">
                        권선두
                    </Text>
                </div>
            </li>
            <li>
                <div class="account-own">
                    <Text color="36" font="plain" weight="regular" textAlign="center">
                        국민은행 | 609302-04-111114
                    </Text>
                    <button class="copy-btn" data-clipboard-text="60930204111114">
                        복사
                    </button>
                </div>
                <div>
                    <Text color="36" font="plain" weight="regular" textAlign="left">
                        권영진
                    </Text>
                </div>
            </li>
        </ul>
    </div>
    <div class="account-container">
        <div class="toggle-button" on:click={eventHandler.toggle}>
            <Text color="18" font="plain" weight="semibold" textAlign="center">
                신부 측 계좌번호
            </Text>
            <i style="display:grid; place-items: center">
                <DownArrow/>
            </i>
        </div>
        <ul class="account-info">
            <li>
                <div class="account-own">
                    <Text color="36" font="plain" weight="regular" textAlign="center">
                        농협 | 351-0446-4714-53
                    </Text>
                    <button class="copy-btn" data-clipboard-text="3510446471453">
                        복사
                    </button>
                </div>
                <div>
                    <Text color="36" font="plain" weight="regular" textAlign="left">
                        송준영
                    </Text>
                </div>
            </li>
            <li>
                <div class="account-own">
                    <Text color="36" font="plain" weight="regular" textAlign="center">
                        하나은행 | 462-910541-45707
                    </Text>
                    <button class="copy-btn" data-clipboard-text="46291054145707">
                        복사
                    </button>
                </div>
                <div>
                    <Text color="36" font="plain" weight="regular" textAlign="left">
                        송민교
                    </Text>
                </div>
            </li>
        </ul>
    </div>
</div>