<template>
    <div class="container">
        <h1 v-if="loading">Loading</h1>
        <div v-else class="row">
            <div class="col-md-4">
                <img :src="product.image" class="img-fluid" alt="Product Image">
            </div>
            <div class="col-md-8 p-5">
                <h4 class="display-4"> {{product.title}} </h4>
                <div class="h3 text-muted mt-5"> {{product.price}}MMK </div>
                <p class="mt-5">
                    {{product.description}}
                </p>
                <div class="mt-5">
                    <router-link to="/product" class="btn btn-outline-secondary">Go Back</router-link>
                    <a href="" class="btn btn-primary float-right">Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
name : "ProductDetail",
data(){
    return{
        loading : false,
        product:{},
    }
},
created(){
    this.loading = true;
    axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
    .then(res=>{
        this.product = res.data
        this.loading = false;
    })
    // .catch((e) => {this.loading = false});
}
}
</script>

<style>

</style>