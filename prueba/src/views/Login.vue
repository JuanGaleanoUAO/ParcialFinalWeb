<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Inicia sesión en tu cuenta</h4>
                    <h6 class="text-center grey--text">
                      Inicia sesión en tu cuenta para disfrutar de nuestras
                      ofertas
                      <br />Espacio para más información
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Correo electrónico"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          class="mt-16"
                        />
                        <v-text-field
                          label="Contraseña"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Recuérdame"
                              class="mt-n1"
                              color="green"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption green--text"
                              >¿Olvidaste tu contraseña?</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="green" dark block tile
                          >Iniciar sesión</v-btn
                        >

                        <h5 class="text-center grey--text mt-4 mb-3">
                          O inicia sesión con
                        </h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-16"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="green">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="green">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="green">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="green rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿Aún no tienes una cuenta?</h3>
                      <h6 class="text-center">
                        Vamos a prepararlo todo para que puedas disfutar de
                        nuestra pagina<br />
                        Información extra
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++"
                        >Regístrate aquí</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="green rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿Ya estas registrado?</h3>
                      <h6 class="text-center">
                        Inicia sesión en tu cuenta aquí<br />
                        Información extra
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--"
                        >Inicia sesión</v-btn
                      >
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">
                      Regístrese para obtener una cuenta
                    </h4>
                    <h6 class="text-center grey--text">
                      Vamos a prepararlo todo para que pueda comenzar a crear su
                      cuenta
                      <br />
                      Información extra
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Nombres"
                              outlined
                              dense
                              color="green"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Apellidos"
                              outlined
                              dense
                              color="green"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Correo Electrónico"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                        />
                        <v-text-field
                          label="Contraseña"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Acepto términos y condiciones"
                              class="mt-n1"
                              color="green"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption green--text ml-n4"
                              >Términos y condiciones</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="green" dark block tile>Registrarse</v-btn>

                        <h5 class="text-center grey--text mt-4 mb-3">
                          O inicia sesión con
                        </h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-11"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="green">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="green">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="green">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>