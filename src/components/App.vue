<template>
    <Page>
        
        <ActionBar title="Welcome" android:flat="true"/>
        <TabView android:tabBackgroundColor="#53ba82"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffffff">
            <TabViewItem title="Lessons">
                <GridLayout columns="*" rows="*">
              <LessonList @addLesson='cartAdded' />
                </GridLayout>

            </TabViewItem>
            <TabViewItem title="Checkout">
                <GridLayout columns="*" rows="*">
                <Checkout @removeLesson='remove' :cart='cart' /> 
                </GridLayout>
            </TabViewItem>
            <!-- <TabViewItem title="Tab 3">
                <GridLayout columns="*" rows="*">
                    <Label class="message" text="Tab 3 Content" col="0" row="0"/>
                </GridLayout>
            </TabViewItem> -->
        </TabView>
    </Page>
</template>

<script >
import LessonList from './LessonList.vue'
import Checkout from './CartAndCheckout.vue'
  export default {
    components: {
    LessonList,
    Checkout
  },
    data() {
      return {
          cart:[],
        msg: 'Submitted',
        
      }
    },
    methods:{
        remove(index)
        {
        this.cart.splice(index, 1);
        },
        cartAdded(cart){
            this.cart.push(cart);
            
            alert('product added to cart')
            console.log(cart)
            console.log(this.cart)
        },
        onItemTap()
        {

        }
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .texter {
        border:2px solid red;
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
