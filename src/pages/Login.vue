<template>
    <section class="auth">
        <div class="auth-box">
            <div class="auth-box__header">
                <h1>Login</h1>
            </div>
            <div class="auth-box__content">
                <form class="auth-box__form">
                    <input type="email" class="auth-box__input">
                    <input type="password" class="auth-box__input">
                    <button class="auth-box__submit">Login</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.auth {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.auth-box {
    width: 400px;
    margin: 0px auto;
    border: 2px solid #393939;
    border-radius: 10px;
    padding: 0px 20px;
}
.auth-box__header {
    padding: 20px 0px;
    text-align: center;
    font-size: larger;
}
.auth-box__content {
    padding: 20px 0px;
}
.auth-box__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.auth-box__input {
    padding: 8px 10px;
}
.auth-box__submit {
    padding: 6px;
    margin-top: 10px;
    cursor: pointer;
}
</style>