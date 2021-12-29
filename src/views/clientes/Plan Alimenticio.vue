<template>
  <div class="d-flex">
    <LeftMenu />
    <section>
      <div class="container-fluid">
        <div class="row">
          <div v-if="steps == 0" class="col-12 p-4">
            <h2>Plan Alimenticio a la Medida</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              aut natus. Voluptas natus fugiat ipsa optio necessitatibus
              doloremque debitis, alias earum, exercitationem autem quasi sint
              dolore ipsam consectetur aut dolorum!
            </p>
            <button class="btn btn-primary" @click="steps = 1">COMENZAR</button>
          </div>
          <div v-if="steps == 1" class="col-12 p-4">
            <h3>Que resultados desea obtener</h3>
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
              {{respuestas}}
            </h3>

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
              <div v-if="desayuno == 1" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des2"
                    @change="(respuestas.q3 = respuestas.q3 +2, desayuno++)"
                  />
                  <label class="form-check-label">
                    Platanos
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
                    Fresas
                  </label>
                </div>
              </div>
              <div v-if="desayuno == 2" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des3"
                    @change="(respuestas.q3 ++, desayuno++)"
                  />
                  <label class="form-check-label">
                    Avena
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
                    Leche
                  </label>
                </div>
              </div>
            </div>

            <!--  Comida  -->
            <div class="row mt-3">
              <div class="col-12">
                <h4>Comida</h4>
              </div>
              <div class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des4"
                    value="carnes"
                    v-model="respuestas.q4"
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
                  />
                  <label class="form-check-label">
                    Papas
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'carnes'" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des5"
                    @change="respuestas.q5++"
                  />
                  <label class="form-check-label">
                    Carne Molida
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des5"
                    @change="respuestas.q5--"
                  />
                  <label class="form-check-label">
                    Pollo
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'papas'" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des6"
                    @change="respuestas.q5++"
                  />
                  <label class="form-check-label">
                    Lechuga
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des6"
                    @change="respuestas.q5 = respuestas.q5 - 2"
                  />
                  <label class="form-check-label">
                    Frijoles
                  </label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des7"
                    @change="respuestas.q5++"
                  />
                  <label class="form-check-label">
                    Queso
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des7"
                    @change="respuestas.q5--"
                  />
                  <label class="form-check-label">
                    Aguacate
                  </label>
                </div>
              </div>
            </div>

            <!--  Cena  -->
            <div class="row mt-3">
              <div class="col-12">
                <h4>Cena</h4>
              </div>
              <div v-if="respuestas.q4 == 'carnes'" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des8"
                    @change="respuestas.q7++"
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
                    @change="respuestas.q7--"
                  />
                  <label class="form-check-label">
                    Pescado
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'carnes'" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des9"
                    @change="respuestas.q7++"
                  />
                  <label class="form-check-label">
                    Plátano
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des9"
                    @change="respuestas.q7--"
                  />
                  <label class="form-check-label">
                    Fresas
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'papas'" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des10"
                    @change="respuestas.q7++"
                  />
                  <label class="form-check-label">
                    Tomate Cherry
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des10"
                    @change="respuestas.q7--"
                  />
                  <label class="form-check-label">
                    Almendras
                  </label>
                </div>
              </div>
              <div v-if="respuestas.q4 == 'papas'" class="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des11"
                    @change="respuestas.q7 = respuestas.q7 +2"
                  />
                  <label class="form-check-label">
                    Manzana
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="des11"
                    @change="respuestas.q7= respuestas.q7 - 2"
                  />
                  <label class="form-check-label">
                    Fresas
                  </label>
                </div>
              </div>
            </div>

            <div v-if="respuestas.q7 != 0" class="row">
              <div class="col-12">
                <button @click="steps=3" class="btn btn-primary">Resultados</button>
              </div>
            </div>
          </div>

          <!--  Resultados  -->
          <div class="col-12 p-4">
            <h3>
              <b
                >Resultados de Dieta</b
              >
            </h3>

            <div class="row">
              <div class="col-12">
                <h5><b>Desayuno</b></h5>
              </div>
              <div v-if="respuestas.q2 == 'huevos' && respuestas.q3 <= 0" class="col-12">
                <ul>
                  <li>4 huevos</li>
                  <li>1/4 taza de avena</li>
                  <li>1/2 taza de fresas</li>
                </ul>
              </div>
              <div v-if="respuestas.q2 == 'huevos' && respuestas.q3 > 0" class="col-12">
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
              <div class="col-12">
                <h5><b>Cena</b></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu.vue";
export default {
  name: "Plan Alimenticio",
  data() {
    return {
      steps: 2,
      desayuno: 0,
      respuestas: {
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
  },
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
