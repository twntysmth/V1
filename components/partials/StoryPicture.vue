<script setup>

	const props = defineProps({
		s1440: {
			type: [String],
		},
		s1280: {
			type: [String]
		},
		s1024: {
			type: [String]
		},
		s768: {
			type: [String]
		},
		s480: {
			type: [String]
		},
		s0: {
			type: [String]
		},
		sNone: {
			type: [String]
		},
		alt: {
			type: [String]
		},
        loading: {
			type: [String]
		},
		src: {
			type: [String]
		},
        retina: {
            default: true,
			type: [Boolean]
        }        
	})

    const hasMinimalData = () => {
        return props.sNone && props.src
    }

    const getSizes = (src,sizeString,showRetina = true) => {
        if (!sizeString) {
            return null
        }
        let width = 0, height = 0, widthRetina = 0, heightRetina = 0, normal = '', retina = '', srcset = ''
        const sizes = sizeString.split(",")
        if (sizes.length) {
            width = sizes[0]
            widthRetina = width * 2
            if (sizes.length == 2) {
                height = sizes[1]
                heightRetina = height * 2
            }
            normal = `${width}x${height}`
            retina = `${widthRetina}x${heightRetina}`
            srcset = `${src}/m/${normal}`
            if (showRetina) {
                srcset += `, ${src}/m/${retina} 2x`
            }
        }

        return srcset
    };

    const sizes1440 = getSizes(props.src,props.s1440)
    const sizes1280 = getSizes(props.src,props.s1280)
    const sizes1024 = getSizes(props.src,props.s1024)
    const sizes768 = getSizes(props.src,props.s768)
    const sizes480 = getSizes(props.src,props.s480)
    const sizes0 = getSizes(props.src,props.s0)
    const sizesEmpty = getSizes(props.src,props.sNone,false)
    
</script>

<template>

    <picture v-if="hasMinimalData()">
        <source v-if="sizes1440" media="(min-width: 1440px)" :srcset="sizes1440">
        <source v-if="sizes1280" media="(min-width: 1280px)" :srcset="sizes1280">
        <source v-if="sizes1024" media="(min-width: 1024px)" :srcset="sizes1024">
        <source v-if="sizes768" media="(min-width: 768px)" :srcset="sizes768">
        <source v-if="sizes480" media="(min-width: 480px)" :srcset="sizes480">
        <source v-if="sizes0" :srcset="sizes0">
        <img :src="sizesEmpty" :alt="alt" :loading="loading">
    </picture>

</template>