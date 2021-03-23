<style>
  @import '../assets/css/styles.css';
</style>

<template>
 <ScrollView>
            <StackLayout class="home-panel" v-if='cart.length > 0'>

                <ListView for="(country, index) in cart" @itemTap="onItemTap"
                    style="height:1250px">
                    <v-template>
                     <FlexboxLayout flexWrap="wrap"
                            >
                            <Label :text="country.SubjectName" width="40%"
                                />
                            <Label :text="country.Location" width="40%"
                               />
                            <Label :text="country.Price" width="40%"
                                 />
                         
                                <Button v-if='cart.length > 0' text="remove" @tap="removecart(index)" />
                                    <TextField width="100%" v-model="textFieldValue" v-if='index == (cart.length-1)' hint="Enter text..." />
                                      <Button text="Checkout" v-if='index == (cart.length-1)' @tap="checkout" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </StackLayout>
            <StackLayout class="home-panel" v-else>
                <Label text="No items in cart" width="40%"
                                 />
            </StackLayout>
          
            

        </ScrollView>

</template>

<script>
export default {
    name: "Checkout",
    props: ['cart'],
    data() {
        return {
            name: "",
            Phonenumber: "",
            checkoutMsg: false,
            textFieldValue:''
        };
    },
    methods: {
        checkout(){
            alert('going to checkout')
        },
        removecart(index){

            this.$emit('removeLesson',index)
        },
        remove(lesson) {
            this.$emit("removeFromCart", lesson);
        },
        validateCheckout(name, Phonenumber) {   //This function is used to validate the name and the phonenumber.
            let regExname = /^[A-Za-z]+$/;
            let regExphoneNumber = /^[\s()+-]*([0-9][\s()+-]*){11,20}$/;
            return regExname.test(name) && regExphoneNumber.test(Phonenumber);  //It will check the name and phonenumber with each of their regex.
        },
        purchase() {
            this.checkoutMsg = true;
             setTimeout(function () {
                location.reload();
            }, 5000);   //Refreshes after 5 seconds. 
        }
    },
    computed: {
        checkCheckout() { //This function checks the validation of the name and phonenumber inputted by the validate function.
            if (!this.validateCheckout(this.name, this.Phonenumber)) {
                return false;   //Returns false which means either the name, phonoNo, or Both are incorrect.
            } else {
                return true;    //Returns true if both matches the regex. 
            }
        },
    }
};
</script>