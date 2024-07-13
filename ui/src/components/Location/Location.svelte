<script>
    import './location.css'
    import Bus from "$lib/images/svg/Bus.svelte";
    import Subway from "$lib/images/svg/Subway.svelte";
    import Parking from "$lib/images/svg/Parking.svelte";
    import Text from "@components/Text/Text.svelte";
    import MarevoMap from "$lib/images/svg/MarevoMap.svelte";
</script>

<div class="location-component">
    <div class="location-image-container">
        <svelte:component this={MarevoMap}/>
    </div>
    
    <div class="location-navigator">
        <div class="items">
            <Bus/>
            <div>
                <Text font="small" textAlign="left">
                    <span font="large" weight="semibold" color="54">버스</span>
                    <span>영통랜드마크호텔 정류장</span>
                    <span>[공항버스] 4100-1</span>
                </Text>
                <Text font="small" textAlign="left">
                    <span>영통역 8번출구 정류장</span>
                    <span>[시내버스] 2-1, 3, 13-1, 34-1, 203, 702-3</span>
                    <span>[시외버스] 1112, 5100, 7000, G5100, M5107</span>
                </Text>
            </div>
        </div>
        <hr/>
        <div class="items">
            <Subway/>
            <div>
                <Text font="small" textAlign="left">
                    <span font="large" weight="semibold" color="54">지하철</span>
                    <span>[수인분당선] 영통역 8번 출구</span>
                </Text>
            </div>
        </div>
        <hr/>
        <div class="items">
            <Parking/>
            <div>
                <Text font="small" textAlign="left">
                    <span font="large" weight="semibold" color="54">주차 안내 <span font="sub" color="54">(2시간 무료)</span></span>
                    <span>[제1주차장] 트리플렉스</span>
                    <span>수원시 영통구 매영로 345번길 7</span>
                    <span>[제2주차장] 영통공영주차장</span>
                    <span>수원시 영통구 봉영로 1598</span>
                </Text>
            </div>
        </div>
    </div>
</div>