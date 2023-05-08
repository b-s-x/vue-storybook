<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Cursor } from '.';

const cursor = ref();
onMounted(() => cursor.value = new Cursor())

const handleCursorEnter = (event: MouseEvent) => cursor.value.setCurrentElement(event.target);
const handleCursorLeave = () => cursor.value.setCurrentElement(null);
const handleCursorMove = (event: MouseEvent) => cursor.value.updateCursor(event);

</script>

<template>
	<div class="container box" @mousemove="handleCursorMove">

		<div id="cursor" />

		<div class="wrapper">
			<a
				class="link"
				style="--size: 60px"
				@mouseenter="handleCursorEnter"
				@mouseleave="handleCursorLeave"
			>
				B
			</a>
			<a
				class="link"
				style="--size: 80px"
				@mouseenter="handleCursorEnter"
				@mouseleave="handleCursorLeave"
			>
				S
			</a>
			<a
				class="link"
				style="--size: 60px"
				@mouseenter="handleCursorEnter"
				@mouseleave="handleCursorLeave"
			>
				X
			</a>
		</div>

		<div class="wrapper">
			<button
				class="button"
				@mouseenter="handleCursorEnter"
				@mouseleave="handleCursorLeave"
			>
				SImple button
			</button>
		</div>
	</div>
</template>

<style lang="scss">

.container {
	width: 100vw;
	height: 100vh;
}

.box {
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: rgba(25, 25, 25, 1);
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1em 0;
}

#cursor {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: var(--width);
	height: var(--height);
	transform:
		translate(
			calc(var(--x) - var(--width) / 2),
			calc(var(--y) - var(--height) / 2)
		);
	transition-duration: .1s;
	transition-timing-function: cubic-bezier(.25, .25, .42, 1);
	transition-property: width, height, transform;
	z-index: 1;
	pointer-events: none;
	will-change: transform;
	background-color: transparent;

	@media (pointer: fine) {
		display: block;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: var(--radius);
		border: 2px solid hsl(160, 55, 45);
		opacity: var(--scale);
		transform: scale(var(--scale));
		transition:
			.3s cubic-bezier(.25, .25, .42, 1) opacity,
			.3s cubic-bezier(.25, .25, .42, 1) transform,
			.1s cubic-bezier(.25, .25, .42, 1) border-radius;
	}
}

.link {
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	margin: 0 1em;
	width: var(--size);
	height: var(--size);
	background: rgba(255, 255, 255, .1);
	border-radius: 100%;
}

.button {
	appearance: none;
	border: none;
	color: white;
	cursor: inherit;
	padding: 0.5em 1em;
	background: rgba(255, 255, 255, .1);
	border-radius: 5px;
}
</style>