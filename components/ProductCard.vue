<template>
	<div class="product-card">
		<CarditemCardImg :imageSrc="imageSrc" />
		<CarditemCardiTitle :title="title" />
		<CarditemCardiPrice :price="price" />
		<button class="product-button">{{ buttonText }}</button>
	</div>
</template>

<script setup>
defineProps({
	imageSrc: String,
	altText: String,
	title: String,
	price: String,
	buttonText: String,
});
</script>

<style scoped>
.product-card {
	border: 1px solid #ddd;
	border-radius: 8px;
	max-width: 300px;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
}

.product-card:hover {
	transform: translateY(-5px);
}

.product-button {
	display: block;
	width: 100%;
	padding: 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 0 0 8px 8px;
	cursor: pointer;
	text-align: center;
	font-size: 16px;
}

.product-button:hover {
	background-color: #0056b3;
}
</style>
