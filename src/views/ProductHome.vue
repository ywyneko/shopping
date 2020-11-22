<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" alt="product_image" class="p-img">
            <h3 class="mt-4">{{product.title}}</h3>
            <div class="mt-4 text-muted">${{product.price}}</div>
            <router-link class="btn btn-primary btn-block" :to="`/product/${product.id}`">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : "productHome",
  data(){
    return{
      products : [],
    }
  },
  created(){
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      this.products = res.data;
    })
  }
  
}
</script>

<style>
  .p-img{
    height: 150px;
  }
</style>