<style>
  @import '../assets/css/styles.css';
</style>

<template> 
 <ScrollView>
            <StackLayout class="home-panel">

                <ListView for="country in lessons" @itemTap="onItemTap"
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
                            
                                <Button text="Add to Cart" @tap="addcart(country)" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </ScrollView>
     
</template>

<script>
export default {
  name: "LessonList",
  props: {
  },
  data() {
    return {
      cart:[],
      btnCart:false,
      sort: '',
      lessons: [
        {
          SubjectName: "Maths",
          Location: "London",
          Price: 50.0,
          Space: 10,
          Image: "maths.svg",
        },
        {
          SubjectName: "English",
          Location: "Manchester",
          Price: 30.0,
          Space: 10,
          Image: "english.png",
        },
        {
          SubjectName: "Science",
          Location: "New York",
          Price: 75.0,
          Space: 10,
          Image: "science.png",
        },
        {
          SubjectName: "Computer Science",
          Location: "Birmingham",
          Price: 100.0,
          Space: 10,
          Image: "cs.jpg",
        },
        {
          SubjectName: "History",
          Location: "London",
          Price: 85.0,
          Space: 10,
          Image: "history.png",
        },
        {
          SubjectName: "Geography",
          Location: "New York",
          Price: 85.0,
          Space: 10,
          Image: "geography.png",
        },
        {
          SubjectName: "Religious Education",
          Location: "Leeds",
          Price: 80.0,
          Space: 10,
          Image: "Re.png",
        },
        {
          SubjectName: "Phyical Education",
          Location: "Reading",
          Price: 110.0,
          Space: 10,
          Image: "PhyicalEducation.png",
        },
        {
          SubjectName: "Business",
          Location: "Cape Town",
          Price: 145.0,
          Space: 10,
          Image: "business.png",
        },
        {
          SubjectName: "Information Technology",
          Location: "Amsterdam",
          Price: 25.0,
          Space: 10,
          Image: "IT.png",
        },
      ],
    }
  },
  methods: {
     addcart(cart) {       
      this.$emit('addLesson',cart)
    this.lessons.splice(0, 1);
    },
    reduce(index) {
      this.lessons[index].Space--;
      if (this.lessons[index].Space == 0) {
        document.getElementById("Space").innerHTML = "<h4>Spaces Full</h4>"
        document.getElementById("add").style.visibility = "hidden";
      } 
    }
  },
};
</script>
