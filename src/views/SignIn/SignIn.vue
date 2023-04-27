<template>
  <GuestLayout>
    <template v-slot:content>
      <div class="login-box">
        <div class="card card-outline card-dark">
          <div class="card-header text-center">
            <a href="#" class="h1"><b>Vue3 Base</b></a>
          </div>
          <div class="card-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-3">
                <input v-model="email" class="form-control" placeholder="Email" @input="validateEmail" />
                <p v-if="errorEmail" class="error-message mt-1">{{ errorEmail }}</p>
              </div>
              <div class="form-group mb-3">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  @input="validatePassword"
                />
                <p v-if="errorPassword" class="error-message mt-1">{{ errorPassword }}</p>
              </div>
              <div class="row">
                <div class="col-12">
                  <button type="submit" class="btn btn-dark btn-block">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </GuestLayout>
</template>

<script lang="ts" src="./SignIn.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
