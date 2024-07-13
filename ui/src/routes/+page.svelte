<script>
    import src from '$lib/images/icon/present.png'
    import Calendar from "@components/Calendar/Calendar.svelte";
    import Title from "@components/Title/Title.svelte";
    import Text from "@components/Text/Text.svelte";
    import Gallery from "@components/Gallery/Gallery.svelte";
    
    import {onMount} from "svelte";
    import Location from "@components/Location/Location.svelte";
    import Account from "@components/Account/Account.svelte";
    import Guestbook from "@components/Guestbook/Guestbook.svelte";
    import Contact from "@components/Contact/Contact.svelte";
    
    $: dDay = 0;
    
    onMount(()=>{
        const interval = setInterval(()=>{
            const date = new Date();
            const target = new Date('2024-10-09 11:00:00');
            
            dDay = Math.ceil((target.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        }, 1000)
        
        return () => clearInterval(interval)
    })
</script>

<!-- contents-->
<div class="contents-form">
    <!-- intro -->
    <div class="contents">
        <div name="intro">
        
        </div>
    </div>
    
    <!-- invitation -->
    <div class="contents">
        <!-- poem  -->
        <div name="poem">
            <Title>
                <img {src} alt="error load image"/>
            </Title>
            <Text color="90" font="small" weight="regular" textAlign="center">
                <span>하늘아래 내가 받은</span>
                <span>가장 커다란 선물은</span>
                <span>오늘입니다</span>
            </Text>
            <Text color="90" font="small" weight="regular" textAlign="center">
                <span>오늘 받은 선물 가운데서도</span>
                <span>가장 아름다운 선물은</span>
                <span>당신입니다</span>
            </Text>
            <Text color="90" font="small" weight="regular" textAlign="center">
                <span>당신 나지막한 목소리와</span>
                <span>웃는 얼굴, 콧노래 한구절이면</span>
                <span>한 아름 바다를 안은 듯한 기쁨이겠습니다</span>
            </Text>
            <Text color="18" font="plain" weight="semibold" textAlign="center">
                <span>나태주, &lt;선물&gt;</span>
            </Text>
        </div>
        
        <!-- invitation-->
        <div name="invitation">
            <Title>
                invitation
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>소중한 분들을 초대합니다</span>
            </Text>
            <Text color="90" font="small" weight="regular" textAlign="center">
                <span>새로운 인생을 시작하는 이 첫걸음</span>
                <span><span color="red" weight="semibold">온 우주</span>가 우리를 <span color="red" weight="semibold">축복</span>해주는 날입니다</span>
                <span>그 시작의 자리에 참석하여 기쁨을 함께 나누고</span>
                <span>빛내주시면 감사하겠습니다</span>
            </Text>
        </div>
        
        <div name="contact">
            <Contact/>
        </div>
    </div>
    
    <!-- calendar -->
    <div class="contents">
        <div name="calendar">
            <Title>
                calendar
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>2024. 10. 09</span>
                <span>수요일. 오전 11시 00분</span>
            </Text>
            <Calendar/>
            <Text textAlign="center">
                <span><span color="18" weight="semibold">영진</span> · <span color="18" weight="semibold">민교</span>의 결혼식 까지</span>
                <span><span color="red" weight="semibold">D-{dDay}</span>일 남았습니다</span>
            </Text>
        </div>
    </div>
    
    <!-- gallery -->
    <div class="contents">
        <div name="gallery">
            <Title>
                gallery
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>갤러리</span>
            </Text>
            <Gallery/>
        </div>
    </div>
    
    <!-- location -->
    <div class="contents">
        <div name="location">
            <Title>
                location
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>오시는 길</span>
            </Text>
            <Text textAlign="center">
                <span weight="semibold" font="large">The Marevo. 15F. Atelier.M</span>
                <span color="54" font="small">경기도 수원시 영통구 봉영로 1591</span>
            </Text>
            <Location/>
        </div>
    </div>
    
    <!-- information -->
    <div class="contents">
        <div name="information">
            <Title>
                information
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>예식정보 및 안내사항</span>
            </Text>
        </div>
    </div>
    
    <!-- account -->
    <div class="contents">
        <div name="account">
            <Title>
            
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>마음 전하실 곳</span>
            </Text>
            <Account/>
        </div>
    </div>
    
    <!-- guestbook -->
    <div class="contents">
        <div name="guestbook">
            <Title>
                guestbook
            </Title>
            <Text font="large" color="18" weight="semibold" textAlign="center">
                <span>방명록</span>
            </Text>
            <Guestbook/>
        </div>
    </div>
</div>