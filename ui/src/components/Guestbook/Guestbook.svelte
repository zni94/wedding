<script>
    import './guestbook.css'
    import axios from "axios";
    import {PUBLIC_API_HOST} from "$env/static/public";
    
    let contents;
    
    const eventHandler = {
        submit: async () => {
            await axios({
                url: `${PUBLIC_API_HOST}/api/insert`,
                method: 'POST',
                data: {
                    guestComment: contents,
                },
                mode: 'cors',
            }).then(resp => {
                const isSuccess = resp.data
                
                if(isSuccess){
                    alert('소중한 방명록 감사합니다 !')
                    
                    contents = ''
                }
            })
        }
    }

</script>

<div class="guest-book-component">
    <div class="guest-book-container">
        <textarea bind:value={contents} placeholder="내용을 입력해주세요." required/>
        <button
                on:click={eventHandler.submit}
                color="18"
                font="small"
                weight="semibold">
            Submit
        </button>
    </div>
</div>