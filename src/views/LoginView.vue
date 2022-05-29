<script setup>
import { UserFirebase } from "@/firebase/UserFirebase.js";
import { AuthSigninPassword } from "@/firebase/AuthSigninPassword.js";
import { AuthSignOut } from "@/firebase/AuthSignOut.js";
// import { useCounterStore } from "@/stores/counter";
</script>

<script>
export default {
  data() {
    return {
      // greeting: "Hello World! ",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // const counter = useCounterStore();
      const credentials = {
        email: this.user.email,
        password: this.user.password,
      };

      const firebaseApp = UserFirebase.UserFirebaseConfig();
      console.log(firebaseApp);

      const onLogin = AuthSigninPassword.userLogin(credentials);
      console.log(onLogin);

      // counter.isLogin = true;
      // console.log('a ' + counter.isLogin);
    },
    onSignOut() {
      const firebaseApp = UserFirebase.UserFirebaseConfig();
      console.log(firebaseApp);

      const logOut = AuthSignOut.userSignOut();
      console.log(logOut);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="row justify-content-md-center">
          <!-- <pre>{{isLogin}}</pre> -->
          <div class="card text-center col-md-5 mt-4">
            <div class="card-body">
              <form @submit.prevent="onSubmit">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating my-1">
                  <input
                    v-model="user.email"
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating my-1">
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <!-- <div class="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"> Remember me
                                    </label>
                                </div> -->
                <button class="w-100 btn btn-lg btn-primary my-1" type="submit">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
