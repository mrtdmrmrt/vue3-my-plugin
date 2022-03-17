<template>
<div>
    <h1 class="header-title">
        <slot name="title"/>
    </h1>
    <h2 class="title-author">
        <slot name="author"/>
    </h2>
</div>
</template>
<style>
html, body{
    font-size: 1.2rem;
    background: #fafafa;
}
</style>