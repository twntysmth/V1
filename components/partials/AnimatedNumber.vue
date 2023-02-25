<script setup>

	const $fact = ref(null);

	onMounted(() => {

		checkIfModuleIsInViewport();
		window.addEventListener("scroll", checkIfModuleIsInViewport);

	});

	function checkIfModuleIsInViewport(){

		if($fact && $fact.value && elementInViewport($fact.value)){

			initNumberCountUpAnimation();
			window.removeEventListener("scroll", checkIfModuleIsInViewport);

		}

	}

	function initNumberCountUpAnimation(){

		const $factNumbers = $fact.value.querySelectorAll("*[data-fact-number]");

		for(const $factNumber of $factNumbers){

			animateNumber($factNumber, 0, parseInt($factNumber.getAttribute("data-fact-number")));

		}

	}

	function animateNumber(element, start, end){
		let range = end - start;
		let current = start;
		let obj = element;
		let increment = range / 75;

		let timer = setInterval(function(){

			let thisEnd = end.toLocaleString();
			current += increment;
			let thisCurrent = Math.trunc( current );
			obj.innerHTML = current > end ? thisEnd : thisCurrent.toLocaleString();

			if (current === end || current > end){
				clearInterval(timer);
			}

		}, 50);
	}

</script>

<template>

	<span ref="$fact">
		<slot/>
	</span>
	
</template>

