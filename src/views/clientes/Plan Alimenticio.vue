<template>
  <div class="d-flex">
    <LeftMenu />
    <section>
      <div class="container-fluid">
        <div class="row">
          <div v-if="steps == 0" class="col-12 p-4">
            <h2>Plan Alimenticio a la Medida</h2>
            <p>
              En esta sección podrás tener una dieta que vaya acorde a tus preferencias de alimentos que más te gusten!
            </p>
            <button class="btn btn-primary" @click="steps = 1">COMENZAR</button>
          </div>
          <div v-if="steps == 1" class="col-12 p-4">
            <h3>Seleccione el resultado que desea obtener</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tipodedieta"
                value="Ganar Masa"
                v-model="respuestas.q1"
              />
              <label class="form-check-label">
                Ganar Masa Muscular
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tipodedieta"
                value="Bajar Peso"
                v-model="respuestas.q1"
              />
              <label class="form-check-label">
                Bajar de Peso
              </label>
            </div>
            <button class="btn btn-primary mt-3" @click="secondStep()">
              SIGUIENTE
            </button>
          </div>

          <div v-if="steps == 2" class="col-12 p-4 alimentos">
            <h3>
              <b
                >Seleccione los siguientes alimentos de acuerdo a su
                preferencia:</b
              >
              <!-- {{respuestas}} -->
            </h3>
            <br>
            <!--  Desayuno  -->
            <div class="row">
              <div class="col-12">
                <h4>Desayuno</h4>
              </div>
              <div v-if="desayuno == 0" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des1"
                    value="huevos"
                    v-model="respuestas.q2"
                    @change="desayuno++"
                  />
                  <label class="form-check-label">
                    Huevos
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des1"
                    value="pan"
                    v-model="respuestas.q2"
                    @change="desayuno++"
                  />
                  <label class="form-check-label">
                    Pan
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q2 == 'huevos' && desayuno == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des2"
                    @change="(respuestas.q3 = respuestas.q3 +1, desayuno++)"
                  />
                  <label class="form-check-label">
                    Fresas
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des2"
                    @change="(respuestas.q3 -- , desayuno++)"
                  />
                  <label class="form-check-label">
                    Plátano
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q2 == 'pan' && desayuno == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des3"
                    @change="(respuestas.q3 = respuestas.q3 +1, desayuno++)"
                  />
                  <label class="form-check-label">
                    Tostadas
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des3"
                    @change="(respuestas.q3 -- , desayuno++)"
                  />
                  <label class="form-check-label">
                    Pan
                  </label>
                </div>
              </div>
            </div>

            <!--  Almuerzo  -->
            <div class="row mt-3">
              <div class="col-12">
                <h4>Almuerzo</h4>
              </div>
              <div v-if="almuerzo == 0" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des4"
                    value="carnes"
                    v-model="respuestas.q4"
                    @change="almuerzo++"
                  />
                  <label class="form-check-label">
                    Carnes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des4"
                    value="papas"
                    v-model="respuestas.q4"
                    @change="almuerzo++"
                  />
                  <label class="form-check-label">
                    Papas
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'carnes' && almuerzo == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des5"
                    @change="(respuestas.q5 = respuestas.q5 +1, almuerzo++)"
                  />
                  <label class="form-check-label">
                    Pollo
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des5"
                    @change="(respuestas.q5 -- , almuerzo++)"
                  />
                  <label class="form-check-label">
                    Carne Molida
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'papas' && almuerzo == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des6"
                    @change="(respuestas.q5 = respuestas.q5 +1, almuerzo++)"
                  />
                  <label class="form-check-label">
                    Queso
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des6"
                    @change="(respuestas.q5 -- , almuerzo++)"
                  />
                  <label class="form-check-label">
                    Frijoles
                  </label>
                </div>
              </div>
            </div>

            <!--  Cena  -->
            <div class="row mt-3">
              <div class="col-12">
                <h4>Cena</h4>
              </div>
              <div v-if="cena == 0" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des7"
                    value="pescado"
                    v-model="respuestas.q6"
                    @change="cena++"
                  />
                  <label class="form-check-label">
                    Pescado
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des7"
                    value="yogurt"
                    v-model="respuestas.q6"
                    @change="cena++"
                  />
                  <label class="form-check-label">
                    Yogurt
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q6 == 'pescado' && cena == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des8"
                    @change="(respuestas.q7 = respuestas.q7 +1, cena++)"
                  />
                  <label class="form-check-label">
                    Atún
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des8"
                    @change="(respuestas.q7-- , cena++)"
                  />
                  <label class="form-check-label">
                    Pescado a la plancha
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q6 == 'yogurt' && cena == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des9"
                    @change="(respuestas.q7 = respuestas.q7 +1, cena++)"
                  />
                  <label class="form-check-label">
                    Almendras
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des9"
                    @change="(respuestas.q7 -- , cena++)"
                  />
                  <label class="form-check-label">
                    Tomate Cherry
                  </label>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-12">
                <button @click="steps=3" class="btn btn-primary">Resultados</button>
              </div>
            </div>
          </div>

          <!--  Resultados  -->
          <div v-if="steps == 3" class="col-12 p-4">
            <h3>
              <b
                >Resultados de Dieta</b
              >
            </h3>

            <div class="row">
              <div class="col-12">
                <h5><b>Desayuno</b></h5>
              </div>
              <div v-if="respuestas.q2 == 'huevos' && respuestas.q3 > 0" class="col-12">
                <ul>
                  <li>4 huevos</li>
                  <li>1/4 taza de avena</li>
                  <li>1/2 taza de fresas</li>
                </ul>
              </div>
              <div v-if="respuestas.q2 == 'huevos' && respuestas.q3 <= 0" class="col-12">
                <ul>
                  <li>2 huevos escalofados</li>
                  <li>1 taza de avena</li>
                  <li>1 taza de leche</li>
                  <li>1 plátano</li>
                </ul>
              </div>
              <div v-if="respuestas.q2 == 'pan' && respuestas.q3 > 0" class="col-12">
                <ul>
                  <li>3 rebanadas de tostadas</li>
                  <li>1 taza de avena</li>
                  <li>1 plátano</li>
                  <li>1/2 taza de fresas</li>
                </ul>
              </div>
              <div v-if="respuestas.q2 == 'pan' && respuestas.q3 <= 0" class="col-12">
                <ul>
                  <li>2 1/2 rebanadas de pan</li>
                  <li>1 taza de leche</li>
                  <li>1/2 taza de fresas</li>
                  <li>1/4 taza de avena</li>
                </ul>
              </div>
              <div class="col-12">
                <h5><b>Almuerzo</b></h5>
              </div>
              <div v-if="respuestas.q4 == 'carnes' && respuestas.q5 > 0" class="col-12">
                <ul>
                  <li>200 gr de pechuga de pollo picada</li>
                  <li>1 tomate cortado en cubitos</li>
                  <li>1/2 taza de 1 cucharada de crema agria</li>
                  <li>1/2 aguacate cortado en cubitos</li>
                </ul>
              </div>
              <div v-if="respuestas.q4 == 'carnes' && respuestas.q5 <= 0" class="col-12">
                <ul>
                  <li>200 gr de carne molida</li>
                  <li>1/2 taza de queso rallado</li>
                  <li>1 cucharada de mayonesa</li>
                  <li>1 tomate en rodajas</li>
                </ul>
              </div>
              <div v-if="respuestas.q4 == 'papas' && respuestas.q5 > 0" class="col-12">
                <ul>
                  <li>2 rebanadas de pan integral</li>
                  <li>1/2 taza de queso rallado</li>
                  <li>1 tomate/papa en rodajas</li>
                  <li>1/4 de taza de lechuga picada</li>
                </ul>
              </div>
              <div v-if="respuestas.q4 == 'papas' && respuestas.q5 <= 0" class="col-12">
                <ul>
                  <li>2 tortillas integrales</li>
                  <li>3/4 taza de frijoles refritos</li>
                  <li>1/2 taza de arroz cocido</li>
                  <li>1/2 aguacate/papa</li>
                </ul>
              </div>
              <div class="col-12">
                <h5><b>Cena</b></h5>
              </div>
              <div v-if="respuestas.q6 == 'pescado' && respuestas.q7 > 0" class="col-12">
                <ul>
                  <li>300 gr de filete de atun</li>
                  <li>1 taza de vegetales salteados</li>
                  <li>1 platano grande</li>
                </ul>
              </div>
              <div v-if="respuestas.q6 == 'pescado' && respuestas.q7 <= 0" class="col-12">
                <ul>
                  <li>4 huevos grandes</li>
                  <li>1/4 taza de avena</li>
                  <li>1/2 taza de fresas</li>
                  <li>250 gr de pescado a la plancha</li>
                </ul>
              </div>
              <div v-if="respuestas.q6 == 'yogurt' && respuestas.q7 > 0" class="col-12">
                <ul>
                  <li>1 taza de yogurt griego</li>
                  <li>1 manzana grande</li>
                  <li>100 gr de almendras enteras</li>
                  <li>2 1/2 rebanadas de pan</li>
                </ul>
              </div>
              <div v-if="respuestas.q6 == 'yogurt' && respuestas.q7 <= 0" class="col-12">
                <ul>
                  <li>2 tazas de pasta integral</li>
                  <li>5 tomates cherry</li>
                  <li>1 taza de yogurt griego</li>
                  <li>1/2 taza de fresas</li>
                </ul>
              </div>
              <div v-if="existe" class="col-12">
                <button class="btn btn-primary" @click="saveResult">GUARDAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import LeftMenu from "@/components/LeftMenu.vue";
export default {
  name: "Plan Alimenticio",
  data() {
    return {
      steps: 0,
      desayuno: 0,
      almuerzo: 0,
      cena: 0,
      existe : true,
      respuestas: {
        user: '',
        q3: 0,
        q5: 0,
        q7: 0
      },
    };
  },
  components: {
    LeftMenu,
  },
  methods: {
    secondStep() {
      if (this.respuestas.q1) {
        this.steps = 2;
      } else {
        alert("SELECCIONE UNA OPCIÓN PARA CONTINUAR");
      }
    },
    saveResult(){
      axios.post("http://localhost:3000/dieta-registro",this.respuestas).then(res => {
        alert("Dieta Guardada")
      })
    },
    cargarDieta(){
      axios.post("http://localhost:3000/dieta-user", this.respuestas).then(res => {
        console.log("test",res.data)
        if(res.data.q1){
          this.respuestas = res.data
          this.steps = 3
          this.existe = false;
        }
      })
    }
  },
  created(){  
    this.respuestas.user = localStorage.username
  },
  mounted(){
    this.cargarDieta()
  }
};
</script>

<style scoped>
section {
  text-align: left;
}

.alimentos .col-3 {
  text-align: center;
}
</style>
