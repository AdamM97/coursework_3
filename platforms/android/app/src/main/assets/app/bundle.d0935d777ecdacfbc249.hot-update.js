webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/CartAndCheckout.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Checkout",
  props: ['cart'],

  data() {
    return {
      name: "",
      Phonenumber: "",
      checkoutMsg: false,
      textFieldValue: ''
    };
  },

  methods: {
    checkout() {
      alert('going to checkout');
    },

    removecart(index) {
      this.$emit('removeLesson', index);
    },

    remove(lesson) {
      this.$emit("removeFromCart", lesson);
    },

    validateCheckout(name, Phonenumber) {
      //This function is used to validate the name and the phonenumber.
      var regExname = /^[A-Za-z]+$/;
      var regExphoneNumber = /^[\s()+-]*([0-9][\s()+-]*){11,20}$/;
      return regExname.test(name) && regExphoneNumber.test(Phonenumber); //It will check the name and phonenumber with each of their regex.
    },

    purchase() {
      this.checkoutMsg = true;
      setTimeout(function () {
        location.reload();
      }, 5000); //Refreshes after 5 seconds. 
    }

  },
  computed: {
    checkCheckout() {
      //This function checks the validation of the name and phonenumber inputted by the validate function.
      if (!this.validateCheckout(this.name, this.Phonenumber)) {
        return false; //Returns false which means either the name, phonoNo, or Both are incorrect.
      } else {
        return true; //Returns true if both matches the regex. 
      }
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYXJ0QW5kQ2hlY2tvdXQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkE7O0FBR0E7QUFDQTtBQUNBLGNBREE7QUFFQSxxQkFGQTtBQUdBLHdCQUhBO0FBSUE7QUFKQTtBQU1BLEdBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUVBO0FBQ0EsS0FQQTs7QUFRQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLHdFQUhBLENBR0E7QUFDQSxLQWZBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBLEVBRkEsQ0FJQTtBQUNBOztBQXJCQSxHQVhBO0FBa0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EscUJBREEsQ0FDQTtBQUNBLE9BRkEsTUFFQTtBQUNBLG9CQURBLENBQ0E7QUFDQTtBQUNBOztBQVBBO0FBbENBLEciLCJmaWxlIjoiYnVuZGxlLmQwOTM1ZDc3N2VjZGFjZmJjMjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XHJcbiAgQGltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZXMuY3NzJztcclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCIgdi1pZj0nY2FydC5sZW5ndGggPiAwJz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiKGNvdW50cnksIGluZGV4KSBpbiBjYXJ0XCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OjEyNTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4V3JhcD1cIndyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY291bnRyeS5TdWJqZWN0TmFtZVwiIHdpZHRoPVwiNDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY291bnRyeS5Mb2NhdGlvblwiIHdpZHRoPVwiNDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJjb3VudHJ5LlByaWNlXCIgd2lkdGg9XCI0MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2LWlmPSdjYXJ0Lmxlbmd0aCA+IDAnIHRleHQ9XCJyZW1vdmVcIiBAdGFwPVwicmVtb3ZlY2FydChpbmRleClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHdpZHRoPVwiMTAwJVwiIHYtbW9kZWw9XCJ0ZXh0RmllbGRWYWx1ZVwiIHYtaWY9J2luZGV4ID09IChjYXJ0Lmxlbmd0aC0xKScgaGludD1cIkVudGVyIHRleHQuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNoZWNrb3V0XCIgdi1pZj0naW5kZXggPT0gKGNhcnQubGVuZ3RoLTEpJyBAdGFwPVwiY2hlY2tvdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTm8gaXRlbXMgaW4gY2FydFwiIHdpZHRoPVwiNDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiQ2hlY2tvdXRcIixcclxuICAgIHByb3BzOiBbJ2NhcnQnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgUGhvbmVudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIGNoZWNrb3V0TXNnOiBmYWxzZSxcclxuICAgICAgICAgICAgdGV4dEZpZWxkVmFsdWU6JydcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGVja291dCgpe1xyXG4gICAgICAgICAgICBhbGVydCgnZ29pbmcgdG8gY2hlY2tvdXQnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlY2FydChpbmRleCl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmVMZXNzb24nLGluZGV4KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlKGxlc3Nvbikge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicmVtb3ZlRnJvbUNhcnRcIiwgbGVzc29uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRlQ2hlY2tvdXQobmFtZSwgUGhvbmVudW1iZXIpIHsgICAvL1RoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byB2YWxpZGF0ZSB0aGUgbmFtZSBhbmQgdGhlIHBob25lbnVtYmVyLlxyXG4gICAgICAgICAgICBsZXQgcmVnRXhuYW1lID0gL15bQS1aYS16XSskLztcclxuICAgICAgICAgICAgbGV0IHJlZ0V4cGhvbmVOdW1iZXIgPSAvXltcXHMoKSstXSooWzAtOV1bXFxzKCkrLV0qKXsxMSwyMH0kLztcclxuICAgICAgICAgICAgcmV0dXJuIHJlZ0V4bmFtZS50ZXN0KG5hbWUpICYmIHJlZ0V4cGhvbmVOdW1iZXIudGVzdChQaG9uZW51bWJlcik7ICAvL0l0IHdpbGwgY2hlY2sgdGhlIG5hbWUgYW5kIHBob25lbnVtYmVyIHdpdGggZWFjaCBvZiB0aGVpciByZWdleC5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHB1cmNoYXNlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0TXNnID0gdHJ1ZTtcclxuICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMDApOyAgIC8vUmVmcmVzaGVzIGFmdGVyIDUgc2Vjb25kcy4gXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY2hlY2tDaGVja291dCgpIHsgLy9UaGlzIGZ1bmN0aW9uIGNoZWNrcyB0aGUgdmFsaWRhdGlvbiBvZiB0aGUgbmFtZSBhbmQgcGhvbmVudW1iZXIgaW5wdXR0ZWQgYnkgdGhlIHZhbGlkYXRlIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVDaGVja291dCh0aGlzLm5hbWUsIHRoaXMuUGhvbmVudW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy9SZXR1cm5zIGZhbHNlIHdoaWNoIG1lYW5zIGVpdGhlciB0aGUgbmFtZSwgcGhvbm9Obywgb3IgQm90aCBhcmUgaW5jb3JyZWN0LlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgIC8vUmV0dXJucyB0cnVlIGlmIGJvdGggbWF0Y2hlcyB0aGUgcmVnZXguIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+Il0sInNvdXJjZVJvb3QiOiIifQ==