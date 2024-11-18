<script setup>
const { $swal } = useNuxtApp();
const userRegisteObject = ref({
  email: "",
  password: "",
  nickname: "",
});

const processRegistration = async (requsetBody) => {
  try {
    const response = await $fetch("/users/sign_up", {
      method: "POST",
      baseURL: "https://todolist-api.hexschool.io/",
      body: {
        ...requsetBody,
      },
    });
    await $swal.fire({
      position: "center",
      icon: "success",
      title: "註冊成功",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    const { message } = error.response._data;
    await $swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  } finally {
    userRegisteObject.value = { address: {} };
  }
};
</script>

<template>
  <div class="bg-light py-3 py-md-5 vh-100">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div class="bg-white p-4 p-md-5 rounded shadow-sm">
            <h2 class="h3 mb-4">會員註冊</h2>
            <form @submit.prevent="processRegistration(userRegisteObject)">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="firstName" placeholder="王小明" required v-model="userRegisteObject.nickname" />
                <label for="firstName">姓名 <span class="text-danger">*</span></label>
              </div>

              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="example@gmail.com"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                  v-model="userRegisteObject.email"
                />
                <label for="email">信箱 <span class="text-danger">*</span></label>
              </div>

              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入 8 碼以上密碼"
                  pattern=".{8,}"
                  required
                  v-model="userRegisteObject.password"
                />
                <label for="password">密碼 <span class="text-danger">*</span></label>
              </div>

              <button class="btn btn-lg btn-primary w-100" type="submit">註冊</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
