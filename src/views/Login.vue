<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
              <div class="alert alert-danger" v-if="message"> {{message}} </div>
              <h3 class="mt-2 mb-3">Login</h3>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input type="email" v-model="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="password" v-model="password" class="form-control" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
          </div>
          <div class="card-footer">
            <small><span class="text-muted text-sm">Don't have an account?</span><a href="#">Register</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "login",
  data(){
    return{
      email : "",
      password : "",
      message : "error"
    }
  },
  methds : {
    login(){
      if(this.email === 'admin@mail.com' && this.password === '123'){
        this.$router.push('/profile');
      } else{
        this.message = "Email or password is incorrect"
      }
    }
  }
}
</script>

<style>

</style>