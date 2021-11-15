<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on">
          {{ $t("Make an order") }}
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ $t("Order form") }}</v-toolbar-title>
        </v-toolbar>
        <h3>{{$t('Title')}}: {{ item.title }}</h3>
        <h3>{{$t('Price')}}: {{ item.price }} $</h3>
        <h3>{{$t('Size')}}: {{ size }}</h3>
        <v-divider></v-divider>
        <v-form v-model="valid">
          <v-container>
            <v-row class="form">
              <v-col cols="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="12"
                  :label="$t('First name')"
                  filled
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="20"
                  :label="$t('Last name')"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  :label="$t('Phone')"
                  :counter="12"
                  type="number"
                  required
                  filled
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn dark @click="sendForm">{{$t('Send')}}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    item: Object,
    size: String,
  },
  data() {
    return {
      dialog: false,
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 12 || "Name must be less than 12 characters",
      ],
      phone: "",
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => v.length <= 11 || "Phone must be less than 11 characters",
      ],
    };
  },
  methods: {
    sendForm() {
      const order = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        title_product: this.item.title,
        price_product: this.item.price,
        size_product: this.size,
      };
      console.log(order);
      this.dialog = false;
    },
  },
};
</script>

<style lang="sass">
.form
    position: absolute
    left: 10px
</style>
