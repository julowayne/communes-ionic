<template>
<div v-if="$route.name === 'communes'">
  <ion-label>Entrez une ville ou un code postal</ion-label>
  <p>exemple : "Paris" ou "75001"</p>
  <ion-searchbar v-model="query" show-cancel="always"></ion-searchbar>
  <section>
    <ion-button type="submit" :disabled="!query && query.length > 3" @click="getCorrectCall">Rechercher</ion-button>
  </section>
</div>
<div v-if="$route.name === 'departements'">
  <ion-list>
    <ion-item>
      <ion-label>Rechercher un département</ion-label>
      <ion-select v-model="query" placeholder="Choisir">
        <ion-select-option v-for="departement in allDepartements" :key="departement" :value="departement.code"> {{ departement.code }} | {{ departement.nom }}</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
  <section>
    <ion-button :disabled="!query" @click="getDepartementInformations">Recherche</ion-button>
  </section>
</div>
<div v-if="$route.name === 'regions'">
  <ion-list>
    <ion-item>
      <ion-label>Rechercher une région</ion-label>
      <ion-select v-model="query" placeholder="Choisir">
        <ion-select-option v-for="region in allRegions" :key="region" :value="region.code"> {{ region.code }} | {{ region.nom }}</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
  <section>
    <ion-button :disabled="!query" @click="getRegionDepartement">Recherche</ion-button>
  </section>
</div>

</template>

<script>
import { IonSearchbar, IonLabel, IonButton, IonList, IonSelect, IonSelectOption, IonItem } from '@ionic/vue';
import axios from 'axios';

  export default {
    name:"Search",
    components: {
      IonSearchbar,
      IonLabel,
      IonButton,
      IonList, 
      IonSelect, 
      IonSelectOption,
      IonItem
    },
    data(){
      return {
        query: "",
        displayContent: [],
        allRegions: [],
        regions: [],
        allDepartements: [],
        departements: [],
        errors: []
      }
    },
    emits: ["allData", "regionData", "departementData"],
    methods:{
      checkResults(){
        this.errors = []
        if(this.displayContent.length === 0){
          this.errors.push('Aucun résultat trouvé pour la requête')
        }
      },
      //COMMUNES
      getCorrectCall(){
        if(isNaN(parseInt(this.query))){
          console.log(this.query)
          this.getByCities();
        }
        else {
          console.log(this.query)
          this.getByCode();
        }
      },
      getByCities(){
        axios.get(`https://geo.api.gouv.fr/communes?nom=${this.query}&boost=population&fields=region,population,codesPostaux,departement`)
          .then((response)=> {
            console.log(response)
            this.displayContent = response.data
            this.$emit('allData', this.displayContent)
          })
          .catch(function (error) {
            this.error = error;
            console.log(error);
        });
      },
      getByCode(){
        axios.get(`https://geo.api.gouv.fr/communes?codePostal=${this.query}&boost=population&fields=region,population,codesPostaux,departement`)
          .then((response)=> {
            this.displayContent = response.data
            this.$emit('allData', this.displayContent)
          })
          .catch(function (error) {
            this.error = error;
            console.log(error);
        });
      },
      //METHODS POUR SELECT REGIONS
      getRegions(){
        axios.get(`https://geo.api.gouv.fr/regions`)
          .then((response)=> {
            this.allRegions = response.data
          })
          .catch(function (error) {
            this.error = error;
            console.log(error);
        });
      },
      getRegionDepartement(){
        axios.get(`https://geo.api.gouv.fr/regions/${this.query}/departements`)
          .then((response)=> {
            this.regions = response.data
            this.$emit('regionData', this.regions)
          })
          .catch(function (error) {
            this.error = error;
            console.log(error);
        });
      },
      //METHODS POUR SELECT DEPARTEMENTS
      getDepartement(){
        axios.get(`https://geo.api.gouv.fr/departements`)
          .then((response)=> {
            this.allDepartements = response.data
          })
          .catch(function (error) {
            this.error = error;
            console.log(error);
        });
      },
      getDepartementInformations(){
        axios.get(`https://geo.api.gouv.fr/departements/${this.query}/communes`)
          .then((response)=> {
            console.log(response)
            this.departements = response.data
            this.$emit('departementData', this.departements)
          })
          .catch(function (error) {
            this.error = error;
            console.log(error);
        });
      }
    },
    mounted(){
      this.getRegions();
      this.getDepartement();
    }
  }
</script>

<style scoped>
  ion-label {
    margin-top: 1em;
  }
  ion-button {
    --box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    --color: white;
    --background: #20c997;
    --background-activated: #20c997;
    width: 80%;
  }
  section {
    margin-top: 1em;
    margin-bottom: 2.5em;
  }
</style>