<template>
  <v-row justify="center" class="space px-16 pb-5">
    <v-col cols="12" xs="12" sm="6" md="4" v-for="(pack, i) in packs" :key="i">
      <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
        <div align="center" justify="center">
          <v-img
            max-height="300"
            max-width="300"
            contain
            :src="pack.img"
          ></v-img>
        </div>

        <v-card-title class="">{{ pack.title }}</v-card-title>
        <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
          pack.subtitle
        }}</v-card-title>
        <v-card-title class="mt-n4">{{ pack.price }}</v-card-title>

        <v-card-actions class="mx-2 mt-n4">
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" @click="decrement"> mdi-minus </v-icon>
          </v-btn>

          <strong class="mx-2" v-text="bpm"></strong>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" @click="increment"> mdi-plus </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-2 mt-n3" fab dark small color="green">
            <v-icon dark> mdi-shopping </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    bpm: 1,
    packs: [
      {
        img: "p1.jpg",
        title: "Pasta Bolognesa",
        subtitle:
          "Carne molida estofada en salsa napolitana,cocida con tomates y finas hierbas",
        price: "$55.000",
      },
      {
        img: "p2.png",
        title: "Baby Beef",
        subtitle:
          "Baby beef con semillas de ajonjoli y ensalada de la casa, acompañado de chimichurri",
        price: "$95.000",
      },
      {
        img: "p3.png",
        title: "Tomahawk",
        subtitle:
          "Corte de carne angus importada (rib eye con hueso). Servidos con cebolla crocante",
        price: "$598.000",
      },
      {
        img: "p4.png",
        title: "Salmón Catrina",
        subtitle:
          "Salmón fresco servido oon puré rústico y emulsión de aguacate",
        price: "$79.900",
      },
      {
        img: "p5.png",
        title: "Pollo Cantina",
        subtitle: "Pollo relleno de espinaca y queso, envuelto en tocineta",
        price: "$69.900",
      },
      {
        img: "p6.png",
        title: "Hamburguesa",
        subtitle:
          "Hamburguesa con carne angus a la parrilla, servida con papas rusticas",
        price: "$59.000",
      },
    ],
  }),
  methods: {
    decrement() {
      this.bpm--;
    },
    increment() {
      this.bpm++;
    },
  },
};
</script>

<style></style>