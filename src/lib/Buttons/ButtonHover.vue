<template>
  <button class="btn">
    <span class="text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
@import '@common';

$main: #c7166f;
$white: #f2f1f4;
$darkgray: #1a0f13;

.btn {
  @extend %reset-button;

  align-items: center;
  cursor: pointer;
	color: $darkgray;
	display: flex;
	font-size: 19px;
	line-height: 0;
	outline: none;
	padding: 1.25rem;
	position: relative;
	text-decoration: none;
	transition: color 250ms ease;
}

.btn::before {
	background-color: $main;
	border-radius: 100%;
	content: "";
	display: block;
	height: 1.125rem;
	left: -1px;
	opacity: 0.5;
	padding: 0.75rem;
	position: absolute;
	top: -1px;
	transition: all 250ms ease;
	width: 1.125rem;
}

.btn:hover:before {
	border-radius: 4px;
	opacity: 0.9;
	width: 82%;
}

.btn:hover {
	color: $white;
}

.text {
	position: relative;
}

</style>