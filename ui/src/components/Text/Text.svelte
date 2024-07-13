<script>
    import './text.css'
    
    export let font, color, weight, textAlign
</script>

<div class="text-component" font={font} color={color} weight={weight} text-align={textAlign}>
    <slot/>
</div>