<template>
  <div>
    <v-container class="body-component" fluid>
      <v-row class="Principal cols-2 my-2">
        <v-col class="col-11.5 mx-4">
          <v-row class="border">
            <v-col>
              <v-carousel
                cycle
                height="300"
                hide-delimiters
                show-arrows-on-hover
              >
                <!-- Slide para cada una de las 5 noticias más recientes -->
                <v-carousel-item
                  v-for="notices in latestNotices"
                  :key="notices.id"
                >
                  <v-card
                    @click="openModal(notices)"
                    hover
                    color="light-blue lighten-5"
                    outlined
                    class="latest-notice"
                  >
                    <v-row no-gutters class="cols-2 mx-auto">
                      <v-col class="col-5 contenedor" sm="8" md="5">
                        <v-img 
                        class="imagen"
                        :src="notices.images"
                       
                        ></v-img>
                      </v-col>
                      <v-col class="col-7">
                        <v-card-title class="text-uppercase text-justify">{{
                          notices.title
                        }}</v-card-title>
                        <v-card-subtitle class="text-caption">
                          <p class="my-0 py-0">
                            {{ notices.autor }} / {{ notices.category }} -
                            {{ notices.time }}
                          </p>
                        </v-card-subtitle>

                        <v-card-text class="text--primary">
                          <div v-html="notices.abstract"></div>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>

          <v-row class="my-4 border">
            <v-card
              max-width="270"
              hover
              outlined
              v-for="notice in getNoticesFile"
              :key="notice._id"
              class="notice-card my-2 mx-auto"
            >
              <v-img height="150px" :src="notice.images"></v-img>

              <v-card-title
                class="text-uppercase text-justify text-subtitle-2"
                >{{ notice.title }}</v-card-title
              >
              <v-card-subtitle class="text-caption">
                <p class="my-0 py-0">
                  {{ notice.autor }} / {{ notice.category }} / {{ notice.time }}
                </p>
              </v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="openModal(notice)" text color="orange lighten-2"
                  >Ver mas...
                </v-btn>
                <v-btn @click="eliminarNoticia(notice._id)">
                  <v-icon>mdi-delete</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-row>

          <v-snackbar
            v-model="hasSaved"
            :timeout="5000"
            absolute
            bottom
            center
            color="green"
          >
            {{ msg }}
          </v-snackbar>
          <v-dialog
            transition="dialog-bottom-transition"
            v-model="modalVisible"
          >
            <v-card>
              <v-toolbar class="hidden-xs-only">
                <v-btn  icon @click="closeModal" 
                  ><v-icon>mdi-close-circle</v-icon></v-btn
                  
                >
               <!--  <v-btn  icon>
        <v-icon class="mr-0">mdi-close-circle</v-icon>
      </v-btn>
      <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn> -->

                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container class="grey lighten-5">
                <v-row align="center">
                  <v-col>
                    <v-card-title
                      class="text-uppercase text-h4 align-center justify-center"
                      >{{
                        selectedNotice ? selectedNotice.title : ""
                      }}</v-card-title
                    >
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="10" sm="6">
                    <img
                      style="max-width: 100%; max-height: 600px"
                      class="content"
                      :src="selectedNotice ? selectedNotice.images : ''"
                    />
                  </v-col>
                  <v-col  cols="auto" >
                    <v-card width="580" height="327" class="overflow-auto">
        <v-card-text>
            <div
                      class="content"
                      v-html="selectedNotice ? selectedNotice.content : ''"
                    ></div>
        </v-card-text>
      </v-card>

                  </v-col>
                </v-row>
              </v-container>
              <!--  <v-card-title class="text-uppercase">{{ selectedNotice ? selectedNotice.title : '' }}</v-card-title> -->
              <v-row>
                <!--                             <v-col class="mx-5">
                                <img style="max-width:100%; max-height: 600px;" class="content" :src="selectedNotice ? selectedNotice.images: ''">
                            </v-col> -->
              </v-row>
              <v-row>
                <v-col class="mx-5">
                  <!--                                 <div class="content" v-html="selectedNotice ? selectedNotice.content: ''"></div>
 -->
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
    <filtrocategoria />
  </div>
</template>

<script>
import axios from "axios";
import filtrocategoria from "./listar/Dashboardprueba.vue";

export default {
  components: {
    filtrocategoria,
  },

  data: () => ({
    hasSaved: false,
    msg: "",
    getNoticesFile: [],
    latestNoticeFromData: null,
    modalVisible: false, // Controla la visibilidad del modal
    selectedNotice: null, // Almacena la noticia seleccionada
  }),

  mounted() {
    this.getNotices();
  },

  computed: {
    latestNotices() {
      if (this.getNoticesFile.length === 0) {
        return null;
      }
      // Ordenar las noticias por el campo "time" de manera descendente
      const sortedNotices = [...this.getNoticesFile].sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      );
      return sortedNotices.slice(0, 5); // Tomar las primeras 5 noticias
    },
  },

  methods: {
    openModal(notice) {
      this.selectedNotice = notice; // Almacena la noticia seleccionada
      this.modalVisible = true; // Abre el modal
    },
    closeModal() {
      this.selectedNotice = null; // Borra la noticia seleccionada
      this.modalVisible = false; // Cierra el modal
    },

    eliminarNoticia(id) {
      // Lógica para eliminar la noticia en el backend y MongoDB
      axios
        .delete(`http://localhost:3001/deletenotices/${id}`)
        .then((response) => {
          // Aquí puedes manejar la respuesta exitosa, como mostrar un mensaje de éxito o actualizar la lista de noticias
          console.log(response.data.message);
          this.getNotices();
          this.msg = "Noticia Eliminada";
          this.hasSaved = true;
        })
        .catch((error) => {
          // Aquí puedes manejar el error, como mostrar un mensaje de error o registrar el error en la consola
          console.error(error.response.data.error);
        });
    },

    // Obtenr el paquete de Notices del Mongodb
    async getNotices() {
      try {
        const response = await axios.get("http://localhost:3001/notices");
        this.getNoticesFile = response.data.reverse();
        this.latestNoticeFromData = this.latestNotice; // Actualizar la noticia más reciente en data
        console.log(this.getNoticesFile);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>


.content img {
  margin: 10;
  width: 100px;
  height: 100px;
  
}

.contenedor {
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
