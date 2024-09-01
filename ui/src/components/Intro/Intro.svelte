<script>
    import './intro.css'
    
    import {PUBLIC_API_HOST} from '$env/static/public'
    import Text from "@components/Text/Text.svelte";
    import Title from "@components/Title/Title.svelte";
</script>

<div class="intro-component">
    <div class="intro-container">
        <Title>
            We Are Getting Married !
        </Title>
        <img src={`${PUBLIC_API_HOST}/images/BSH08104.jpg`}>
        <div class="intro-content">
            <Text font="large" color="36" textAlign="center" weight="semibold">
                <span>권영진&emsp;|&emsp;송민교</span>
            </Text>
            <Text font="plain" color="36"  textAlign="center">
                <span weight="semibold">2024.10.09 WED 11:00AM</span>
                <span weight="regular">The Marevo. 15F. Atelier.M</span>
            </Text>
        </div>
    </div>
</div>